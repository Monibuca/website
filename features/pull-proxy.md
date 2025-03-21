# 拉流代理
拉流代理是 Monibuca 的一个重要功能，允许将其他流媒体服务器的视频流代理给客户端访问。

## 功能特点
- 支持多源代理
- 支持动态添加/删除代理源
- 支持多种协议代理
- 支持负载均衡
- 支持源站故障自动切换

## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置拉流代理相关参数：

```toml
[pullproxy]
# 是否启用拉流代理功能
enable = true
# 代理超时时间（秒）
timeout = 10
# 最大代理数量
maxProxies = 100
# 重试次数
retryTimes = 3
# 重试间隔（秒）
retryInterval = 5
# 是否启用源站故障自动切换
autoSwitch = true
```

## 使用示例
### 配置代理源
```toml
[[pullproxy.sources]]
# 源站名称
name = "source1"
# 源站地址
url = "rtmp://source-server:1935/live/stream-key"
# 是否启用
enable = true
# 代理协议
protocol = "rtmp"
# 权重（用于负载均衡）
weight = 100
```

### 动态添加代理源
通过 API 接口动态添加代理源：

```http
POST /api/v1/pullproxy/sources
Content-Type: application/json

{
    "name": "dynamic-source",
    "url": "rtmp://dynamic-server:1935/live/stream-key",
    "enable": true,
    "protocol": "rtmp",
    "weight": 100
}
```

## 注意事项
1. 确保源站服务器有足够的带宽和处理能力
2. 建议配置重试机制
3. 注意网络延迟和带宽消耗
4. 合理设置超时时间
5. 建议配置多个源站以实现高可用

## 常见问题
1. 代理失败
   - 检查源站服务器是否在线
   - 验证源站地址是否正确
   - 确认网络连接是否正常

2. 代理延迟
   - 检查网络带宽
   - 调整缓冲区大小
   - 考虑使用更快的协议

3. 负载均衡
   - 合理分配源站权重
   - 监控源站负载
   - 及时调整负载策略

4. 源站故障
   - 检查源站健康状态
   - 确认自动切换配置
   - 监控故障切换日志 