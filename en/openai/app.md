# Compatible Applications

Because AIGC2D and OpenAI's interfaces are fully compatible, many applications on the market only need to modify the API endpoint to be able to use them. Here are some applications that can be used with AIGC2D.

If your application is compatible with AIGC2D or if you want to write a documentation for an application that integrates with AIGC2D, please contact us for integration and submission (WeChat: lp1830934534). 
*You can contact us to receive point rewards for writing application integration documentation.*

- BetterChatGPT
- ChatBox
- ChatGPT-Next-Web
- wechat-chatgpt
- Immersive Translation
- [Chat2DB](#chat2db)

## BetterChatGPT

[BetterChatGPT](https://chat.aigc2d.com) is an amazing UI for OpenAI's ChatGPT (Website + Windows + MacOS + Linux).

![aigc2d](/assets/aigc2d-beeterchatgpt.png)

### Setup Tutorial

Fill in the APIKEY with AIGC2D's APIKEY.

![aigc2d](/assets/aigc2d-setting.png)

## ChatBox

[ChatBox](https://github.com/Bin-Huang/chatbox/) is an incredibly efficient AI assistant on your desktop. It is a desktop client for GPT/LLM, with debugging and management tools for prompts, supporting Windows, Mac, and Linux.

![chat box](/assets/chatbox-snapshot.png)

### Setup Tutorial

1. Open ChatBox settings.
2. Select AI Provider as OpenAI API.
3. Fill in the OpenAI API KEY with AIGC2D's APIKEY.
4. Set API HOST to: https://api.aigc2d.com

![img.png](/assets/chatbox.png)

## ChatGPT-Next-Web

[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web) allows you to have your own cross-platform ChatGPT application with just one click.

![changed-next-web](/assets/chatgpt-next-web.png)

### Setup Tutorial

When deploying, set `BASE_URL` to https://api.aigc2d.com/ and `OPENAI_API_KEY` to AIGC2D's APIKEY.

Deploy with docker-compose:

```shell
docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="aigc-xxx" \
   -e CODE="your-password" \
   -e BASE_RUL="https://api.aigc2d.com"
   yidadaa/chatgpt-next-web
```

## wechat-chatgpt

[wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) quickly integrates ChatGPT on WeChat, making it your best assistant!

### Setup Tutorial

Modify the environment variables:

- Change `API` to https://api.aigc2d.com/
- Enter AIGC2D's APIKEY for `OPENAI_API_KEY`

## Immersive Translation

[Immersive Translation](https://immersivetranslate.com/) is a free, easy-to-use, revolutionary, acclaimed, AI-driven bilingual web page translation extension that helps you effectively bridge the information gap, even on your mobile phone!

### Setup Tutorial

1. Select translation service: OpenAI
2. Enter AIGC2D's APIKEY for APIKEY
3. Customize API interface address: https://api.aigc2d.com/v1/chat/completions

![translate](/assets/translate.png)

## Chat2DB

[Chat2DB](https://github.com/chat2db/Chat2DB) is a free and open-source multi-database client tool developed by Alibaba. It supports local installation on Windows and Mac, as well as server-side deployment and web page access. Compared to traditional database client software like Navicat and DBeaver, Chat2DB integrates the capabilities of AIGC, allowing natural language to be converted into SQL and vice versa. It can provide optimization suggestions for SQL queries, greatly improving the efficiency of developers. It is a powerful tool for database developers in the AI era. Even non-technical users can easily use it to quickly query business data and generate reports.

![Chat2DB](/assets/chat2db.png)

### Setup Tutorial

In the settings, set up a custom AI:

- Fill in `apikey` with AIGC2D's APIKEY
- Set `Api Host` to: https://api.aigc2d.com

![Chat2db](/assets/chat2db-setting.png)