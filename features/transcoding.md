# 转码
转码是 Monibuca 的一个重要功能，允许将视频流转换为不同的编码格式和分辨率。
## 功能特点
- 支持多种编码格式（H.264、H.265、VP8、VP9）
- 支持多种分辨率
- 支持码率控制
- 支持帧率控制
- 支持硬件加速
## 配置说明
在 Monibuca 的配置文件中，可以通过以下方式配置转码相关参数：
```toml
[transcode]
# 是否启用转码功能
enable = true
# 转码引擎
engine = "ffmpeg"
# 是否启用硬件加速
enableHardware = true
# 硬件加速类型
hardwareType = "nvidia"
# 转码线程数
threads = 4
# 转码超时时间（秒）
timeout = 30
```
## 使用示例
### 配置转码规则
```toml
[[transcode.rules]]
# 输入流名称
input = "camera1"
# 输出流名称
output = "camera1_720p"
# 是否启用
enable = true
# 视频编码
videoCodec = "h264"
# 视频码率
videoBitrate = "2000k"
# 视频分辨率
videoResolution = "1280x720"
# 视频帧率
videoFps = 30
# 音频编码
audioCodec = "aac"
# 音频码率
audioBitrate = "128k"
# 音频采样率
audioSampleRate = 44100
```
### 通过 API 添加转码规则
```http
POST /api/v1/transcode/rules
Content-Type: application/json
{
    "input": "camera1",
    "output": "camera1_720p",
    "enable": true,
    "videoCodec": "h264",
    "videoBitrate": "2000k",
    "videoResolution": "1280x720",
    "videoFps": 30,
    "audioCodec": "aac",
    "audioBitrate": "128k",
    "audioSampleRate": 44100
}
```
## 注意事项
1. 确保硬件资源充足
2. 合理设置转码参数
3. 注意转码延迟
4. 监控系统负载
5. 定期检查转码质量
## 常见问题
1. 转码失败
   - 检查硬件状态
   - 验证转码参数
   - 确认输入流正常
2. 转码延迟
   - 优化转码参数
   - 使用硬件加速
   - 调整缓冲区大小
3. 转码质量
   - 检查码率设置
   - 验证分辨率
   - 确认编码参数 