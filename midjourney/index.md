# Midjourney 说明

AIGC2D API 接口域名为：`api.aigc2d.com`

请求接口需要在请求头添加 API KEY ,授权方式为 Bearer Token

示例：`Authorization: Bearer AIGC2D-2f68dbbf-519d-4f01-9636-e2421b68f379`


## 接口说明
由于 **Midjourney** 并没有开放对应的接口，所以这里的接口是通过 **Discord**  实现的。

**AIGC2D** 已经实现了 :

- 文本生成图片(Imagine)
- 图片放大(UPSCALE) 
- 图片变换(VARIATION)
- 图片生成文本(Describe)
- 图片生成图片(Blend) 

所有接口都是通过队列方式实现，提交任务后会返回一个 任务ID (task_id)。
通过任务ID可以查询任务的状态，也会根据提交任务时的回调通知URL通知 ，同一个任务会通知多次。默认的超时时间为**15**分钟，如果超过会算作失败。


## 费用说明

不同的任务定价有所不同，目前的定价为 （后续会根据情况调整）：

| 任务 |消耗点数  |
| --- | --- |
| 图片生成  Imagine| 100点 |
| 图片放大  UPSCALE|  10点 |
| 图片变换 VARIATION| 50点 |
|  图片生成文本 Describe| 50点  |
| 图片生成图片 Blend| 100点|

提交了做图任务就会消耗点数，如果做图失败会退还对应点数


## 任务回调说明
如果在提交任务时，填写了回调通知地址，那么就会在做图任务有变化的时候推送到填写的回调通知地址。


回调方式： `POST`

回调内容格式： `application/json`

回调内容示例（和任务查询返回的数据是一样的）：

```json
{
    "code": 0,
    "message": "success",
    "task_id": 442275063214085100,
    "action": "IMAGINE",
    "prompt": "a cat",
    "state": "",
    "submit_time": "2023-07-23 20:01:53",
    "start_time": "2023-07-23 20:01:53",
    "finish_time": "2023-07-23 20:02:42",
    "status": "SUCCESS",
    "progress": "100%",
    "image_url": "https://mjcdn.aigc2d.com/xxxxxx",
    "point": 100
}
```