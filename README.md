# Ssmee 多语言外贸官网

时时美纸巾 B2B 外贸官网，三语支持（中文/英文/俄语）。

## 技术栈

- Vue 3 + Vite
- vue-router (路由)
- vue-i18n (国际化)
- Cloudflare Pages (部署)

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署

项目已配置 Cloudflare Pages 自动部署：
- 推送到 GitHub main 分支自动触发部署
- 构建命令: `npm run build`
- 输出目录: `dist`

## 项目结构

```
ssmee-website/
├── src/
│   ├── main.js          # 入口
│   ├── App.vue          # 根组件
│   ├── router/          # 路由配置
│   ├── lang/            # 三语语言包
│   ├── components/      # 公共组件
│   └── views/           # 页面视图
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
└── package.json
```

## 页面

| 路由 | 页面 | 说明 |
|------|------|------|
| / | Home | 首页 |
| /products | Products | 产品列表 |
| /products/tissue | TissueDetail | 抽纸详情 |
| /products/bottom-drawer | BottomDrawerDetail | 底部挂抽详情 |
| /about | About | 关于我们 |
| /certification | Certification | 资质证书 |
| /contact | Contact | 联系询盘 |
| /cooperation | Cooperation | 招商加盟 |

## 品牌色

- 主色: #1A3A5C (深蓝)
- 强调: #F5A623 (金色)
- 数据: #0D7D8A (青色)
