# 推流代理

推流代理是 Monibuca 的一个重要功能，允许将接收到的视频流转发到其他流媒体服务器。

## 功能特点

- 支持多目标转发
- 支持动态添加/删除转发目标
- 支持多种协议转发
- 支持负载均衡

## 配置说明

在 Monibuca 的配置文件中，可以通过以下方式配置推流代理相关参数：

```toml
[pushproxy]
# 是否启用推流代理功能
enable = true
# 代理超时时间（秒）
timeout = 10
# 最大代理数量
maxProxies = 100
# 重试次数
retryTimes = 3
# 重试间隔（秒）
retryInterval = 5
```

## 使用示例

### 配置转发目标

```toml
[[pushproxy.targets]]
# 目标名称
name = "target1"
# 目标地址
url = "rtmp://target-server:1935/live/stream-key"
# 是否启用
enable = true
# 转发协议
protocol = "rtmp"
```

### 动态添加转发目标

通过 API 接口动态添加转发目标：

```http
POST /api/v1/pushproxy/targets
Content-Type: application/json

{
    "name": "dynamic-target",
    "url": "rtmp://dynamic-server:1935/live/stream-key",
    "enable": true,
    "protocol": "rtmp"
}
```

## 注意事项

1. 确保目标服务器有足够的带宽和处理能力
2. 建议配置重试机制
3. 注意网络延迟和带宽消耗
4. 合理设置超时时间

## 常见问题

1. 转发失败
   - 检查目标服务器是否在线
   - 验证转发地址是否正确
   - 确认网络连接是否正常

2. 转发延迟
   - 检查网络带宽
   - 调整缓冲区大小
   - 考虑使用更快的协议

3. 负载均衡
   - 合理分配转发目标
   - 监控服务器负载
   - 及时调整转发策略 