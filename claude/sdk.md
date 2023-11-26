## Claude 开发指南

进行编程开发前，建议先阅读[Claude接口使用指南](/claude/api)

因为本平台Claude接口兼容OpenAI协议，所以你也可以直接使用OpenAI的SDK来进行模型调用。查看[OpenAI接口开发指南](/openai/sdk.md)


## Claude接口协议Python开发

使用anthropic-sdk-python，[https://github.com/anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python?source=aigc2d)

### 安装
```
pip install --upgrade anthropic
```

### 使用

```python
from anthropic import Anthropic, HUMAN_PROMPT, AI_PROMPT

anthropic = Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    api_key="AIGC2D_APIKEY",
    base_url="https://api.aigc2d.com"
)

completion = anthropic.completions.create(
    model="claude-2",
    max_tokens_to_sample=300,
    prompt=f"{HUMAN_PROMPT} how does a court case get to the Supreme Court?{AI_PROMPT}",
)
print(completion.completion)
```