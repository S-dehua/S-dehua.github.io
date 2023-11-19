import os
import time
import sys
import re
import shutil

folder_path = './docs'
filter_word = ['http']
filter_folder = ['.vuepress', '@pages']
image_path = 'https://s-dehua.github.io/assets'
dev_img_path = './docs/.vuepress/public/assets/'
is_md_image_dir = '.assets'
modified_flag = 0

def list_md_files(folder_path,look=False):
    md_files = []
    dir_files = [f for f in os.listdir(f'{dev_img_path}')]
    for root,dirs,files in os.walk(folder_path):
        dirs[:] = [dir for dir in dirs if dir not in filter_folder]
        md_image_dirs = [dir for dir in dirs if is_md_image_dir in dir]
        for dir in md_image_dirs:
            if dir not in dir_files:
                shutil.copytree(os.path.join(root,dir), os.path.join(dev_img_path, dir))
                print(f'cp=>已将文件"{dir}"复制至{dev_img_path}')
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root,file))
    if look:
        if md_files:
            print('Markdown Files:')
            for md in md_files:
                print(md)
        else:
            print('No Markdown file found.')
    return md_files

def process_line(line):
    global modified_flag
    match = re.search(r'!\[(.*?)\]\((.*?)\)', line)
    if match:
        for word in filter_word:
            if word in line:
                return line
        modified_flag += 1
        imagename = match.group(2).split('/',-1)
        new_path = f'{image_path}/{imagename[-2]}/{imagename[-1]}'
        line = line.replace(match.group(0), f'![img]({new_path})')
    return line

def process_file(input_file):
    lines = ""
    with open(input_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    with open(input_file, 'w', encoding='utf-8') as file:
        for line in lines:
            processed_line = process_line(line)
            file.write(processed_line)

def main():
    if len(sys.argv) != 2:
        print('==========================')
        print(' 误运行可能造成文件损失！')
        print('==========================')
        print(f'Usage: python {sys.argv[0]} start')
    else:
        start_time = time.time()
        md_files = list_md_files(folder_path,look=True)
        for md in md_files:
            process_file(md)
        end_time = time.time()
        print(f'耗时{end_time - start_time}s 检测完成{"无修改" if modified_flag == 0 else "修改" + str(modified_flag) + "次"}')

if __name__ == "__main__":
    main()