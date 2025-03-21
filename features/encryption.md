# 加密
加密是 Monibuca 的一个重要功能，用于保护视频流的安全性。
## 功能特点
- 支持多种加密算法
- 支持动态密钥
- 支持 DRM 系统
- 支持端到端加密
- 支持密钥轮换
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置加密相关参数：
```toml
[encrypt]
# 是否启用加密功能
enable = true
# 加密算法
algorithm = "aes-128-cbc"
# 密钥长度
keyLength = 16
# 是否启用动态密钥
enableDynamicKey = true
# 密钥有效期（秒）
keyExpire = 3600
# 是否启用 DRM
enableDRM = false
```
## 使用示例
### 配置加密规则
```toml
[[encrypt.rules]]
# 流名称
stream = "camera1"
# 是否启用
enable = true
# 加密算法
algorithm = "aes-128-cbc"
# 密钥
key = "your-secret-key"
# 是否启用动态密钥
enableDynamicKey = true
# 密钥有效期（秒）
keyExpire = 3600
# 是否启用 DRM
enableDRM = false
```
### 通过 API 获取加密密钥
```http
POST /api/v1/encrypt/key
Content-Type: application/json
{
    "stream": "camera1",
    "expire": 3600
}
```
### 通过 API 更新加密密钥
```http
POST /api/v1/encrypt/rotate
Content-Type: application/json
{
    "stream": "camera1"
}
```
## 注意事项
1. 妥善保管密钥
2. 定期更新密钥
3. 注意加密性能
4. 监控加密状态
5. 及时处理异常
## 常见问题
1. 加密失败
   - 检查密钥状态
   - 验证加密参数
   - 确认配置正确
2. 性能问题
   - 优化加密算法
   - 使用硬件加速
   - 调整缓冲区大小
3. 密钥泄露
   - 立即更新密钥
   - 撤销相关访问
   - 加强安全措施 