# 拉流

拉流是 Monibuca 的另一个核心功能，允许从其他流媒体服务器拉取视频流。

## 支持的协议

Monibuca 支持从以下协议拉取视频流：

- RTMP
- RTSP
- SRT
- HTTP-FLV
- HLS

## 配置说明

在 Monibuca 的配置文件中，可以通过以下方式配置拉流相关参数：

```toml
[subscribe]
# 是否启用拉流功能
enable = true
# 拉流超时时间（秒）
timeout = 10
# 最大拉流数量
maxStreams = 100
# 重试次数
retryTimes = 3
# 重试间隔（秒）
retryInterval = 5
```

## 使用示例

### RTMP 拉流

从其他 RTMP 服务器拉取视频流：

```toml
[[subscribe.streams]]
# 流名称
name = "test-stream"
# 拉流地址
url = "rtmp://source-server:1935/live/stream-key"
# 是否启用
enable = true
```

### RTSP 拉流

从 RTSP 摄像头拉取视频流：

```toml
[[subscribe.streams]]
name = "camera-stream"
url = "rtsp://camera-ip:554/stream1"
enable = true
```

## 注意事项

1. 确保源服务器允许拉流
2. 检查网络连接和带宽
3. 建议配置重试机制
4. 注意源服务器的并发限制

## 常见问题

1. 拉流失败
   - 检查源服务器是否在线
   - 验证拉流地址是否正确
   - 确认网络连接是否正常

2. 拉流延迟
   - 检查网络带宽
   - 考虑使用更快的协议（如 SRT）
   - 调整缓冲区大小

3. 断流重连
   - 检查重试配置
   - 确认源服务器稳定性
   - 查看网络波动情况 