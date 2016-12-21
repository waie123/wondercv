# 系统/应用架构师

专注WEB开发&集成&全栈架构，Python/Django/Tornado，前端工程化&前端模块化&前端构建，Nginx部署与配置，HTTP协议&缓存技术&网站优化。

---

## 联系方式

- 手机：13066873854（深圳，张万超）
- Email：wonderbeyond@gmail.com
- 微信号：workwonder

---

## 个人信息

 - 张万超/男/1989 
 - 本科/电子商务/自学IT
 - 工作年限：4年
 - Github：http://github.com/wonderbeyond
 - 期望职位：系统架构师，应用架构师，前端架构师
 - 期望薪资：月薪25k+，特别喜欢的公司可例外
 - 期望城市：深圳

---

## 关键技能

具备完整架构和开发大型网站的能力，能够融通前后端主流技术和解决方案；

长期Linux使用经验，能够熟练运用Shell或Python脚本来解决问题，注重系统的高可靠、自动化部署；

熟练阅读英文文档，具备快速学习并应用新技术的能力。

特别擅长的技能有：Git、Python、JavaScript、Webpack、Nginx、Regex（正则表达式）

## 工作经历

### [深圳众禄金融控股股份有限公司](https://www.zlfund.cn/) （ 2012年11月至今 ）

负责公司旗下各网站的架构制定与调整、前端技术选型与架构、网站的部署、各系统的功能集成以及专项解决方案的制定，
同时日常参与各系统的功能开发与代码检视。

## 项目经验

### 用户行为跟踪系统（始于2016年12月）

用户行为系统是服务于公司多个网站（不同域名）的用户行为收集、分析和统计的综合系统。
该项目的业务目标是把用户的开户、交易等行为和用户的浏览行为关联起来，
并和SEO、SEM等推广的效果进行挂钩。我负责该项目的整体设计和部分功能模块的实现。

设计思路摘要：
- 为每个浏览器实例（或APP安装实例）标记一个ID，作为跟踪ID(Tracking ID)。
- 记录跟踪ID发生的各种自然行为(actions)，把行为抽象为包含属性(properties)的事件(events)，并推送到服务端存储（注：所有事件必须包含跟踪ID属性）。
- 不同事件携带不同的属性集合，考虑采用非模式化(schema-less)存储。
- 使用独立的分析推导模块来做进一步的信息加工，比如综合多条行为数据、关联业务数据等。

该项目的一大难点是如何**跨域组合跟踪**同一用户对不同域名网站的访问，即跨域共享同一个跟踪ID。
经过参考，最终实现为利用第三方Cookie记录跟踪ID，
同时提供一个接口让受访域也可以获取跟踪ID并存储在本域的Cookie中。

实现亮点：跨域组合跟踪；JS SDK的引入、调用机制；高吞吐量的事件接收服务

### 基金买卖网移动端WEB（始于2016年11月）

该项目是为了实现公司新版的移动端WEB整体设计，功能涵盖产品详情、新闻资讯、
注册登录、交易以及账户中心等。项目体量较大，业务细节繁多。
我在该项目中负责整体架构、技术选型、开发分工以及质量和进度的把控。
该项目的体量以及重要性都要求在架构和选型上为多人协助和并行开发提供便利，
在整体架构方面，我自然选择了前后端完全分离；
后端实现为多个职责独立的Rest服务，不同服务可以根据业务特点以及开发人员的技能组合有不同的选型；
前端方面也为多人协助开发做了很大努力，我在全面参考了社区脚手架的基础上为项目制定了细致目录结构，
用来承载逻辑分类与分层。

技术选型：
- 后端：Tornado / Django + Django-REST-framework / ...
- 前端：Webpack + Vue + Vuex + Vue-router + PostCSS

实现亮点：前后端分离；针对SEO的服务端预渲染。

### PIS产品信息服务（始于2015年06月，持续迭代）

PIS是我在经过长期的业务开发后，根据需要提炼出来的一个微服务项目。
该项目专注于统一整合产品数据逻辑，提供支持丰富查询选项的产品信息服务，输出Rest API。
它解决了以往公司多个项目都需要关注并处理复杂产品数据结构和逻辑的问题，
现在只需在一个项目中关注并实现，大大降低了系统整体的复杂度。

技术选型：Tornado + MotorEngine + MongoDB

实现亮点：
自动推导Restful URL映射；
灵活自定义URL参数到模型层的查询映射；
提供功能丰富、灵活的基础Handler，以保证API的一致性，并降低冗余；
支持极高的并发；支持平滑部署升级。

### Nginx配置管理与部署（始于2013年08月，持续迭代）

这是一个DevOps项目，把公司旗下所有的Nginx配置集中在一个项目中管理，并提供配套的自动发布脚本。
解决了公司以往Nginx配置分散、缺乏审查等问题。

该项目经过长期的迭代，集成的特性有：

- 基于[ngx_srcache](https://github.com/openresty/srcache-nginx-module)的页面缓存
- 集成[Lua](https://github.com/openresty/lua-nginx-module)和精选的Lua库，提供灵活的配置能力
- 基于IP分组的访问控制
- 基于Nginx+Prerender的服务端预渲染

### 其他工作项目

我在众禄金融主导的项目还有：高端精品网站（zltop）、定制内容管理系统（Snip）、公共静态资源管理系统、产品数据管理系统等。
我同时在日常维护公司的几个交易网站，并负责代码检视。

### 闲置物品发布平台 （2015年02月~2015年03月）

一个移动端网站，前端使用HTML5+AngularJS+Ionic技术组合；后台充分利用Django，配合Django-REST-framework，输出Restful接口。
这是我在春节前后接手的付费项目, 完成前后端架构和功能开发。借此项目契机，学习并实践了一些前后端新技术。


### EZLog个人博客系统（2012年07月~2012年08月）

[EZLog](https://github.com/wonderbeyond/ezlog)是用Django开发的个人博客系统，也可以用来做个人网站。
它是我早期的个人项目，当时带着巨大的兴趣专注开发，凝聚了自己的辛苦学习成果和开发理念，也攒了大量的技巧，最终分享了出来。

## 技能清单

- Web后端：Python/Django/Tornado/Django-REST-framework
- Web前端：HTML/JavaScript/CSS/Vue/React
- 前端工具：Sass/Less/PostCSS/Babel/NPM/Gulp/Webpack/Rollup
- 数据库相关：PostgreSQL/MongoDB/SQLAlchemy/MongoEngine
- 版本管理：Git/GitLab
- 系统部署：Fabric/Nginx/OpenResty/Systemd/Supervisor/uWSGI
- 其它：Prerender/Syncthing

### 关键字

Linux/Debian/Ubuntu, Shell, Systemd, Supervisor,
Python, Django, Tornado, Django-REST-framework, SQLAlchemy,
Web, MVC, ORM, Ajax, RestFul, JSON,
HTML/HTML5, CSS/CSS3, JavaScript/ES6/NodeJS, Babel,
Backbone, Vue, React, AngularJS,
NPM, Gulp, Webpack, Rollup,
NoSQL, Redis, MongoDB,
Fabric, Nginx, OpenResty, Lua


---

## 致谢
感谢您花时间阅读我的简历，期待能有机会和您共事。
