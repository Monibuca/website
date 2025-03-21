# 回放
回放是 Monibuca 的一个重要功能，允许用户查看历史录制的视频文件。
## 功能特点
- 支持多种格式回放（FLV、MP4、TS）
- 支持快进快退
- 支持时间点定位
- 支持倍速播放
- 支持录制文件索引
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置回放相关参数：
```toml
[playback]
# 是否启用回放功能
enable = true
# 录制文件路径
path = "./records"
# 是否启用文件索引
enableIndex = true
# 索引文件保存路径
indexPath = "./indexes"
# 最大缓存大小（MB）
maxCacheSize = 1024
# 是否启用预加载
enablePreload = true
```
## 使用示例
### 配置回放规则
```toml
[[playback.rules]]
# 流名称
stream = "camera1"
# 是否启用
enable = true
# 文件路径
path = "./records/camera1"
# 是否启用索引
enableIndex = true
# 缓存大小（MB）
cacheSize = 512
```
### 通过 API 获取回放列表
```http
GET /api/v1/playback/files?stream=camera1&start=2024-01-01&end=2024-01-02
```
### 通过 API 获取回放地址
```http
GET /api/v1/playback/url?file=20240101000000.flv&stream=camera1
```
## 注意事项
1. 确保录制文件完整
2. 合理设置缓存大小
3. 注意文件索引更新
4. 监控磁盘使用情况
5. 定期清理过期索引
## 常见问题
1. 回放失败
   - 检查文件是否存在
   - 验证文件完整性
   - 确认索引是否正确
2. 播放卡顿
   - 检查网络带宽
   - 调整缓存大小
   - 优化索引结构
3. 时间定位不准确
   - 检查索引文件
   - 验证时间戳
   - 确认文件分段 