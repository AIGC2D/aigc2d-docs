# Midjourney Documentation

The domain for the AIGC2D API interface is: `api.aigc2d.com`

To make a request to the API, you need to add the API KEY to the request header, using the Bearer Token authorization method.

Example: `Authorization: Bearer AIGC2D-2f68dbbf-519d-4f01-9636-e2421b68f379`


## API Description
Since **Midjourney** does not provide an open API, the interfaces mentioned here are implemented through **Discord**.

**AIGC2D** has implemented the following functionalities:

- Text to Image Generation (Imagine)
- Image Upscaling (UPSCALE)
- Image Transformation (VARIATION)
- Image to Text Generation (Describe)
- Image to Image Generation (Blend)

All interfaces are implemented using a queue system. After submitting a task, a task ID (task_id) will be returned. You can use this task ID to check the status of the task. Notifications will also be sent to the callback notification URL provided when submitting the task. The default timeout is **15** minutes, and if the task exceeds this time, it will be considered as a failure.


## Pricing Information

Different tasks have different pricing. The current pricing is as follows (subject to adjustment in the future):

| Task | Points Consumed |
| --- | --- |
| Image Generation (Imagine) | 100 points |
| Image Upscaling (UPSCALE) | 10 points |
| Image Transformation (VARIATION) | 50 points |
| Image to Text Generation (Describe) | 50 points |
| Image to Image Generation (Blend) | 100 points |

Submitting a task will consume points. If the task fails, the corresponding points will be refunded.


## Callback Notification Description
If a callback notification URL is provided when submitting a task, notifications will be sent to that URL when there are changes in the task.

Callback method: `POST`

Callback content format: `application/json`

Example of callback content (same as the data returned by task query):

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