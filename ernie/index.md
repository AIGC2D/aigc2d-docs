# 文心一言
目前已支持文心一言 **ernie-bot** **ernie-bot-turbo** 对话模型

已经集成到 OpenAI 对话接口里，可直接修改模型参数 **ernie-bot** **ernie-bot-turbo**

相应数据和OpenAI一致


```shell
curl https://api.aigc2d.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $AIGC2D-APIKEY" \
  -d '{
     "model": "ernie-bot",
     "messages": [{"role": "user", "content": "您好，很高兴遇见你!，我是AIGC2D"}],
     "temperature": 0.7
   }'
````

## 价格说明
模型价格和 OpenAI 3.5 价格一致
- 输入部分 1000 tokens = 6 点
- 输出部分 1000 tokens = 8 点