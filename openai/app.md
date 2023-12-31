# 兼容应用

因为AIGC2D和OpenAI的接口完全兼容，所以市面上的很多应用只需要修改接口地址(API ENDPOINT) 就可以使用了。这里列举一些可以使用AIGC2D的应用。

如果你的应用兼容了AIGC2D或者想写一个应用对接AIGC2D的文档，欢迎联系我们进行对接投稿 (微信:lp1830934534), *
*编写应用对接文档可以联系我们领取点数奖励**

- BetterChatGPT
- ChatBox
- ChatGPT-Next-Web
- wechat-chatgpt
- 沉浸式翻译
- [Chat2DB](#chat2db)

## BetterChatGPT

[BetterChatGPT](https://chat.aigc2d.com) OpenAI的ChatGPT（网站+ Windows + MacOS + Linux）的惊人UI

![aigc2d](/assets/aigc2d-beeterchatgpt.png)

### 设置教程

APIKEY 填入AIGC2D的APIKEY

![aigc2d](/assets/aigc2d-setting.png)

## ChatBox

[ChatBox](https://github.com/Bin-Huang/chatbox/)  效率爆棚！Chatbox 是你桌面上的最强 AI 搭档。一个 GPT/LLM 的桌面客户端，Prompt
的调试与管理工具，支持 Windows、Mac 和 Linux
![chat box](/assets/chatbox-snapshot.png)

### 设置教程

1. 打开ChatBox设置
2. AI Provider 选择 OpenAI API
3. OpenAI API KEY 填入 AIGC2D 的APIKEY
4. API HOST 填写为：https://api.aigc2d.com

![img.png](/assets/chatbox.png)

## ChatGPT-Next-Web

[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)一键拥有你自己的跨平台 ChatGPT 应用

![changed-next-web](/assets/chatgpt-next-web.png)

### 设置教程

部署时设置 `BASE_URL` 为 https://api.aigc2d.com/    `OPENAI_API_KEY` 为 AIGC2D的apikey

docker-compose 部署

```shell
docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="aigc-xxx" \
   -e CODE="your-password" \
   -e BASE_RUL="https://api.aigc2d.com"
   yidadaa/chatgpt-next-web
```

## wechat-chatgpt

[ wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) 在微信上迅速接入 ChatGPT，让它成为你最好的助手！

### 设置教程

环境变量修改：

- `API` 修改为  https://api.aigc2d.com/
- `OPENAI_API_KEY` 输入 AIGC2D的APIKEY

## 沉浸式翻译

[沉浸式翻译](https://immersivetranslate.com/) 一款免费的，好用的，没有废话的，革命性的，饱受赞誉的，AI
驱动的双语网页翻译扩展，帮助你有效地打破信息差，在手机上也可以用！

### 设置教程

1. 翻译服务选择：OpenAI
2. APIKEY 输入 AIGC2D的APIKEY
3. 自定义 API 接口地址：https://api.aigc2d.com/v1/chat/completions

![translate](/assets/translate.png)

## Chat2DB

[Chat2DB](https://github.com/chat2db/Chat2DB) 一款由阿里巴巴开源免费的多数据库客户端工具，支持windows、mac本地安装，也支持服务器端部署，web网页访问。
和传统的数据库客户端软件Navicat、DBeaver 相比Chat2DB集成了AIGC的能力，能够将自然语言转换为SQL，
也可以将SQL转换为自然语言，可以给出研发人员SQL的优化建议，极大的提升人员的效率，是AI时代数据库研发人员的利器，
不懂SQL的运营或业务也可以轻松使用快速查询业务数据、生成报表的能力。

![Chat2DB](/assets/chat2db.png)

### 设置教程

设置里面设置自定义AI

- `apikey` 填入AIGC2D的APIKEY
- `Api Host` 填写为： https://api.aigc2d.com

![Chat2db](/assets/chat2db-setting.png)
