# 推流

推流是 Monibuca 的核心功能之一，允许将视频流推送到 Monibuca 服务器。

## 支持的协议

Monibuca 支持多种推流协议：

- RTMP
- RTSP
- SRT
- WebRTC
- HTTP-FLV

## 配置说明

在 Monibuca 的配置文件中，可以通过以下方式配置推流相关参数：

```toml
[push]
# 是否启用推流功能
enable = true
# 推流超时时间（秒）
timeout = 10
# 最大推流数量
maxStreams = 100
```

## 使用示例

### RTMP 推流

使用 OBS 等推流软件，设置推流地址为：

```
rtmp://your-server:1935/live/stream-key
```

### RTSP 推流

使用支持 RTSP 的设备或软件，设置推流地址为：

```
rtsp://your-server:554/live/stream-key
```

## 注意事项

1. 确保服务器防火墙开放了相应的端口
2. 推流前需要确保服务器有足够的带宽
3. 建议使用稳定的网络环境进行推流

## 常见问题

1. 推流失败
   - 检查网络连接
   - 验证推流地址是否正确
   - 确认服务器配置是否正确

2. 推流延迟
   - 检查网络带宽
   - 调整编码参数
   - 考虑使用 SRT 等低延迟协议 