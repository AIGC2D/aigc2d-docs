# 快速开始

使用AIGC2D的模型API网关，与使用模型官方接口没有任何区别。这是为了兼容围绕模型构建的周边应用。平台目前已经接入了OpenAI大部分接口，接下来的示范以OpenAI为例。

OpenAI的模型接口，需要授权后使用，注册登录AIGC2D后可以管理您自己的授权密钥。

在完成充值或者开通会员后，进入APIKey管理页面,创建一个APIKEY进行接口模型的使用

![api-key](/assets/api-key.png)

复制好您的密钥串后，还需要在访问时将OpenAI官方接口的域名地址替换为本平台提供的网关地址，如果不替换为AIGC2D网关地址，直接用密钥串访问OpenAI，是无法识别的。

<div class="info custom-block" style="padding-top: 8px">
<b>OpenAI 官方访问地址</b>

https://api.openai.com
</div>


<div class="tip custom-block" style="padding-top: 8px">
<b>AIGC2D 接口地址</b>


https://api.aigc2d.com
</div>

<div class="tip custom-block" style="padding-top: 8px">
<b>AIGC2D 备用接口地址</b>


https://apigw.aigc2d.com
</div>


如果您已经理解了上述概念，其实就可以通过OpenAI官方模型接口文档文档，来上手进行测试了，访问时只需要将OpenAI官方访问地址替换为AIGC2D接口地址。 [OpenAI官方接口文档](https://platform.openai.com/docs/api-reference/introduction)

快点开始你的第一次体验吧！首先需要在您使用的操作系统，安装curl命令行工具，如果不熟悉或未安装curl命令行工具，请自行搜索教程安装。 您可以将以下命令粘贴到终端中以运行您的第一个 API 请求。请确保将 APIKEY 替换为您的密钥。

```shell
curl https://api.aigc2d.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $AIGC2D-APIKEY" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "您好，很高兴遇见你!，我是AIGC2D"}],
     "temperature": 0.7
   }'
```
![curl](/assets/quick-curl.png)

虽然已经完成了第一次测试，如果您真的想要基于API去构建应用程序，实现更复杂的业务逻辑，还是建议您使用各开发语言封装好的API SDK去调用API模型，这些SDK也都支持对访问地址进行配置，可以与AIGC2D网关配合使用。


