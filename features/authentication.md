# 鉴权
鉴权是 Monibuca 的一个重要功能，用于控制视频流的访问权限。
## 功能特点
- 支持多种鉴权方式
- 支持动态鉴权
- 支持 IP 白名单
- 支持 Token 验证
- 支持自定义鉴权规则
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置鉴权相关参数：
```toml
[auth]
# 是否启用鉴权功能
enable = true
# 鉴权方式
type = "token"
# Token 有效期（秒）
tokenExpire = 3600
# 是否启用 IP 白名单
enableIPWhitelist = true
# 白名单 IP 列表
ipWhitelist = ["192.168.1.1", "10.0.0.1"]
# 是否启用动态鉴权
enableDynamicAuth = true
```
## 使用示例
### 配置鉴权规则
```toml
[[auth.rules]]
# 流名称
stream = "camera1"
# 是否启用
enable = true
# 鉴权方式
type = "token"
# Token 密钥
secret = "your-secret-key"
# 允许的 IP 列表
allowedIPs = ["192.168.1.1"]
```
### 通过 API 获取访问 Token
```http
POST /api/v1/auth/token
Content-Type: application/json
{
    "stream": "camera1",
    "expire": 3600
}
```
### 通过 API 验证 Token
```http
POST /api/v1/auth/verify
Content-Type: application/json
{
    "stream": "camera1",
    "token": "your-token"
}
```
## 注意事项
1. 妥善保管密钥
2. 合理设置 Token 有效期
3. 定期更新白名单
4. 监控访问日志
5. 及时处理异常访问
## 常见问题
1. 鉴权失败
   - 检查 Token 是否有效
   - 验证 IP 是否在白名单
   - 确认配置是否正确
2. Token 泄露
   - 立即更新密钥
   - 撤销相关 Token
   - 加强安全措施
3. 性能问题
   - 优化鉴权逻辑
   - 使用缓存机制
   - 监控响应时间 