(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{533:function(t,n,o){"use strict";o.r(n);var s=o(4),e=Object(s.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[this._v("● Virus Total\n● Netcraft\n● DNSdumpster\n● Threat crowed\n● Shodan\n● Cencys\n● DNSdb\n● Pastebin\nhttp://chaos.projectdiscovery.io/\n老站、同样架构或同源码的子站\n爆破，接口查询\n  https://phpinfo.me/domain/\n  https://d.chinacycc.com/index.php?m=Login&a=index\n  subDomainBrute、knockpy\nOWA发现、dig adfs、dig mail\nhttps://linux.die.net/man/1/host \nhttps://dns.bufferover.run/dns?q=baidu.com\nhttp://api.hackertarget.com/reversedns/?q=target.com\nhttps://github.com/OJ/gobuster\n  $ ./gobuster dns -d xxx.com -w subdomains.txt\nhttps://github.com/infosec-au/altdns\n  $ altdns -i found_subdomains.txt -o permutation_output -w words.txt -r -s resolved_output.txt\nhttps://github.com/OWASP/Amass\n  $ amass enum -passive -d <Domain Name Here>\nhttps://github.com/guelfoweb/knock\n  $ knockpy.py <Domain Name Here>\nSecurityTrails API查询子域名\n  去https://securitytrails.com/申请个免费的API\n  curl -s --request GET --url https://api.securitytrails.com/v1/domain/target.com/subdomains?apikey=API_KEY | jq '.subdomains[]' | sed 's/\\\"//g' >test.txt 2>/dev/null && sed \"s/$/.target.com/\" test.txt | sed 's/ //g' && rm test.txt\n\nsubfinder - Subfinder 是一个子域发现工具，可以为网站发现有效的子域。 \nhttps://github.com/projectdiscovery/subfinder \n  >subfinder -d google.com -all -v \nassetfinder - 查找与给定域相关的域和子域。 \nhttps://github.com/tomnomnom/assetfinder \n  >assetfinder --subs-only google.com\nknockknock - 一个简单的反向 whois 查找工具，它返回个人或公司拥有的域列表。 \nhttps://github.com/harleo/knockknock \n  >knockknock -n google.com -p \nfindomain - 域识别的完整解决方案。支持截屏、端口扫描、HTTP 检查、从其他工具导入数据、子域监控、通过 Discord、Slack 和 Telegram 发出警报、用于源的多个 API 密钥等等。 \nhttps://github.com/Findomain/Findomain \n  >findomain -t google.com \nhakrevdns - 用于执行大量反向 DNS 查找的小型快速工具。 \nhttps://github.com/hakluke/hakrevdns \n  >prips 173.0.84.0/24 | hakrevdns -d \ngooglecertfarm\nhttps://github.com/rook1337/googlecertfarm \n  >python3 googlecertfarm.py -d google.com\nhttps://github.com/shmilylty/OneForAll\n  >python oneforall.py --target example.com run\n  >python oneforall.py --targets ./example.txt run\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);