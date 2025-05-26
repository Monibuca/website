import React from 'react'

import { Space, Image, Typography, Popover, Button } from 'antd'
// @ts-ignore
import { enquireScreen } from 'enquire-js'

import { Nav30DataSource } from '../../data/index'
import Live from './ReactFlowNodes/Live'
import Relay from './ReactFlowNodes/Relay'
import CDN from './ReactFlowNodes/CDN'
import Crypto from './ReactFlowNodes/Crypto'
import Transcode from './ReactFlowNodes/Transcode'
import TimeShift from './ReactFlowNodes/TimeShift'
import Cascade from './ReactFlowNodes/Cascade'
import Voice from './ReactFlowNodes/Voice'
import Meet from './ReactFlowNodes/Meet'
import Other from './ReactFlowNodes/Other'
const { Text } = Typography

const downloadUrl = {
  M7S_WIN: 'https://download.m7s.live/bin/m7s_windows_amd64.tar.gz',
  M7S_IOS: 'https://download.m7s.live/bin/m7s_darwin_amd64.tar.gz',
  M7S_LINUX: 'https://download.m7s.live/bin/m7s_linux_amd64.tar.gz'
}

let isMobile
enquireScreen((b: boolean) => {
  isMobile = b
})

export { Nav30DataSource }
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  defaultPreset: 'live',
  presets: {
    live: {
      acceptPush: {
        enabled: true,
        port: 'tcp:1935'
      }
    },
    custom: {}
  }
}
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: {
          className: 'banner2-text-wrapper',
          style: isMobile ? {} : { backdropFilter: 'blur(10px)', width: 500 }
        },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: '开源Go语言流媒体服务器开发框架'
        },
        content: {
          className: 'banner2-version',
          children: (
            <Text copyable code style={{ color: '#fff', textWrap: 'wrap', fontSize: '20px' }}>
              docker run -id -p 1935:1935 -p 8080:8080 -p 8443:8443 -p 554:554 -p
              58200:58200 -p 5060:5060/udp -p 8000:8000/udp -p 9000:9000
              langhuihui/monibuca:latest
            </Text>

            // <code>
            //   <pre style={{ textWrap: 'wrap' ,margin:0}}>
            //     docker run -id -p 1935:1935 -p 8080:8080 -p 8443:8443 -p 554:554 -p 58200-59200:58200-59200 -p
            //     5060:5060/udp -p 9000:9000 langhuihui/monibuca:latest
            //   </pre>
            // </code>
          ),
          style: isMobile
            ? { marginTop: 300 }
            : { background: 'black', color: 'white', borderRadius: 5, padding: 10 },
          onClick: () => {
            // window.open('https://mp.weixin.qq.com/s/wXNSoMl6H6Wp9Sz2xzaxuw')
          }
        },
        kun: {
          className: 'banner2-content',
          children: '二开友好、代码简洁、插件丰富、延迟极低、性能强悍、部署方便、生态共建、合作共赢'
        },
        button: {
          className: 'banner2-button',
          children: '社区版',
          style: isMobile ? { width: '40vw', background: '#263036' } : { background: '#263036' },
          onClick: () => {
            window.open('https://github.com/Monibuca/v4')
          }
        },
        button2: {
          className: 'banner2-button',
          children: '专业版',
          style: isMobile ? { width: '40vw', background: '#5A00FF' } : { background: '#5A00FF' },
          onClick: () => {
            window.open('https://github.com/Monibuca/pro')
          }
        }
      }
    ]
  }
}

export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    // className: 'title-wrapp',
    children: [
      {
        name: 'title',
        children: '我们的合作伙伴',
        className: 'title-h1'
      }
    ]
  },
  video: {
    className: 'content4-video',
    children: {
      // video: "https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4",
      // image: "https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg",
    }
  }
}

