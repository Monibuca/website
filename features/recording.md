# 录制
录制是 Monibuca 的一个重要功能，允许将视频流保存为文件，方便后续回放和存档。
## 功能特点
- 支持多种录制格式（FLV、MP4、TS）
- 支持定时录制
- 支持按大小分段
- 支持按时间分段
- 支持录制文件自动清理
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置录制相关参数：
```toml
[record]
# 是否启用录制功能
enable = true
# 录制文件保存路径
path = "./records"
# 录制文件格式
format = "flv"
# 单个文件最大大小（MB）
maxSize = 1024
# 单个文件最大时长（秒）
maxDuration = 3600
# 是否启用自动清理
autoClean = true
# 文件保留天数
keepDays = 7
```
## 使用示例
### 配置录制规则
```toml
[[record.rules]]
# 流名称
stream = "camera1"
# 是否启用
enable = true
# 录制格式
format = "flv"
# 文件保存路径
path = "./records/camera1"
# 分段大小（MB）
segmentSize = 512
# 分段时长（秒）
segmentDuration = 1800
```
### 动态添加录制规则
通过 API 接口动态添加录制规则：
```http
POST /api/v1/record/rules
Content-Type: application/json
{
    "stream": "dynamic-stream",
    "enable": true,
    "format": "flv",
    "path": "./records/dynamic",
    "segmentSize": 512,
    "segmentDuration": 1800
}
```
## 注意事项
1. 确保存储空间充足
2. 合理设置分段大小和时长
3. 注意文件命名规则
4. 定期清理过期文件
5. 监控磁盘使用情况
## 常见问题
1. 录制失败
   - 检查存储空间
   - 验证文件权限
   - 确认配置是否正确
2. 文件损坏
   - 检查磁盘状态
   - 验证文件完整性
   - 确认录制过程是否正常
3. 自动清理
   - 检查清理策略
   - 验证文件保留时间
   - 确认清理日志 