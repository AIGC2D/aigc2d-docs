# Quick Start

Using the AIGC2D Model API Gateway is no different from using the official model interface. This is to ensure compatibility with peripheral applications built around the model. The platform has currently integrated most of the OpenAI interfaces, so the following demonstration will use OpenAI as an example.

To use OpenAI's model interface, you need to authorize it. After registering and logging in to AIGC2D, you can manage your own authorization keys.

After completing the recharge or opening a membership, go to the API Key management page and create an API Key for using the interface model.

![api-key](/assets/api-key.png)

After copying your key string, you also need to replace the domain address of the official OpenAI interface with the gateway address provided by this platform when accessing it. If you don't replace it with the AIGC2D gateway address and directly access OpenAI with the key string, it will not be recognized.

<div class="info custom-block" style="padding-top: 8px">
<b>Official OpenAI Access Address</b>

https://api.openai.com
</div>


<div class="tip custom-block" style="padding-top: 8px">
<b>AIGC2D Interface Address</b>


https://api.aigc2d.com
</div>

<div class="tip custom-block" style="padding-top: 8px">
<b>AIGC2D Backup Interface Address</b>


https://apigw.aigc2d.com
</div>


If you have understood the above concepts, you can actually start testing by referring to the official OpenAI model interface documentation. When accessing it, you only need to replace the official OpenAI access address with the AIGC2D interface address. [Official OpenAI API Documentation](https://platform.openai.com/docs/api-reference/introduction)

Start your first experience quickly! First, you need to install the curl command-line tool on your operating system. If you are not familiar with or have not installed the curl command-line tool, please search for a tutorial to install it. You can paste the following command into the terminal to run your first API request. Make sure to replace APIKEY with your own key.

```shell
curl https://api.aigc2d.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $AIGC2D-APIKEY" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Hello, nice to meet you! I am AIGC2D"}],
     "temperature": 0.7
   }'
```
![curl](/assets/quick-curl.png)

Although the first test has been completed, if you really want to build applications based on the API and implement more complex business logic, it is recommended to use API SDKs encapsulated in various programming languages to call the API models. These SDKs also support configuration of the access address and can be used in conjunction with the AIGC2D gateway.