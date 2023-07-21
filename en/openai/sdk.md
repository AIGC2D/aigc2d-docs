# Programming Guide

Based on OpenAI's API service, there are SDKs available for various programming languages.

- [Python](#python)
- [NodeJs](#nodejs)
- [PHP](#php)
- [GO](#go)
- [C#](#c)
- ...


## Python

Official Python package for OpenAI, which encapsulates common model access methods. Project source code: [OpenAI Python](https://github.com/openai/openai-python)

### Installation

```shell
pip install --upgrade openai
```

### Getting Started

When using this module, you need to set the global configuration in advance, including api_key and api_base.

```python
import openai

# Replace this with the key you obtained from aiproxy api keys
openai.api_key = "aigc-xxx"
# Replace the official API access address with aiproxy's entry address
openai.api_base = "https://api.aigc2d.com/v1"
# Request the chat interface and call the gpt3.5 model
res = openai.ChatCompletion.create(
    max_tokens=1000,
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Hi,AIGC2D"}],
)
print(res)
```

## NodeJS

OpenAI Node package provides convenient access to the model interface. Project source code: [OpenAI Node](https://github.com/openai/openai-node)

### Installation
```shell
npm install openai
```

### Getting Started

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
A powerful PHP OpenAI SDK maintained by the community [openai-php](https://github.com/openai-php/client)

### Installation
```php
composer require openai-php/client
```

### Getting Started
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
A GO language openai sdk [go-openai](https://github.com/sashabaranov/go-openai)

### Installation

```shell
go get github.com/sashabaranov/go-openai
```

### Getting Started

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
C# openai sdk [C#-OPENAI](https://github.com/betalgo/openai)

### Installation
```shell
Install-Package Betalgo.OpenAI
```

### Usage 

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