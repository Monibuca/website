import { Button, Space } from 'antd'
import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }
const data = [
  {
    title: "快速上手",
    children: [
      {
        title: '📖 介绍',
        content: '什么是Monibuca',
        href: '/docs/guide/introduction.html',
      },
      {
        title: '⏬ 下载',
        content: '安装与运行',
        href: '/docs/guide/startup.html',
      },
      {
        title: '💿 版本',
        content: '最新版本和更新记录',
        href: '/docs/guide/v4.html',
      },
    ]
  },
  {
    title: "使用手册",
    children: [
      {
        title: '🛠️ 配置',
        content: '配置文件如何修改',
        href: '/docs/guide/config.html',
      },
      {
        title: '🔑 API',
        content: '通过HTTP请求控制Monibuca',
        href: '/docs/guide/api.html',
      },
      {
        title: '🔐 鉴权',
        content: '对推拉流安全性控制',
        href: '/docs/guide/authentication.html'
      },
    ]
  },
  {
    title: "常见问题",
    children: [
      {
        title: '💢 崩溃',
        content: '程序崩溃后如何找到崩溃的原因',
        href: '/docs/guide/qa/error.html',
      },
      {
        title: '🎥 推流',
        content: '推流时需要注意什么',
        href: '/docs/guide/qa/push.html',
      },
      {
        title: '🖥️ 播放',
        content: '播放地址是什么？',
        href: '/docs/guide/qa/play.html'
      },
    ]
  },
  {
    title: "二次开发",
    children: [
      {
        title: '🦾 开发准备',
        content: 'IDE、语言、环境',
        href: '/docs/devel/startup.html',
      },
      {
        title: '🧩 定义插件',
        content: '如何定义一个插件',
        href: '/docs/devel/plugin.html',
      },
      {
        title: '🔌 插件接口',
        content: '如何对外提供HTTP接口',
        href: '/docs/devel/api.html'
      },
    ]
  },
  {
    title: "公众号文章",
    children: [
      {
        title: '🔑 最佳实践',
        content: '入门必看系列',
        href: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMDQ5Nzg5MQ==&action=getalbum&album_id=2958436172576423938&scene=173&from_msgid=2247483770&from_itemidx=1&count=3&nolastread=1#wechat_redirect',
      },
      {
        title: '🗃️ 发布历史',
        content: '版本和新特性',
        href: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMDQ5Nzg5MQ==&action=getalbum&album_id=2957672813660831747#wechat_redirect',
      },
      {
        title: '🔬 技术原理',
        content: '对框架原理的深入解读',
        href: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMDQ5Nzg5MQ==&action=getalbum&album_id=2979318380627460104#wechat_redirect'
      },
    ]
  }
];
export const Feature140DataSource = {
  wrapper: { className: 'home-page-wrapper Feature14-wrapper' },
  page: { className: 'home-page Feature14' },
  Carousel: {
    className: 'Feature14-content',
    dots: false,
    wrapper: { className: 'Feature14-content-wrapper' },
    titleWrapper: {
      className: 'Feature14-title-wrapper',
      children: [],
      barWrapper: {
        className: 'Feature14-title-bar-wrapper',
        children: {
          className: 'Feature14-title-bar'
        }
      }
    },
    children: data.map((item, i) => ({
      title: { className: 'Feature14-title-text', children: item.title },
      className: 'Feature14-item',
      name: `block${i}`,
      children: item.children.map((child, j) => ({
        md: 8,
        xs: 24,
        children: {
          className: 'Feature14-text',
          children: (<Space
            className="item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(child.href)
            }}
          >
            <Space direction="vertical" align="start">
              <div className="title">{child.title}</div>
              <div className="desc">{child.content}</div>
            </Space>
          </Space>)
        }
      }))
    }))
  }
}
