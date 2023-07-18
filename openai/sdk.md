# 编程指南

基于OpenAI的接口服务，基本各个语言都有社区提供SDK支持

- [Python](#python) 
- [NodeJs](#nodejs)
- [PHP](#php)
- [GO](#go)
- [C#](#c)
- ...


## Python

OpenAI官方Python包，封装了常见模型访问方式。 项目源码： [OpenAI Python](https://github.com/openai/openai-python)

### 安装

```shell
pip install --upgrade openai
```

### 开始使用

使用这个模块时，需要提前设置全局配置，api_key 和 api_base

```python
import openai

#将这里换成你在aiproxy api keys拿到的密钥
openai.api_key = "aigc-xxx"
#这里将官方的接口访问地址，替换成aiproxy的入口地址
openai.api_base = "https://api.aigc2d.com/v1"
#请求chat接口，调用gpt3.5模型
res = openai.ChatCompletion.create(
    max_tokens=1000,
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Hi,AIGC2D"}],
)
print(res)
```

## NodeJS

OpenAI Node包，提供了对模型接口的便捷访问。 项目源码：[OpenAI Node ](https://github.com/openai/openai-node)

### 安装 
```shell
npm install openai
```

### 开始使用

```js
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "aigc-xxxx",
  basePath: "https://api.aigc2d.com/v1",
});
const openai = new OpenAIApi(configuration);

async function chat(){
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "hi,AIGC2D"}],
  });
}
const completion = chat()
console.log(completion);
```

## PHP
一个强大的社区维护的 PHP OpenAI SDK  [openai-php](https://github.com/openai-php/client)

### 安装
```php
composer require openai-php/client
```

### 开始使用
```php 
$yourApiKey = getenv('YOUR_API_KEY');

$client = OpenAI::factory()
    ->withApiKey($yourApiKey)
    ->withBaseUri('api.aigc2d.com') // 
    ->withHttpClient($client = new \GuzzleHttp\Client([])) // default: HTTP client found using PSR-18 HTTP Client Discovery
    ->withHttpHeader('X-My-Header', 'foo')
    ->withQueryParam('my-param', 'bar')
    ->withStreamHandler(fn (RequestInterface $request): ResponseInterface => $client->send($request, [
        'stream' => true // Allows to provide a custom stream handler for the http client.
    ]))
    ->make();

$stream = $client->completions()->createStreamed([
        'model' => 'text-davinci-003',
        'prompt' => 'Hi',
        'max_tokens' => 10,
    ]);

foreach($stream as $response){
    $response->choices[0]->text;
}
// 1. iteration => 'I'
// 2. iteration => ' am'
// 3. iteration => ' very'
// 4. iteration => ' excited'
// ...

```

## GO 
一个 GO 语言的 openai sdk [go-openai](https://github.com/sashabaranov/go-openai)

### 安装

```shell
go get github.com/sashabaranov/go-openai
```

### 开始使用

```go 
package main

import (
	"context"
	"fmt"
	openai "github.com/sashabaranov/go-openai"
)

func main() {
    config := openai.DefaultConfig("AIGC-XXXX") // aigc api key
    config.BaseURL = "https://api.aigc2d.com/v1"

	client := openai.NewClientWithConfig(config)
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleUser,
					Content: "Hello!",
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return
	}

	fmt.Println(resp.Choices[0].Message.Content)
}
```


## C#
c# 的 openai sdk [C#-OPENAI](https://github.com/betalgo/openai)

### 安装
```shell
Install-Package Betalgo.OpenAI
```

### 使用 

```c#
var openAiService = new OpenAIService(new OpenAiOptions()
{
    ApiKey =  Environment.GetEnvironmentVariable("AIGC-XXX")
    BaseDomain = "https://api.aigc2d.com"
});

var completionResult = await openAiService.ChatCompletion.CreateCompletion(new ChatCompletionCreateRequest
{
    Messages = new List<ChatMessage>
    {
        ChatMessage.FromSystem("You are a helpful assistant."),
        ChatMessage.FromUser("Who won the world series in 2020?"),
        ChatMessage.FromAssistant("The Los Angeles Dodgers won the World Series in 2020."),
        ChatMessage.FromUser("Where was it played?")
    },
    Model = Models.ChatGpt3_5Turbo,
    MaxTokens = 50//optional
});
if (completionResult.Successful)
{
   Console.WriteLine(completionResult.Choices.First().Message.Content);
}

```
