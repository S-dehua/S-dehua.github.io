import re
import os
import sys

def is_image_tag(line):
    return re.search(r'!\[(.*?)\]\((.*?)\)', line) is not None

def remove_image_tags(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as infile, open(output_file, 'w', encoding='utf-8') as outfile:
        for line in infile:
            if is_image_tag(line):
                arr = line.split("\"")
                if len(arr) != 1:
                    line = arr[0][:-1] + ")\n"
            outfile.write(line)

# 输入文件和输出文件的路径
input_path  = sys.argv[1]
output_path = input_path+'.temp'

# 调用函数进行处理
remove_image_tags(input_path, output_path)

os.remove(input_path)
os.rename(output_path,output_path[:-5])

