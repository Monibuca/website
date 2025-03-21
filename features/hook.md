# 钩子
钩子是 Monibuca 的一个重要功能，允许在特定事件发生时触发自定义操作。
## 功能特点
- 支持多种事件类型
- 支持 HTTP 回调
- 支持自定义脚本
- 支持异步处理
- 支持重试机制
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置钩子相关参数：
```toml
[hook]
# 是否启用钩子功能
enable = true
# 钩子超时时间（秒）
timeout = 5
# 最大重试次数
maxRetries = 3
# 重试间隔（秒）
retryInterval = 1
# 是否启用异步处理
enableAsync = true
```
## 使用示例
### 配置钩子规则
```toml
[[hook.rules]]
# 事件类型
event = "stream.start"
# 是否启用
enable = true
# 回调地址
url = "http://your-server/hook"
# 请求方法
method = "POST"
# 请求头
headers = { "Content-Type" = "application/json" }
# 请求体
body = '{"stream":"${stream}","time":"${time}"}'
```
### 支持的事件类型
- stream.start：流开始
- stream.stop：流停止
- stream.error：流错误
- stream.timeout：流超时
- stream.authenticate：流鉴权
- stream.publish：流发布
- stream.unpublish：流取消发布
- stream.subscribe：流订阅
- stream.unsubscribe：流取消订阅
### 通过 API 添加钩子规则
```http
POST /api/v1/hook/rules
Content-Type: application/json
{
    "event": "stream.start",
    "enable": true,
    "url": "http://your-server/hook",
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": "{\"stream\":\"${stream}\",\"time\":\"${time}\"}"
}
```
## 注意事项
1. 确保回调地址可用
2. 合理设置超时时间
3. 注意请求体大小
4. 监控钩子执行情况
5. 及时处理失败回调
## 常见问题
1. 钩子执行失败
   - 检查回调地址
   - 验证请求格式
   - 确认网络连接
2. 性能问题
   - 优化回调逻辑
   - 使用异步处理
   - 监控响应时间
3. 重试机制
   - 检查重试配置
   - 验证重试日志
   - 确认重试结果 