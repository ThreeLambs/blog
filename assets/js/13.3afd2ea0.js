(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{559:function(s,r,e){"use strict";e.r(r);var t=e(12),o=Object(t.a)({},(function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-安装sql-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装sql-server"}},[s._v("#")]),s._v(" docker 安装Sql Server")]),s._v(" "),e("ul",[e("li",[s._v("dockerHub镜像 https://hub.docker.com/_/microsoft-mssql-server")]),s._v(" "),e("li",[s._v("文档  https://docs.microsoft.com/zh-cn/sql/linux/sql-server-linux-docker-container-configure?view=sql-server-ver15&pivots=cs1-bash")])]),s._v(" "),e("ol",[e("li",[s._v("拉取镜像")])]),s._v(" "),e("blockquote",[e("p",[s._v("docker pull mcr.microsoft.com/mssql/server:2019-latest")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("创建容器")])]),s._v(" "),e("blockquote",[e("p",[s._v('docker run  -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Yq@340822" --name mssql -p 14333:1433 -d   mcr.microsoft.com/mssql/server:2019-latest')])]),s._v(" "),e("h2",{attrs:{id:"挂载卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载卷"}},[s._v("#")]),s._v(" 挂载卷")]),s._v(" "),e("h3",{attrs:{id:"将主机目录作为数据卷装载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将主机目录作为数据卷装载"}},[s._v("#")]),s._v(" 将主机目录作为数据卷装载")]),s._v(" "),e("p",[s._v("第一种方法是在主机上将目录作为容器中的数据卷装载。请将 "),e("code",[s._v("docker run")]),s._v(" 命令与 "),e("code",[s._v("-v <host directory>:/var/opt/mssql")]),s._v(" 标志配合使用")]),s._v(" "),e("blockquote",[e("p",[s._v('docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Yq@340822" -p 14331:1433  --name mssql -v d:/docker/mssql/data:/var/opt/mssql/data -v d:/docker/mssql/log:/var/opt/mssql/log -v d:/docker/mssql/data/secrets:/var/opt/mssql/secrets -d mcr.microsoft.com/mssql/server:2019-latest')])]),s._v(" "),e("p",[s._v("注意： Windows 上的 Docker 的主机卷映射当前不支持映射完整的 "),e("code",[s._v("/var/opt/mssql")]),s._v(" 目录 。 但是，你可以将子目录（如 "),e("code",[s._v("/var/opt/mssql/data")]),s._v("）映射到主机。")]),s._v(" "),e("p",[s._v("windows下命令行使用双引号")]),s._v(" "),e("h3",{attrs:{id:"使用数据卷容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用数据卷容器"}},[s._v("#")]),s._v(" 使用数据卷容器")]),s._v(" "),e("p",[s._v("第二种方法是使用数据卷容器")]),s._v(" "),e("blockquote",[e("p",[s._v("docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong!Passw0rd>' -p 1433:1433 -v sqlvolume:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2019-latest")])])])}),[],!1,null,null,null);r.default=o.exports}}]);