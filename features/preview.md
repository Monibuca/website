# 预览
预览是 Monibuca 的一个重要功能，允许用户快速查看视频流的状态和内容。
## 功能特点
- 支持实时预览
- 支持多路预览
- 支持预览截图
- 支持预览录制
- 支持预览控制
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置预览相关参数：
```toml
[preview]
# 是否启用预览功能
enable = true
# 预览超时时间（秒）
timeout = 30
# 最大预览数量
maxPreviews = 10
# 是否启用预览录制
enableRecord = true
# 预览录制时长（秒）
recordDuration = 30
# 是否启用预览截图
enableScreenshot = true
```
## 使用示例
### 配置预览规则
```toml
[[preview.rules]]
# 流名称
stream = "camera1"
# 是否启用
enable = true
# 预览时长（秒）
duration = 30
# 是否启用录制
enableRecord = true
# 录制时长（秒）
recordDuration = 30
# 是否启用截图
enableScreenshot = true
# 截图间隔（秒）
screenshotInterval = 5
```
### 通过 API 获取预览地址
```http
GET /api/v1/preview/url?stream=camera1&duration=30
```
### 通过 API 控制预览
```http
POST /api/v1/preview/control
Content-Type: application/json
{
    "stream": "camera1",
    "action": "start",
    "duration": 30
}
```
## 注意事项
1. 合理设置预览时长
2. 注意带宽使用
3. 监控系统资源
4. 及时清理预览数据
5. 控制并发数量
## 常见问题
1. 预览失败
   - 检查流状态
   - 验证配置正确
   - 确认资源充足
2. 性能问题
   - 优化预览参数
   - 控制并发数量
   - 监控系统负载
3. 存储问题
   - 检查存储空间
   - 清理过期数据
   - 优化存储策略 