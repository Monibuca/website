# RTSP 协议

本文档记录了 Monibuca 中实时流协议 (RTSP) 的实现。它涵盖了服务器和客户端组件、媒体传输机制以及与核心平台的集成。

## 1. 概述

RTSP（实时流协议）是一种用于控制流媒体服务器的网络协议。Monibuca 的 RTSP 实现支持发布（从客户端接收流）和播放（向客户端发送流）操作，并支持 TCP 和 UDP 传输模式。

## 2. 架构

RTSP 插件由几个关键组件组成，这些组件与外部 RTSP 客户端/服务器和 Monibuca 核心系统进行交互。

### 2.1 RTSP 协议组件

RTSP 实现包括：
- 连接处理
- 媒体传输
- 会话管理
- 协议状态机

### 2.2 RTSP 协议流程

协议流程遵循标准 RTSP 规范，支持：
- 会话建立
- 媒体描述
- 传输设置
- 播放控制
- 会话终止

<SVG src="rtsp_timeline"/>

## 3. RTSP 服务器实现

RTSP 服务器处理传入连接并根据协议规范处理 RTSP 方法。

### 3.1 连接处理

`NetConnection` 类构成了 RTSP 通信的基础：
- 默认 RTSP 端口：554（RTSPS 端口：443）
- 通过 RTSPS 的安全连接（基于 TLS 的 RTSP）
- 10 秒默认超时处理
- 带有自动保活 OPTIONS 消息的会话管理
- 支持 RTP 和 RTCP 数据包处理

### 3.2 RTSP 方法处理

`RTSPServer` 类处理标准 RTSP 方法：

| 方法     | 描述                   | 实现                                |
| -------- | ---------------------- | ----------------------------------- |
| OPTIONS  | 查询可用方法           | 返回支持的方法列表                  |
| DESCRIBE | 获取媒体信息           | 从可用轨道生成 SDP                 |
| ANNOUNCE | 接收媒体信息           | 解析 SDP 以设置发布者              |
| SETUP    | 建立传输               | 为媒体配置 TCP 或 UDP 传输         |
| PLAY     | 开始播放               | 启动向客户端的媒体流传输           |
| RECORD   | 开始录制               | 开始从客户端接收媒体               |
| TEARDOWN | 结束会话               | 终止 RTSP 会话                     |

### 3.3 媒体传输模式

RTSP 实现支持两种主要的传输方法：

#### TCP（交织）传输

媒体数据通过用于 RTSP 信令的同一 TCP 连接发送。RTP 数据包以 "$" 字符开头，后跟通道 ID 和长度。

TCP 模式下的 RTP 数据包格式示例：
```
$<channel><length_high><length_low><RTP payload...>
```

#### UDP 传输

媒体数据通过单独的 UDP 连接发送，RTP 用于媒体，RTCP 用于控制信息。功能包括：
- 动态端口分配
- UDP 失败时自动回退到 TCP
- RTP 和 RTCP 的单独连接
- IPv4 和 IPv6 支持

## 4. 媒体处理

### 4.1 发送器实现

`Sender` 类处理向 RTSP 客户端的媒体流传输：
1. 连接到 Monibuca 订阅系统
2. 将内部格式转换为 RTP 数据包
3. 通过 TCP 或 UDP 发送媒体
4. 管理 RTCP 以获取流统计信息

### 4.2 接收器实现

`Receiver` 类处理来自 RTSP 客户端的媒体：
1. 接收来自客户端的 RTP 数据包
2. 处理和分组数据包为帧
3. 将帧写入 Monibuca 发布系统
4. 处理时间戳校正和同步

## 5. 客户端实现

### 5.1 拉流模式

拉流模式用于从外部 RTSP 服务器接收流：
1. 连接到远程服务器
2. 发送 OPTIONS 检查服务器能力
3. 发送 DESCRIBE 获取流信息
4. 为每个媒体轨道发送 SETUP
5. 发送 PLAY 开始接收媒体
6. 处理传入的 RTP 数据包

### 5.2 推流模式

推流模式用于向外部 RTSP 服务器发送流：
1. 连接到远程服务器
2. 发送 OPTIONS 检查服务器能力
3. 发送带有流信息的 ANNOUNCE
4. 为每个媒体轨道发送 SETUP
5. 发送 RECORD 开始发送媒体
6. 为每个媒体帧发送 RTP 数据包

## 6. 代理支持

### 6.1 拉流代理

`RTSPPullProxy` 维护与外部 RTSP 服务器的连接：
- 失败时自动重连
- 定期发送 OPTIONS 消息维持连接
- RTT 测量用于监控
- 关闭时资源清理

### 6.2 推流代理

`RTSPPushProxy` 管理与外部 RTSP 服务器的连接：
- 连接状态管理
- 故障检测和重连
- 适当的资源清理
- 支持 TCP 和 UDP 传输

## 7. 高级功能

### 7.1 SDP 处理

会话描述协议 (SDP) 功能：
- 为输出流生成 SDP
- 解析输入流的 SDP
- 编解码器参数提取和转换

### 7.2 RTP/RTCP 实现

实现处理：
- RTP 数据包构建和解析
- RTCP 发送方报告生成
- RTCP 接收方报告处理
- 时间戳同步
- 音频和视频之间的媒体同步

## 8. 与外部系统集成

RTSP 实现设计用于与以下系统互操作：
- IP 摄像头
- 监控系统
- 媒体服务器
- 媒体播放器（如 VLC、FFmpeg、GStreamer）
- 硬件编码器和解码器
