# <img src="brand/logo.svg" height="100" /> Ant Plus 4

> Ant Plus 4.0 发布！🎉
>
> ◆ 全面适配 Ant Design 4.0  
> ◆ React Hooks 重写，大幅性能优化  
> ◆ 全新文档设计，优化内容与排版  
> ◆ Ant Design 文档中所有 Form 示例的对比代码

Ant Plus 是 Ant Design 表单相关组件的简化版，以最符合 html 直觉的方式来搭建表单代码。

[![npm version](https://img.shields.io/npm/v/antx.svg?style=flat-square)](https://www.npmjs.com/package/antx)
[![npm downloads](https://img.shields.io/npm/dt/antx.svg?style=flat-square)](http://www.npmtrends.com/antx)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/antx?style=flat-square)](https://bundlephobia.com/result?p=antx)
[![GitHub](https://img.shields.io/github/license/nanxiaobei/ant-plus.svg?style=flat-square)](https://github.com/nanxiaobei/ant-plus/blob/master/LICENSE)

## 文档

[https://nanxiaobei.github.io/ant-plus](https://nanxiaobei.github.io/ant-plus)

## 介绍

Ant Plus 去除了对 `Form.Item` 包裹的依赖，同时提供了全新的 `rules` 设置方式与表单相关组件 API，可大幅简化开发，消灭繁琐的样板代码，从而轻松构建起简洁清晰、利于维护的表单代码。

- 极其简便，符合 html 直觉，告别繁琐的 `Form.Item`、`rules` 等。
- 统一提示，可全局定义 `placeholder` 信息与 `rules` 校验提示。
- 简化版 `rules`，简化的组件常用 Props，一切只为更流畅的开发。
- 以渐进增强理念实现，兼容组件全部原有功能，不会有任何限制。

## 对比

Ant Plus 与 Ant Design 表单代码对比：

![view](demo/view.png)

## 安装

```sh
yarn add antx
```

或

```sh
npm install antx
```

## 使用

```jsx
import { Form, Input, Button } from 'antx';

const Demo = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form data={{ name: 'Emily' }} onFinish={onFinish}>
      <Input label="用户名" name="name" rules={['required', 'max=10']} max={10} tip="full" />
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
```

[`Form.Item`](https://ant.design/components/form-cn/#Form.Item) Props 中的项，均可直接用于表单控件的 Props，如 `label`、`name`、`rules` 等。此外，Ant Plus 还对 `rules` 进行了简化，可直接使用字符串短语来设置。

完整使用介绍，请查看文档。

## 示例

查看 Ant Design 文档中所有 Form 示例的 Ant Plus 版本对比代码。

[![Edit antx](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/antx-mqxxzrj87j?fontsize=14)

## 协议

[MIT License](https://github.com/nanxiaobei/ant-plus/blob/master/LICENSE) (c) [nanxiaobei](https://mrlee.me/)
