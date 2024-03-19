import { Space, Image } from 'antd'

import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }

const plugins = {
  rtmp: 'rtmp协议接受推拉、对外推拉',
  rtsp: 'rtsp协议接受推拉、对外推拉',
  hls: '1、提供HLS协议拉流播放。2、远程拉取HLS到m7s',
  gb28181: 'GB28181协议拉流播放、查看录像',
  ps: '接收Mpeg2-PS格式的流',
  onvif: 'ONVIF协议拉流播放',
  webrtc: 'WebRTC协议的推流和拉流',
  webtransport: '通过WebTransport进行推拉流',
  record: 'hls、flv、mp4、裸流格式录制功能以及回放',
  hdl: '1、HTTP-FLV格式拉流播放。2、远程拉取HTTP-FLV到m7s',
  jessica: '1、提供WS-FLV协议拉流播放。2、提供WS-RAW协议拉流播放。',
  fmp4: '提供FMP4格式拉流播放',
  preview: '借助Jessibuca提供视频实时预览能力',
  snap: '提供对I帧的实时截图能力',
  room: '提供房间功能，可以向房间内用户广播信息',
  hook: '提供API钩子回调能力，通知远程服务器',
  exporter: '提供监控数据导出能力，支持Prometheus、InfluxDB、ElasticSearch',
  logrotate: '提供日志轮转能力',
  edge: '可以m7s实例作为边缘节点',
  debug: '提供调试能力',
  monitor: '提供监控数据存储和访问',
  demo: '提供构建插件的示例代码',
}

const plugins2 = [
  {
    name: 'mpegts',
    desc: '提供MPEG-TS格式拉流播放',
    url: 'https://github.com/kingecg/mpegts'
  },
  {
    name: 'plugin-snapplug',
    desc: '录制开始或结束就 自动生成 视频封面图',
    url: 'https://github.com/3201301734/plugin-snapplug'
  },
  {
    name: 'm7s-reportor',
    desc: '将m7s的流信息和设备信息上报到redis',
    url: 'https://github.com/bigbeer1/m7s-reportor'
  },
  {
    name: 'plugin-jtt1078',
    desc: 'jtt1078协议接入插件',
    url: 'https://github.com/bytebit/plugin-jtt1078'
  },
  {
    name: 'plugin-transform',
    desc: '一个转码插件，基于 ffmpeg 进程',
    url: 'https://github.com/erroot/plugin-transform'
  },
  {
    name: 'plugin-erwscascade',
    desc: '基于webscoket 实现m7s 流媒体之间平台级联',
    url: 'https://github.com/erroot/plugin-erwscascade'
  },
  {
    name: '虚位以待',
    desc: '可联系我们添加到此列表',
    url: ''
  }
]

const plugins3 = [
  {
    name: 'plugin-cascade',
    desc: '级联插件，提供 m7s 无限级联能力'
  },
  {
    name: 'plugin-transcode',
    desc: '提供转码能力，可以将流转码为其他格式'
  },
  {
    name: 'plugin-snappro',
    desc: '极速截图，比 snap 插件截图速度高 10 倍以上'
  },
  {
    name: 'plugin-cryptor',
    desc: '提供对流的加密能力'
  },
  {
    name: 'plugin-gb28181pro',
    desc: '提供GB28181协议的级联等功能'
  },
  {
    name: 'plugin-recordpro',
    desc: '高级录制插件，增加定时任务等额外的功能'
  },
  {
    name: 'plugin-cdn',
    desc: '可以将流推送到CDN,适配多种云厂商'
  },
  {
    name: 'plugin-sei',
    desc: '可插入自定义 sei 信息'
  },
  {
    name: 'plugin-voice',
    desc: '支持公网语音对讲，需要购买硬件'
  },
  {
    name: 'plugin-llhls',
    desc: '支持LLHLS协议，提供低延迟播放'
  },
  {
    name: 'plugin-admin',
    desc: '精美UI界面'
  },
  {
    name: '虚位以待',
    desc: '可联系我们添加到此列表'
  }
]

export const Feature130DataSource = {
  wrapper: { className: 'home-page-wrapper feature13-wrapper' },
  page: { className: 'home-page feature13' },
  // OverPack: { className: 'home-page feature13', playScale: 0.3 },
  Carousel: {
    className: 'feature13-content',
    dots: false,
    wrapper: { className: 'feature13-content-wrapper' },
    titleWrapper: {
      className: 'feature13-title-wrapper',
      // children: [{ name: 'title', children: '插件生态', className: 'title-h1' }],
      children: [],
      barWrapper: {
        className: 'feature13-title-bar-wrapper',
        children: {
          className: 'feature13-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature13-title-text', children: '官方插件' },
        className: 'feature13-item',
        name: 'block0',
        children: Object.keys(plugins).map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children: (
                <Space
                  className="item"
                  onClick={() => {
                    window.open(`https://github.com/Monibuca/plugin-${item}`)
                  }}
                >
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">Plugin-{item}</div>
                    <div className="desc">{plugins[item]}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      },
      {
        title: { className: 'feature13-title-text', children: '第三方开源' },
        className: 'feature13-item',
        name: 'block1',
        children: plugins2.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children: (
                <Space
                  className="item"
                  onClick={() => {
                    window.open(item.url)
                  }}
                >
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">{item.name}</div>
                    <div className="desc">{item.desc}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      },
      {
        title: { className: 'feature13-title-text', children: '付费插件' },
        className: 'feature13-item',
        name: 'block2',
        children: plugins3.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children: (
                <Space className="item">
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">{item.name}</div>
                    <div className="desc">{item.desc}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      }
    ]
  }
}