export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: 'home-page' },
  titleWrapper: {
    className: 'content5-title-wrapper',
    children: [
      { name: 'title', children: '满足多种行业需求', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <div>
            截止目前已经为上百家企业, <br />
            提供路测 、实时监控 、应急指挥、 会议 、工厂安全生产 、智慧农业 、
            <br />
            驾考监控 、 变电站视频监测、安防视频联网场景 、 CDN 、 反向代理 、 AI
          </div>
        )
      }
    ]
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/65_VOhDgjlty2MXZ-ZOZ3g',
            target: '_blank'
          },
          img: {
            children: '/kehu/hang-tian.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—航天科技控股集团</div>
                <div className="desc">
                  业务聚焦航天应用、物联网、汽车电子围绕一横三纵的业务布局推动产业发展
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/g7Ye6dRo1EZA8trNphaSmg',
            target: '_blank'
          },
          img: {
            children: '/kehu/yu-ji.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—厦门宇基数字科技</div>
                <div className="desc">
                  团队致力于为电力、建筑、市政、教育、交通等行业提供全方位、全生命周期的一体化综合服务
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/WCS6y9nc3CRYWhp56efB8A',
            target: '_blank'
          },
          img: {
            children: '/kehu/dian-li.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—电力服务</div>
                <div className="desc">
                  电气数字化，构建 IOT 平台，依托于 M7S
                  优秀的架构设计，和快速的社区解答效率，并且支持所有主流协议
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/_o2U23FszOJ_Xn5PhN0pjA',
            target: '_blank'
          },
          img: {
            children: '/kehu/guang-xi.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—广西计算中心</div>
                <div className="desc">
                  主要以解决分散的高速公路监控设备进行统一接入，实现集中管理为目的，构建视频监控管理平台
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/4U-myuuhJ-ZXxPxLP_6aNw',
            target: '_blank'
          },
          img: {
            children: '/kehu/tan-tan.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—坦坦科技</div>
                <div className="desc">
                  一个专注于做视频 AI 算法项目的团队，从视频汇聚接入、到视频 AIOT
                  平台开发等业务领域都有涉及
                </div>
              </div>
            )
          }
        }
      }
    ]
  }
}

export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper feature4-wrapper feature4' },
  page: { className: 'home-page feature4' },
  // OverPack: { className: 'home-page feature4', playScale: 0.3 },
  tabs: {
    className: 'feature4-content',
    wrapper: { className: 'feature4-content-wrapper' },

    titleWrapper: {
      className: 'feature4-title-wrapper',
      children: [{ name: 'title', children: '使用场景', className: 'title-h1' }],
      barWrapper: {
        className: 'feature4-title-bar-wrapper',
        children: {
          className: 'feature4-title-bar'
        }
      }
    },

    children: [
      {
        title: '推流直播',
        children: Live
      },
      {
        title: '拉流转播',
        children: Relay
      },
      {
        title: '转推',
        children: CDN
      },
      {
        title: '加密',
        children: Crypto
      },
      {
        title: '转码',
        children: Transcode
      },
      {
        title: '时移',
        children: TimeShift
      },
      {
        title: '级联',
        children: Cascade
      },
      {
        title: '语音对讲',
        children: Voice
      },
      {
        title: '视频会议',
        children: Meet
      },
      {
        title: '其他功能',
        children: Other
      }
    ]
  }
}

