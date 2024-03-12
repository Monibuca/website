import React from 'react'

import { Button, Space } from 'antd'
import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }

export const Feature110DataSource = {
  wrapper: { className: 'home-page-wrapper Feature11-wrapper' },
  page: { className: 'home-page Feature11' },
  Carousel: {
    className: 'Feature11-content',
    dots: false,
    wrapper: { className: 'Feature11-content-wrapper' },
    titleWrapper: {
      className: 'Feature11-title-wrapper',
      children: [],
      barWrapper: {
        className: 'Feature11-title-bar-wrapper',
        children: {
          className: 'Feature11-title-bar'
        }
      }
    },

    children: [
      {
        title: {
          className: 'Feature11-title-text',
          children: ''
        },
        className: 'Feature11-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Monibuca</div>
                    <div className="imgbox-t2">开源Go语言流媒体服务器开发框架</div>
                    <img alt="" className="imgbox-img" src="/img/mb.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    {/* <div className='title'>从零启动 m7s V4</div> */}
                    <div className="desc">
                      {' '}
                      <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>
                      旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://monibuca.com`)
                      }}
                    >
                      查看详情
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Jessibuca</div>
                    <div className="imgbox-t2">纯H5音视频流播放器</div>
                    <img alt="" className="imgbox-img" src="/img/jb.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    {/* <div className='title'>从零启动 m7s V4</div> */}
                    <div className="desc">
                      <span style={{ color: '#000', fontWeight: 500 }}>Jessibuca</span>
                      是一款纯Web（H5）打造的直播流播放器。兼容几乎所有Web传输协议格式以及主流的音视频编码格式。具有低延时、高性能、兼容性强等特点。
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://jessibuca.com`)
                      }}
                    >
                      查看详情
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Rebebuca</div>
                    <div className="imgbox-t2">Rust 桌面端 FFMPEG 管理器</div>
                    <img alt="" className="imgbox-img" src="/img/rb.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    <div className="desc">
                      <span style={{ color: '#000', fontWeight: 500 }}>Rebebuca</span>
                      是一个使用 Rust 开发的 桌面端 ffmpeg 管理器。可以帮助我们更好的管理繁多复杂的
                      ffmpeg 参数和 ffmpeg 命令运行状态。
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://rebebuca.com`)
                      }}
                    >
                      查看详情
                    </Button>
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
