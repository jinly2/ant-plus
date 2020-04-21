(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JSTo:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),b=n("TjRS");n("Dw9c"),n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"site/Index.mdx"}});var o={_frontmatter:i},l=b.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,["components"]);return Object(a.b)(l,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"快速开始"},"快速开始"),Object(a.b)("p",null,"Ant Plus 是 Ant Design ",Object(a.b)("a",r({parentName:"p"},{href:"https://ant.design/components/form-cn/"}),"Form")," 的简化版。此刻起，以你最熟悉的方式来搭建 Form。"),Object(a.b)("h2",{id:"介绍"},"介绍"),Object(a.b)("p",null,"Ant Plus 最主要的特点，便是可以在表单控件的 Props 中，直接传入以前需使用 ",Object(a.b)("inlineCode",{parentName:"p"},"Form.Item")," 与 ",Object(a.b)("inlineCode",{parentName:"p"},"form.getFieldDecorator")," 包裹来传入的信息。"),Object(a.b)("p",null,"从而简化使用，杜绝冗余的样板代码，构建起简洁清晰、利于维护的 Form 代码。"),Object(a.b)("h2",{id:"对比"},"对比"),Object(a.b)("p",null,"使用 Ant Plus 与 ",Object(a.b)("inlineCode",{parentName:"p"},"antd")," 搭建 Form 的代码对比。"),Object(a.b)("p",null,Object(a.b)("img",{alt:"\\u4EE3\\u7801\\u5BF9\\u6BD4\\u56FE",src:"https://raw.githubusercontent.com/nanxiaobei/ant-plus/master/contrast/demo.png"})),Object(a.b)("h2",{id:"特性"},"特性"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"极其简便"),"：符合直觉，告别繁琐的 ",Object(a.b)("inlineCode",{parentName:"li"},"Form.Item")," ",Object(a.b)("inlineCode",{parentName:"li"},"rules"),"。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"统一提示"),"：简化 ",Object(a.b)("inlineCode",{parentName:"li"},"rules")," 代码，可全局定义校验提示，告别烦乱的自定义与不可控。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"简化 API"),"：对 Form 相关组件的常用 API 进行了简化，一切只为更流畅的开发。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"渐进增强"),"：兼容组件全部原有使用方式，在基础之上，进行了功能的拓展与简化。")),Object(a.b)("h2",{id:"安装"},"安装"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"yarn add antx\n")),Object(a.b)("p",null,"或"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"npm install antx\n")),Object(a.b)("h2",{id:"示例"},"示例"),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://codesandbox.io/s/antx-mqxxzrj87j?fontsize=14"}),Object(a.b)("img",{alt:"Edit antx",src:"https://codesandbox.io/static/img/play-codesandbox.svg"}))),Object(a.b)("h2",{id:"使用"},"使用"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx",metastring:"harmony",harmony:!0}),"import { Input, Button } from 'antx';\n\nconst Demo = () => (\n  <Form data={{ name: 'Emily' }}>\n    <Input label=\"用户名\" name=\"name\" rules={['required', 'max=10']} max={10} tip=\"full\" />\n    <Button htmlType=\"submit\">提交</Button>\n  </Form>\n);\n\nexport default Demo;\n")),Object(a.b)("p",null,"表单控件的 Props 中，",Object(a.b)("inlineCode",{parentName:"p"},"id")," 为表单域唯一标识，",Object(a.b)("inlineCode",{parentName:"p"},"label")," 为 ",Object(a.b)("inlineCode",{parentName:"p"},"Form.Item")," 的 ",Object(a.b)("inlineCode",{parentName:"p"},"label"),"。",Object(a.b)("a",r({parentName:"p"},{href:"https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0"}),Object(a.b)("inlineCode",{parentName:"a"},"getFieldDecorator(id, options)"))," ",Object(a.b)("inlineCode",{parentName:"p"},"options")," 参数中的项，均可直接用于组件的 Props，如 ",Object(a.b)("inlineCode",{parentName:"p"},"rules"),"、",Object(a.b)("inlineCode",{parentName:"p"},"initialValue")," 等。"),Object(a.b)("p",null,"Ant Plus 还对 ",Object(a.b)("inlineCode",{parentName:"p"},"rules")," 做了简化，可使用简洁的字符串来设置校验规则，同时提供了体验更好的 UI。"),Object(a.b)("p",null,"是的，一切就是如此的简洁清晰。完整使用介绍，请查阅 ",Object(a.b)("a",r({parentName:"p"},{href:"https://nanxiaobei.github.io/ant-plus/#/form#api"}),"Ant Plus Form 组件 API"),"。"),Object(a.b)("h2",{id:"github"},"GitHub"),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/nanxiaobei/ant-plus"}),"https://github.com/nanxiaobei/ant-plus")),Object(a.b)("h2",{id:"协议"},"协议"),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/nanxiaobei/ant-plus/blob/master/LICENSE"}),"MIT License")," (c) ",Object(a.b)("a",r({parentName:"p"},{href:"https://mrlee.me/"}),"nanxiaobei")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"site/Index.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---site-index-mdx-7144d4f9eaabe2f37850.js.map