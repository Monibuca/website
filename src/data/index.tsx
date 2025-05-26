import { Popover } from 'antd'
// @ts-ignore
import { enquireScreen } from 'enquire-js'

let isMobile
enquireScreen((b: boolean) => {
  isMobile = b
})

export const Nav30DataSource = {
  // wrapper: { className: 'home-page-wrapper header3-wrapper header3' },
  wrapper: { className: 'header3' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: '/svg/logo.svg?t=123'
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: '/',
        className: 'header3-item',
        children: {
          href: '/',
          children: [{ children: '首页', name: 'text' }]
        }
      },
      {
        name: '/v5',
        className: 'header3-item',
        children: {
          href: 'http://v5.monibuca.com',
          children: [{ children: 'V5', name: 'text' }]
        }
      },
      {
        name: '/doc',
        className: 'header3-item',
        children: {
          href: '/doc',
          children: [{ children: '文档', name: 'text' }]
        }
      },
      {
        name: '/product',
        className: 'header3-item',
        children: {
          href: '/product',
          children: [{ children: '不卡系列', name: 'text' }]
        }
      },
      {
        name: '/download',
        className: 'header3-item',
        children: {
          href: '/download',
          children: [{ children: '产品下载', name: 'text' }]
        }
      },
      {
        name: '/plugin',
        className: 'header3-item',
        children: {
          href: '/plugin',
          children: [{ children: '插件生态', name: 'text' }]
        }
      },
      {
        name: '/video',
        className: 'header3-item',
        children: {
          href: '/video',
          children: [{ children: '视频教程', name: 'text' }]
        }
      },
      {
        name: '/about',
        className: 'header3-item',
        children: {
          href: '/about',
          children: [{ children: '关于我们', name: 'text' }]
        }
      },
      // {
      //   name: 'item6',
      //   className: 'header3-button',
      //   children: {
      //     href: 'https://console.monibuca.com',
      //     children: isMobile
      //       ? [{ children: '控制台', name: 'text' }]
      //       : [
      //           {
      //             children: (
      //               <div className="nav-button" key="button-console">
      //                 <img
      //                   src="/svg/console.svg"
      //                   alt=""
      //                   width={24}
      //                   style={{ marginRight: '9px' }}
      //                 />
      //                 控制台
      //               </div>
      //             ),
      //             name: 'text'
      //           }
      //         ]
      //   }
      // },
      // {
      //   name: 'item7',
      //   className: 'header3-button',
      //   children: {
      //     href: 'https://test.monibuca.com:8081/ui/#/instance',
      //     children: isMobile
      //       ? [{ children: 'Monibuca 开源', name: 'text' }]
      //       : [
      //           {
      //             children: (
      //               <div className="nav-button-2" key="button-github">
      //                 <img
      //                   src="/svg/console.svg"
      //                   alt=""
      //                   width={24}
      //                   style={{ marginRight: '9px' }}
      //                 />
      //                 Pro Demo
      //               </div>
      //             ),
      //             name: 'text'
      //           }
      //         ]
      //   }
      // }
    ]
  },
  mobileMenu: { className: 'header3-mobile-menu' }
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
            {
              name: 'link0',
              target: '_blank',
              href: 'https://space.bilibili.com/328443019/channel/collectiondetail?sid=514619',
              children: 'B 站分享'
            },
            {
              name: 'link1',
              target: '_blank',
              href: 'https://www.bilibili.com/video/BV1jg411H7qE/',
              children: 'RTS 分享'
            }
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
            {
              name: 'link0',
              target: '_blank',
              href: 'https://monibuca.com/guide/introduction.html',
              children: '快速上手'
            },
            // { name: "link1", href: "#", children: "使用手册" },
            {
              name: 'link2',
              target: '_blank',
              href: 'https://monibuca.com/guide/qa/error.html',
              children: '常见问题'
            }
            // { name: "link3", href: "#", children: "二次开发" },
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
            {
              href: 'https://download.m7s.live/bin/m7s_windows_amd64.tar.gz',
              name: 'link0',
              children: 'Windows'
            },
            {
              href: 'https://download.m7s.live/bin/m7s_darwin_amd64.tar.gz',
              name: 'link1',
              children: 'Mac'
            },
            {
              href: 'https://download.m7s.live/bin/m7s_darwin_arm64.tar.gz',
              name: 'link2',
              children: 'Mac(arm64)'
            },
            {
              href: 'https://download.m7s.live/bin/m7s_linux_amd64.tar.gz',
              name: 'link3',
              children: 'Linux'
            },
            {
              href: 'https://download.m7s.live/bin/m7s_linux_arm64.tar.gz',
              name: 'link4',
              children: 'Linux(arm64)'
            }
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
            {
              href: 'https://monibuca.com',
              name: 'link0',
              target: '_blank',
              children: 'Monibuca'
            },
            {
              href: 'https://jessibuca.com',
              name: 'link1',
              target: '_blank',
              children: 'Jessibuca'
            },
            {
              href: 'https://rebebuca.com',
              name: 'link2',
              target: '_blank',
              children: 'Rebebuca'
            }
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
            {
              href: 'https://monibuca.com/about?tab=0',
              name: 'link0',
              target: '_blank',
              children: 'FAQ'
            },
            {
              href: 'https://monibuca.com/about?tab=1',
              name: 'link1',
              target: '_blank',
              children: '开发团队'
            },
            {
              href: 'https://monibuca.com/about?tab=2',
              name: 'link2',
              target: '_blank',
              children: '诞生故事'
            }
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
            {
              href: '#',
              name: 'link0',

              children: (
                <Popover
                  content={
                    <div>
                      <img src="/img/wx-mp.jpg" alt="" height={250} />
                    </div>
                  }
                >
                  微信公众号：不卡科技
                  <img src="/svg/ic_QR code.svg" alt="" width={24} style={{ marginRight: '9px' }} />
                </Popover>
              )
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <Popover
                  content={
                    <div>
                      <img src="/img/qq-qun.jpeg" alt="" height={250} />
                    </div>
                  }
                >
                  QQ群：751639168
                  <img src="/svg/ic_QR code.svg" alt="" width={24} style={{ marginRight: '9px' }} />
                </Popover>
              )
            },
            {
              href: '#',
              name: 'link2',
              children: (
                <Popover
                  content={
                    <div>
                      <img src="/img/qqgroup.jpg" alt="" height={250} />
                    </div>
                  }
                >
                  QQ频道：p0qq0crz08
                  <img src="/svg/ic_QR code.svg" alt="" width={24} style={{ marginRight: '9px' }} />
                </Popover>
              )
            }
          ]
        }
      }
    ]
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <div>
        <div>@2024 Monibuca All Rights Reserved 南京莫妮不卡科技有限公司</div>
        <div className="bei-an">
          <a href="https://beian.miit.gov.cn/" target="_blank">
            苏ICP备2023025807号-1
          </a>
          <img src="/img/beian.png"></img>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011302321580"
            target="_blank"
          >
            苏公网安备 32011302321580号
          </a>
        </div>
      </div>
    )
  }
}
