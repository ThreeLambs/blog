---
title: sql
date: 2021-12-02
---

# docker 安装Sql Server

* dockerHub镜像 https://hub.docker.com/_/microsoft-mssql-server
* 文档  https://docs.microsoft.com/zh-cn/sql/linux/sql-server-linux-docker-container-configure?view=sql-server-ver15&pivots=cs1-bash

1. 拉取镜像

> docker pull mcr.microsoft.com/mssql/server:2019-latest

2. 创建容器

>   docker run  -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Yq@340822" --name mssql -p 14333:1433 -d   mcr.microsoft.com/mssql/server:2019-latest 

## 挂载卷

### 将主机目录作为数据卷装载

第一种方法是在主机上将目录作为容器中的数据卷装载。请将 `docker run` 命令与 `-v <host directory>:/var/opt/mssql` 标志配合使用

> docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Yq@340822" -p 14331:1433  --name mssql -v d:/docker/mssql/data:/var/opt/mssql/data -v d:/docker/mssql/log:/var/opt/mssql/log -v d:/docker/mssql/data/secrets:/var/opt/mssql/secrets -d mcr.microsoft.com/mssql/server:2019-latest

注意： Windows 上的 Docker 的主机卷映射当前不支持映射完整的 `/var/opt/mssql` 目录 。 但是，你可以将子目录（如 `/var/opt/mssql/data`）映射到主机。

windows下命令行使用双引号

### 使用数据卷容器

第二种方法是使用数据卷容器

> docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong!Passw0rd>' -p 1433:1433 -v sqlvolume:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2019-latest
