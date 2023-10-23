import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AIGC2D - 文档中心",
  description: "AIGC2D 面向开发者的AIGC接口平台,支持OpenAI，midjourney等AIGC接口",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '首页', link: 'https://www.aigc2d.com'},
      {text: '快速开始', link: '/guide/what-is-aigc2d'},
      {text: '控制台', link: 'https://www.aigc2d.com/app/dashboard'}
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          {text: '什么是AIGC2D？', link: '/guide/what-is-aigc2d'},
          {text: '快速开始', link: '/guide/quick-start'},
          {text: '定价', link: '/guide/pricing'},
          {text: '如何扣费', link: '/guide/fee'},
          {text: '联系我们', link: '/guide/contact'},
        ],
      },
      {
        text: 'OpenAI',
        items: [
          {
            text: '编程指南',
            link: '/openai/sdk'
          },
          {
            text: '接口文档',
            link: 'https://aigc2d-doc.apifox.cn/'
          },
          {
            text: '兼容应用',
            link: '/openai/app'
          },
          {
            text: '在线Chat',
            link: 'https://chat.aigc2d.com'
          },
          {
            text: 'Tokens计算',
            link: 'https://tiktoken.aigc2d.com/'
          }]
      },
      {
        text: 'Midjourney',
        items: [
          {
            text: 'Midjourney 说明',
            link: '/midjourney/index'
          },
          {
            text: '接口文档',
            link: 'https://aigc2d-doc.apifox.cn/api-97549394'
          }
        ]
      },
      {
        text: "Stable Diffusion",
        items: [
          {
            text: "Stable Diffusion 说明",
            link: "/sd/index"
          }, {
            text: "接口文档",
            link: "https://aigc2d-doc.apifox.cn/api-117888146"
          }
        ]
      },
      {
        text: '文心一言',
        items: [
          {
            text: "文心一言",
            link: 'ernie/index'
          }, {
            text: '接口文档',
            link: 'https://aigc2d-doc.apifox.cn/api-100847234'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: '常见问题',
            link: '/other/question'
          },
          {
            text: '支持计划',
            link: '/other/support'
          },
          {
            text: '更新日志',
            link: '/other/changelog'
          }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      copyright: 'Copyright © 2023 <a href="https://www.aigc2d.com">AIGC2D</a>'
    },
    i18nRouting: true,
  },
  lang: 'zh-CN',
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "简体中文",
      dir: '/',
    },
    en: {
      label: "English",
      lang: "en",
      title: "English",
      dir: '/en',
      link: "/en/"
    }
  }
})
