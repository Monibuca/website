# 截图
截图是 Monibuca 的一个重要功能，允许从视频流中获取静态图像。
## 功能特点
- 支持定时截图
- 支持事件触发截图
- 支持多种图片格式
- 支持自定义分辨率
- 支持图片压缩
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置截图相关参数：
```toml
[screenshot]
# 是否启用截图功能
enable = true
# 截图保存路径
path = "./screenshots"
# 图片格式
format = "jpg"
# 图片质量
quality = 80
# 是否启用压缩
enableCompress = true
# 压缩质量
compressQuality = 60
```
## 使用示例
### 配置截图规则
```toml
[[screenshot.rules]]
# 流名称
stream = "camera1"
# 是否启用
enable = true
# 截图间隔（秒）
interval = 60
# 图片格式
format = "jpg"
# 图片质量
quality = 80
# 是否启用压缩
enableCompress = true
# 压缩质量
compressQuality = 60
# 是否启用事件触发
enableEvent = true
# 触发事件
events = ["stream.start", "stream.stop"]
```
### 通过 API 手动截图
```http
POST /api/v1/screenshot/capture
Content-Type: application/json
{
    "stream": "camera1",
    "format": "jpg",
    "quality": 80
}
```
### 通过 API 获取截图列表
```http
GET /api/v1/screenshot/list?stream=camera1&start=2024-01-01&end=2024-01-02
```
## 注意事项
1. 确保存储空间充足
2. 合理设置截图间隔
3. 注意图片质量
4. 定期清理过期图片
5. 监控磁盘使用情况
## 常见问题
1. 截图失败
   - 检查存储空间
   - 验证文件权限
   - 确认配置正确
2. 图片质量
   - 调整图片格式
   - 优化压缩参数
   - 检查分辨率
3. 存储问题
   - 检查磁盘空间
   - 清理过期图片
   - 优化存储策略 