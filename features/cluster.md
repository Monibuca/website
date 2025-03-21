# 集群
集群是 Monibuca 的一个重要功能，允许将多个服务器组成集群，实现负载均衡和高可用。
## 功能特点
- 支持节点管理
- 支持负载均衡
- 支持故障转移
- 支持集群监控
- 支持节点同步
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置集群相关参数：
```toml
[cluster]
# 是否启用集群功能
enable = true
# 集群名称
name = "monibuca-cluster"
# 节点 ID
nodeId = "node1"
# 节点地址
address = "192.168.1.1"
# 节点端口
port = 8080
# 是否启用自动发现
enableDiscovery = true
# 发现地址
discoveryAddress = "239.255.255.250"
# 发现端口
discoveryPort = 1900
```
## 使用示例
### 配置集群节点
```toml
[[cluster.nodes]]
# 节点 ID
id = "node1"
# 节点地址
address = "192.168.1.1"
# 节点端口
port = 8080
# 节点权重
weight = 100
# 是否启用
enable = true
# 节点角色
role = "master"
```
### 通过 API 添加节点
```http
POST /api/v1/cluster/nodes
Content-Type: application/json
{
    "id": "node2",
    "address": "192.168.1.2",
    "port": 8080,
    "weight": 100,
    "enable": true,
    "role": "slave"
}
```
### 通过 API 获取集群状态
```http
GET /api/v1/cluster/status
```
## 注意事项
1. 确保网络连通性
2. 合理设置节点权重
3. 注意节点同步
4. 监控集群状态
5. 及时处理故障
## 常见问题
1. 节点连接失败
   - 检查网络连接
   - 验证节点配置
   - 确认防火墙设置
2. 负载均衡问题
   - 检查节点权重
   - 验证负载策略
   - 监控节点状态
3. 故障转移
   - 检查故障检测
   - 验证转移策略
   - 确认数据同步 