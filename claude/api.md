## Claude接口使用指南
Anthropic公司最具实力的模型，不仅在复杂对话和创意内容创作上表现卓越，还能精准跟随详细指令。

<div class="tip custom-block" style="padding-top: 8px">
AIGC2D_APIKEY 是指从控制台api keys中获得的密钥 请注意再使用时将域名替换为本站提供的API域名，否则密钥无效
</div>

本平台提供的Claude接口，除支持官方API协议，同时还兼容了OpenAI接口协议。提供此兼容的原因是，社区或者AI应用软件，基本上都是以OpenAI接口协议标准开发的，如果可以轻松替换模型名称参数访问不同供应商的模型，可以适配更多的客户端，开发者也不再需要学习新的API和SDK，社区开源框架都可以直接用。

如果想关注Claude官方接口的参数细节，请查阅[Claude官方API文档](https://docs.anthropic.com/claude/reference/complete_post) ，平台接口协议和官方API完全保持一致。 如果想关注OpenAI接口使用方式请查阅[OpenAI接口使用文档](/openai/sdk)


### 对话生成接口
给定提示后，模型将返回一个或多个预测的完成结果，并且还可以返回每个位置上备选标记的概率。


### Claude官方协议

POST https://api.aigc2d.com/v1/complete 为提供的提示和参数创建完成。

```shell
curl --request POST \
     --url https://api.aigc2d.com/v1/complete \
     --header 'accept: application/json' \
     --header 'anthropic-version: 2023-06-01' \
     --header 'content-type: application/json' \
     --header 'x-api-key: $AIGC2D_APIKEY' \
     --data '
{
  "model": "claude-2",
  "prompt": "\n\nHuman: Hello, world!\n\nAssistant:",
  "max_tokens_to_sample": 256
}
'
```
该接口支持的模型：claude-2、claude-instant-1

请务必注意，Claude接口的prompt跟OpenAI有较大区别，参数值强制以\n\nHuman:开头，并以\n\nAssistant:结尾，如果想了解更多细节，请参考[Claude模型Prompt规范和最佳实践说明](https://docs.anthropic.com/claude/docs/introduction-to-prompt-design)


### OpenAI协议兼容

这个调用方式与OpenAI调用方式完全一致，仅需要修改model参数即可实现访问Claude模型。同时这个接口也支持搜索等本平台专属特性。查阅[OpenAI接口使用文档](/openai/sdk)

### 创建OpenAI对话
POST https://api.aigc2d.com/v1/chat/completions 为给定的聊天对话创建模型响应。

```shell
curl https://api.aigc2d.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $AIGC2D_APIKEY" \
  -d '{
    "model": "claude-instant-1",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

通过变换model的值为claude-2、claude-instant-1来切换模型，其他参数完全一致。这意味着，只要是支持OpenAI模型服务的应用客户端，均可以使用Claude模型，同时需要支持自定义模型名称。ChatGPT-Next-Web 客户端是可以支持配置自定义模型名称并切换的。

[学习如何使用Claude模型开发](/claude/sdk.md)