export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  page: { className: 'home-page feature6' },
  // OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },

    titleWrapper: {
      className: 'feature6-title-wrapper',
      children: [{ name: 'title', children: '产品优势', className: 'title-h1' }],
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: {
          className: 'feature6-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature6-title-text', children: '极致简洁' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 12,
            xs: 24,
            children: {
              children: (
                <Space direction="vertical" align="start">
                  <div className="feature6-t1">GO语言+简洁的代码逻辑</div>
                  <div className="feature6-t2">
                    Go语言本身的简洁+代码设计追求极致精简、优雅。使阅读源码变成一件愉快的事
                    <br /> 启动工程提供了标准化的接入示例，插件引入十分简单
                  </div>
                  <div
                    onClick={() => {
                      window.open('https://github.com/langhuihui/monibuca')
                    }}
                    className="feature6-button"
                    type="primary"
                    style={{ marginTop: '40px' }}
                  >
                    <img src="/svg/github.svg" alt="" width={30} style={{ marginRight: '9px' }} />
                    查看示例
                  </div>
                </Space>
              )
            }
          },
          {
            md: 12,
            xs: 24,
            children: {
              className: 'feature6-text',
              children: (
                <Space align="end">
                  <Image preview={true} width={400} src="/img/plugin-go-code.png" />
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature6-title-text', children: '高可扩展' },
        className: 'feature6-item',
        name: 'block1',
        children: [
          {
            md: 12,
            xs: 24,
            children: {
              children: (
                <Space direction="vertical" align="start">
                  <div className="feature6-t1">精致</div>
                  <div className="feature6-t2">
                    设计精巧的插件机制，实现高内聚低耦合，具有高超的扩展能力
                    <br />
                    无锁化设计以及手术刀般精确的内存复用，充分利用多核计算，性能强悍
                  </div>
                  <div
                    className="feature6-button"
                    type="primary"
                    style={{ marginTop: '40px' }}
                    onClick={() => {
                      window.open('https://github.com/Monibuca')
                    }}
                  >
                    <img src="/svg/github.svg" alt="" width={30} style={{ marginRight: '9px' }} />
                    Github
                  </div>
                </Space>
              )
            }
          },
          {
            md: 12,
            xs: 24,
            children: {
              className: 'feature6-text',
              children: (
                <Space align="end">
                  <svg
                    style={{ height: '400px', width: '100%' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -5 205 150"
                  >
                    <defs />
                    <g id="p-e">
                      <line class="cls-6" x1="104" y1="28" x2="104" y2="59">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="50;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="e-s">
                      <line class="cls-8" x1="104" y1="82" x2="104" y2="106">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="50;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="c-p">
                      <line class="cls-6" x1="27" y1="25" x2="69" y2="25">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="50;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="r-p">
                      <line class="cls-8" x1="132" y1="25" x2="177" y2="25">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;50"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="s-r">
                      <line class="cls-6" x1="180" y1="112" x2="137" y2="112">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;50"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="s-c">
                      <line class="cls-8" x1="71" y1="112" x2="28" y2="112">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="50;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <rect class="cls-1" x="60" y="50" width="86" height="38.13" rx="8" />
                    <text class="cls-2" transform="translate(85 74)">
                      Stream
                    </text>
                    <rect class="cls-4" x="60" y="9" width="86" height="32.07" />
                    <rect class="cls-5" x="60" y="96" width="86" height="32.07" />

                    <text class="cls-2" transform="translate(79 30)">
                      Publisher
                    </text>
                    <text class="cls-2" transform="translate(78 116)">
                      Subsciber
                    </text>
                    <rect class="cls-3" x="50" y="1" width="106" height="135"></rect>
                    <rect class="cls-16" x="172" y="9" width="32" height="47.18" />
                    <rect class="cls-16" x="172" y="80" width="32" height="47.18" />
                    <text class="cls-17" transform="matrix(0.47, 0.88, -0.88, 0.47, 174.38, 12.72)">
                      remote server
                    </text>
                    <text class="cls-17" transform="matrix(0.47, 0.88, -0.88, 0.47, 174.38, 84.94)">
                      remote server
                    </text>
                    <rect class="cls-22" x="1" y="9" width="32" height="47.18" />
                    <rect class="cls-22" x="1" y="81" width="32" height="47.18" />
                    <text class="cls-17" transform="matrix(0.47, 0.88, -0.88, 0.47, 9.68, 24.12)">
                      client
                    </text>
                    <text class="cls-17" transform="matrix(0.47, 0.88, -0.88, 0.47, 9.68, 95.91)">
                      client
                    </text>

                    <circle id="ring2" cx="83" cy="69" r="12">
                      <animate
                        attributeName="stroke-dashoffset"
                        values="40;0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle id="ring1" cx="125" cy="69" r="12">
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;40"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature6-title-text', children: '简单易用' },
        className: 'feature6-item',
        name: 'block2',
        children: [
          {
            md: 12,
            xs: 24,
            children: {
              children: (
                <Space direction="vertical" align="start">
                  <div className="feature6-t1">易用</div>
                  <div className="feature6-t2">
                    无需配置环境，无需安装运行时，直接下载可执行文件
                    <br />
                    为arm架构提供贴心的编译版本，可以直接下载运行
                    <br />
                    也可以用 docker 启动
                  </div>
                  <div
                    className="feature6-button"
                    type="primary"
                    style={{ marginTop: '40px' }}
                    onClick={() => {
                      window.open('https://github.com/langhuihui/monibuca/releases')
                    }}
                  >
                    <img src="/svg/github.svg" alt="" width={30} style={{ marginRight: '9px' }} />
                    所有版本
                  </div>
                </Space>
              )
            }
          },
          {
            md: 12,
            xs: 24,
            children: {
              className: 'feature6-text',
              children: (
                <div>
                  <Space align="end">
                    <div className="download">
                      <div className="download-item windows">
                        <a className="iconfont icon-windows" href={downloadUrl.M7S_WIN}></a>
                      </div>
                      <div className="download-item apple">
                        <a className="iconfont icon-apple" href={downloadUrl.M7S_IOS}></a>
                      </div>
                      <div className="download-item linux">
                        <a className="iconfont icon-linux" href={downloadUrl.M7S_LINUX}></a>
                      </div>
                    </div>
                  </Space>
                  <div class="docker">
                    <Text copyable style={{ color: '#fff' }}>
                      docker run -id -p 1935:1935 -p 8080:8080 -p 8443:8443 -p 554:554 -p
                      58200:58200 -p 5060:5060/udp -p 8000:8000/udp -p 9000:9000
                      langhuihui/monibuca:latest
                    </Text>
                  </div>
                </div>
              )
            }
          }
        ]
      }
    ]
  }
}

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
  monitor: '提供监控数据存储和访问'
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
    name: '虚位以待',
    desc: '可联系我们添加到此列表',
    url: ''
  }
]

const plugins3 = [
  {
    name: 'cascade',
    desc: '级联插件，提供 m7s 无限级联能力'
  },
  {
    name: 'transcode',
    desc: '提供转码能力，可以将流转码为其他格式'
  },
  {
    name: 'snappro',
    desc: '极速截图，比 snap 插件截图速度高 10 倍以上'
  },
  {
    name: 'cryptor',
    desc: '提供对流的加密能力'
  },
  {
    name: 'gb28181pro',
    desc: '提供GB28181协议的级联等功能'
  },
  {
    name: 'recordpro',
    desc: '高级录制插件，增加定时任务等额外的功能'
  },
  {
    name: 'plugin-cdn',
    desc: '可以将流推送到CDN,适配多种云厂商'
  },
  {
    name: '虚位以待',
    desc: '可联系我们添加到此列表'
  }
]

export const Feature70DataSource = {
  wrapper: { className: 'home-page-wrapper feature7-wrapper' },
  page: { className: 'home-page feature7' },
  // OverPack: { className: 'home-page feature7', playScale: 0.3 },
  Carousel: {
    className: 'feature7-content',
    dots: false,
    wrapper: { className: 'feature7-content-wrapper' },
    titleWrapper: {
      className: 'feature7-title-wrapper',
      children: [{ name: 'title', children: '插件生态', className: 'title-h1' }],
      barWrapper: {
        className: 'feature7-title-bar-wrapper',
        children: {
          className: 'feature7-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature7-title-text', children: '官方插件' },
        className: 'feature7-item',
        name: 'block0',
        children: Object.keys(plugins).map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature7-text',
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
        title: { className: 'feature7-title-text', children: '第三方开源' },
        className: 'feature7-item',
        name: 'block1',
        children: plugins2.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature7-text',
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
        title: { className: 'feature7-title-text', children: '付费插件' },
        className: 'feature7-item',
        name: 'block2',
        children: plugins3.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature7-text',
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

export const Feature80DataSource = {
  zhan: { className: 'feature8-zhan' },
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  OverPack: { className: 'feature8', playScale: 0.3 },
  Carousel: {
    className: 'feature8-content',
    dots: false,
    wrapper: { className: 'feature8-content-wrapper' },

    titleWrapper: {
      className: 'feature8-title-wrapper',
      children: [{ name: 'title', children: '高效的管理工具', className: 'title-h1' }],
      barWrapper: {
        className: 'feature8-title-bar-wrapper',
        children: {
          className: 'feature8-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature8-title-text', children: 'Admin' },
        className: 'feature8-item',
        name: 'block2',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/admin.png"
                  />
                  <div className="desc">
                    说明：Admin 为 m7s pro版（包含付费插件） 提供可视化 UI 界面
                  </div>
                  <Space size="large">
                    <div
                      className="btn1"
                      onClick={() => {
                        window.open('https://test.monibuca.com/ui')
                      }}
                    >
                      在线体验
                    </div>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open('https://github.com/Monibuca/pro')
                      }}
                    >
                      Github
                    </div>
                  </Space>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature8-title-text', children: 'Console' },
        className: 'feature8-item',
        name: 'block1',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/console.png"
                  />
                  <div className="desc">
                    说明：Console 提供了对m7s实例的可视化管理后台的能力，支持多实例管理。
                    请查看在线版本和 Docker 部署,我们还提供了 windows 版本下载 和 Mac (arm64) 下载
                  </div>
                  <Space size="large">
                    <div
                      className="btn1"
                      onClick={() => {
                        window.open('https://console.monibuca.com')
                      }}
                    >
                      使用在线版本
                    </div>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open(
                          'https://mp.weixin.qq.com/s?__biz=MzkyMDQ5Nzg5MQ==&mid=2247483848&idx=1&sn=b0908a8387ad10beef92323f0722dad7&chksm=c190ba44f6e7335227003e949412b0406e0f0696ffad79234c186e87c3f28bd4975aad0dfb19&scene=178&cur_album_id=2996567829959376897#rd'
                        )
                      }}
                    >
                      Docker部署
                    </div>
                  </Space>
                  <Space style={{ marginTop: '36px' }} direction={isMobile ? 'vertical' : 'horizontal' }>
                    <Space direction="vertical" className="item">
                      <Space className="item-wrap">
                        <Space direction="vertical">
                          <div className="title">Mac(arm64) 系统下载</div>
                          <div className="sub-title">系统版本: 请查看安装教程</div>
                        </Space>
                        <img className="img" src="/img/ic_mac.png" alt="" />
                      </Space>
                      <Space direction="vertical" align="start">
                        <Button
                          type="primary"
                          onClick={() => {
                            window.open('https://download.m7s.live/bin/console_mac.zip?v=0.1.20')
                          }}
                        >
                          立即下载
                        </Button>
                      </Space>
                    </Space>
                    <Space direction="vertical" className="item">
                      <Space className="item-wrap">
                        <Space direction="vertical">
                          <div className="title">Windows版下载</div>
                          <div className="sub-title">Windows 10 及以上系统可用</div>
                        </Space>
                        <img className="img" src="/img/ic_windows.png" alt="" />
                      </Space>
                      <Space direction="vertical" align="start">
                        <Button
                          type="primary"
                          onClick={() => {
                            window.open(
                              'https://download.m7s.live/bin/console_windows_amd64.zip?v=0.1.20'
                            )
                          }}
                        >
                          立即下载
                        </Button>
                      </Space>
                    </Space>
                  </Space>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature8-title-text', children: 'API调试工具' },
        className: 'feature8-item',
        name: 'block0',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/api.png"
                  />
                  <div className="desc">
                    说明：体验版包括 global 下的所有接口，但不包括插件接口，
                    获取完整版步骤：鼠标移到赞赏按钮上，赞助 99 元，将 【 截图 】
                    发送到【不卡科技公众号 私信】，我们将发送完整版给您。
                  </div>
                  <Space size="large">
                    <Popover
                      content={
                        <Space>
                          <div style={{ marginRight: '20px' }}>
                            <img src="/img/wx-pay.jpg" alt="" height={250} />
                          </div>
                          <div>
                            <img src="/img/zf-pay.jpg" alt="" height={250} />
                          </div>
                        </Space>
                      }
                    >
                      <div className="btn1">
                        <img
                          src="/svg/ic_QR code.svg"
                          alt=""
                          width={24}
                          style={{ marginRight: '9px' }}
                        />
                        赞赏 99 元
                      </div>
                    </Popover>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open(
                          'https://apifox.com/apidoc/shared-53418b09-8f45-49e5-94e3-1b93870b304f'
                        )
                      }}
                    >
                      立即体验
                    </div>
                  </Space>
                </Space>
              )
            }
          }
        ]
      }
    ]
  }
}

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  // OverPack: { className: 'footer1', playScale: 0.2 },
  page: { className: 'footer1 home-page', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '视频教程' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: 'B 站分享' },
            { name: 'link1', href: '#', children: 'RTS 分享' }
          ]
        }
      },
      {
        name: 'block1',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '产品文档' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '快速上手' },
            { name: 'link1', href: '#', children: '使用手册' },
            { name: 'link2', href: '#', children: '常见问题' },
            { name: 'link3', href: '#', children: '二次开发' }
          ]
        }
      },
      {
        name: 'block2',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '下载链接' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Windows' },
            { href: '#', name: 'link1', children: 'Mac' },
            { href: '#', name: 'link2', children: 'Mac(arm64)' },
            { href: '#', name: 'link3', children: 'Linux' },
            { href: '#', name: 'link4', children: 'Linux(arm64)' }
          ]
        }
      },
      {
        name: 'block3',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '不卡系列' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Monibuca' },
            { href: '#', name: 'link1', children: 'Jessibuca' },
            { href: '#', name: 'link2', children: 'Rebebuca' }
          ]
        }
      },
      {
        name: 'block4',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '关于我们' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '开发团队' },
            { href: '#', name: 'link2', children: '诞生故事' }
          ]
        }
      },
      {
        name: 'block5',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '联系我们' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Monibuca 微信交流群' },
            { href: '#', name: 'link1', children: '[ 不卡学院 ] 交流群' }
          ]
        }
      }
    ]
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: <span>Copyright © Monibuca 开发团队</span>
  }
}
