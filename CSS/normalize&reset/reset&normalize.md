# Normalize.css & Reset.css

## Normalize.css

- 保护有用的浏览器默认样式而不是完全去掉它们
- 为大部分HTML元素提供一般化的样式
- 修复浏览器自身的bug并保证各浏览器的一致性
- 用一些小技巧优化CSS可用性
- 用注释和详细的文档来解释代码

## Reset.css

将所有的浏览器的自带样式重置掉，这样更易于保持各浏览器渲染的一致性

## 元素的代理默认样式

| Element | chrome | ie8 |
| :-: |  :-:  |  :-:  |
| html | width,height占满 | 同 |
| body | margin: 8px; | 同 |
| div  | - | 同 |
| p | margin-top:1em;margin-bottom:1em; | 同 | 
| h1 | margin: 0.67em 0px; font-size: 2em; font-weight: bold; | 同 |
| h2 | margin: 0.83em 0px; font-size: 1.5em; font-weight: bold; | 同 |
| h3 | margin: 1em 0px; font-size: 1.17em; font-weight: bold; | 同 |
| h4 | margin: 1.33em 0px; font-size: 1em; font-weight: bold; | 同 |
| h5 | margin: 1.67em 0px; font-size: 0.83em; font-weight: bold; | 同 |
| h6 | margin: 2.33em 0px; font-size: 0.67em; font-weight: bold; | 同 |
| span | - | 同 |
| i | font-style: italic; | |
| img | vertical: baseline | |
| a | color:blue;text-decoration: underline solid blue; | |
| em | font-style: italic; | |
| strong | font-weight: bold; | |
| sup | vertical-align: super;font-size: smaller; | |
| sub | vertical-align: sub;font-size: smaller; | |