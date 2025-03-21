# 时移
时移是 Monibuca 的一个重要功能，允许用户回看直播流的历史内容。
## 功能特点
- 支持实时时移
- 支持时间点定位
- 支持快进快退
- 支持倍速播放
- 支持多级缓存
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置时移相关参数：
```toml
[timeshift]
# 是否启用时移功能
enable = true
# 时移缓存路径
path = "./timeshift"
# 最大缓存时长（秒）
maxDuration = 3600
# 缓存分段大小（秒）
segmentDuration = 300
# 是否启用内存缓存
enableMemoryCache = true
# 内存缓存大小（MB）
memoryCacheSize = 512
```
## 使用示例
### 配置时移规则
```toml
[[timeshift.rules]]
# 流名称
stream = "camera1"
# 是否启用
enable = true
# 缓存时长（秒）
duration = 3600
# 分段大小（秒）
segmentDuration = 300
# 是否启用内存缓存
enableMemoryCache = true
```
### 通过 API 获取时移地址
```http
GET /api/v1/timeshift/url?stream=camera1&time=2024-01-01T12:00:00Z
```
### 通过 API 获取时移范围
```http
GET /api/v1/timeshift/range?stream=camera1
```
## 注意事项
1. 确保存储空间充足
2. 合理设置缓存时长
3. 注意内存使用情况
4. 定期清理过期缓存
5. 监控磁盘使用情况
## 常见问题
1. 时移失败
   - 检查缓存文件
   - 验证时间点是否有效
   - 确认配置是否正确
2. 播放卡顿
   - 检查网络带宽
   - 调整缓存大小
   - 优化缓存策略
3. 内存占用过高
   - 检查内存缓存大小
   - 调整缓存策略
   - 监控内存使用 