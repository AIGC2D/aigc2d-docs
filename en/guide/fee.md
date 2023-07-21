# How to Deduct Fees

When your request is sent to the AIGC2D interface, the interface will calculate the maximum number of tokens that your request may consume based on the **max_tokens** parameter passed in the request parameters. If this parameter is not passed, it will be calculated based on the maximum **max_tokens** of the model. After calculating the corresponding number of tokens, the platform will pre-freeze the corresponding number of points.

After OpenAI responds with the actual results, the platform will deduct the corresponding points based on the actual number of tokens consumed and return the previously frozen points. Therefore, your final consumption will be based on the actual consumption by OpenAI. The pre-frozen points are mainly to prevent insufficient account points and platform capital loss caused by generating excessive content.

The following situations will not incur fees:

- When there is an error in the platform server's request to the OpenAI interface.
- When the OpenAI interface is malfunctioning.
- When there is an internal exception in the platform server, such as restart or deployment causing point deduction.