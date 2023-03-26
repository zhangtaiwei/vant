import{o as a,a as i,z as e}from"./vue-libs-12a1683e.js";const s={class:"van-doc-markdown-body"},n=e(`<h1>更新日志</h1><div class="van-doc-card"><h3 id="ti-shi" tabindex="-1">提示</h3><p>当前文档为 Vant 4 的更新日志，其他版本请参考：</p><ul><li><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/changelog" target="_blank">Vant 2 更新日志</a></li><li><a href="https://vant-ui.github.io/vant/v3/#/zh-CN/changelog" target="_blank">Vant 3 更新日志</a></li></ul></div><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Vant 遵循 <a href="https://semver.org/lang/zh-CN/" target="_blank">Semver</a> 语义化版本规范。</p><p><strong>发布节奏</strong></p><ul><li>修订号：每周发布，包含新特性和问题修复。</li><li>次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。</li><li>主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。</li></ul></div><h2 id="geng-xin-nei-rong" tabindex="-1">更新内容</h2><div class="van-doc-card"><h3 id="v4.1.2" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.1.1...v4.1.2" target="_blank">v4.1.2</a></h3><p><code>2023-03-26</code></p><p><strong>Feature</strong></p><ul><li>Locale: 增加 Khmer 高棉语 <a href="https://github.com/vant-ui/vant/issues/11701" target="_blank">#11701</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Field: 修复同时设置 label-align &quot;top&quot; 和 is-link 时样式错误的问题 <a href="https://github.com/vant-ui/vant/issues/11684" target="_blank">#11684</a></li><li>Field: 修复设置 readonly 属性后无法触发 blur 事件的问题 <a href="https://github.com/vant-ui/vant/issues/11699" target="_blank">#11699</a></li><li>ImagePreview: 修复长图片上下拖动不顺滑的问题 <a href="https://github.com/vant-ui/vant/issues/11702" target="_blank">#11702</a></li></ul></div><div class="van-doc-card"><h3 id="v4.1.1" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.1.0...v4.1.1" target="_blank">v4.1.1</a></h3><p><code>2023-03-19</code></p><p><strong>Feature</strong></p><ul><li>Uploader: 支持 avif 图片格式 <a href="https://github.com/vant-ui/vant/issues/11655" target="_blank">#11655</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>@vant/use: 增加 vue 作为 peer dependencies <a href="https://github.com/vant-ui/vant/issues/11662" target="_blank">#11662</a></li><li>DatePicker: 修复个别情况下显示时间错误的问题 <a href="https://github.com/vant-ui/vant/issues/11656" target="_blank">#11656</a></li><li>Field: 修复 <code>FieldRuleFormatter</code> 类型拼写错误 <a href="https://github.com/vant-ui/vant/issues/11674" target="_blank">#11674</a></li><li>TextEllipsis: 修复长数字无法被正确截断的问题 <a href="https://github.com/vant-ui/vant/issues/11669" target="_blank">#11669</a></li></ul></div><div class="van-doc-card"><h3 id="v4.1.0" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.11...v4.1.0" target="_blank">v4.1.0</a></h3><p><code>2023-03-05</code></p><p><strong>New Component</strong></p><ul><li>新增 TextEllipsis 文本省略组件 <a href="https://github.com/vant-ui/vant/issues/11593" target="_blank">#11593</a></li></ul><p><strong>Feature</strong></p><ul><li>Swipe: 新增 drag-start/drag-end 事件的 index 参数 <a href="https://github.com/vant-ui/vant/issues/11632" target="_blank">#11632</a></li><li>TreeSelect: 新增 nav-text 插槽 <a href="https://github.com/vant-ui/vant/issues/11602" target="_blank">#11602</a> <a href="https://github.com/vant-ui/vant/issues/11641" target="_blank">#11641</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>DropdownMenu: 修复使用 toggle 方法打开时位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11640" target="_blank">#11640</a></li><li>Field: 修复设置 label-width 后 label-position 不生效的问题 <a href="https://github.com/vant-ui/vant/issues/11611" target="_blank">#11611</a></li><li>Locale: 修复乌克兰语翻译问题 <a href="https://github.com/vant-ui/vant/issues/11629" target="_blank">#11629</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.11" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.10...v4.0.11" target="_blank">v4.0.11</a></h3><p><code>2023-02-20</code></p><p><strong>Feature</strong></p><ul><li>新增 <a href="https://github.com/vant-ui/vant-nuxt" target="_blank">vant-nuxt</a> 包，作为官方的 Nuxt Module <a href="https://github.com/vant-ui/vant/issues/11588" target="_blank">#11588</a></li><li>BackTop: 新增 z-index 属性以及相关 CSS 变量 <a href="https://github.com/vant-ui/vant/issues/11582" target="_blank">#11582</a></li><li>Picker: 支持在 option 插槽中获取选项的 index <a href="https://github.com/vant-ui/vant/issues/11594" target="_blank">#11594</a></li><li>@vant/use: 支持注销 useEventListener <a href="https://github.com/vant-ui/vant/issues/11540" target="_blank">#11540</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>PickerGroup: 修复 confirm 事件参数不正确的问题 <a href="https://github.com/vant-ui/vant/issues/11566" target="_blank">#11566</a></li><li>PickerGroup: 修复 Tab 的下划线样式错误问题 <a href="https://github.com/vant-ui/vant/issues/11547" target="_blank">#11547</a></li><li>PickerGroup: 修复部分插槽不可用的问题 <a href="https://github.com/vant-ui/vant/issues/11564" target="_blank">#11564</a></li><li>Popover: 修复 placement 为 <code>*-start/end</code> 时箭头位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11584" target="_blank">#11584</a></li><li>Popover: 修复动画会导致组件位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11568" target="_blank">#11568</a></li><li>Space: 修复 SSR 时出现缺少 Text 报错的问题 <a href="https://github.com/vant-ui/vant/issues/11549" target="_blank">#11549</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.10" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.9...v4.0.10" target="_blank">v4.0.10</a></h3><p><code>2023-02-02</code></p><p><strong>Bug Fixes</strong></p><ul><li>DatePicker: 修复 change 事件中日期参数不正确的问题 <a href="https://github.com/vant-ui/vant/issues/11529" target="_blank">#11529</a></li><li>Slider: 修复双滑块模式下无法正确拖动的问题 <a href="https://github.com/vant-ui/vant/issues/11526" target="_blank">#11526</a> <a href="https://github.com/vant-ui/vant/issues/11534" target="_blank">#11534</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.9" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.8...v4.0.9" target="_blank">v4.0.9</a></h3><p><code>2023-01-26</code></p><p><strong>Feature</strong></p><ul><li>BackTop: 新增 immediate 属性 <a href="https://github.com/vant-ui/vant/issues/11515" target="_blank">#11515</a></li><li>Calendar: 新增 month-title 插槽 <a href="https://github.com/vant-ui/vant/issues/11500" target="_blank">#11500</a></li><li>Cascader: 新增 useCascaderAreaData 方法 <a href="https://github.com/vant-ui/vant/issues/11518" target="_blank">#11518</a></li><li>ImagePreview: 支持在缩放图片后滑动至其他图片 <a href="https://github.com/vant-ui/vant/issues/11505" target="_blank">#11505</a></li><li>Locale: 新增 Esperanto 世界语 <a href="https://github.com/vant-ui/vant/issues/11520" target="_blank">#11520</a></li><li>Locale: 新增 useCurrentLang 方法 <a href="https://github.com/vant-ui/vant/issues/11517" target="_blank">#11517</a></li><li>Swipe: 新增 drag-start, drag-end 事件 <a href="https://github.com/vant-ui/vant/issues/11502" target="_blank">#11502</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>ImagePreview: 修复切换图片过程中可以触发图片缩放的问题 <a href="https://github.com/vant-ui/vant/issues/11504" target="_blank">#11504</a></li><li>Locale: 修复意大利语翻译问题 <a href="https://github.com/vant-ui/vant/issues/11519" target="_blank">#11519</a></li><li>Swipe: 修复多指操作时滑动位置被错误重置的问题 <a href="https://github.com/vant-ui/vant/issues/11503" target="_blank">#11503</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.8" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.7...v4.0.8" target="_blank">v4.0.8</a></h3><p><code>2023-01-15</code></p><p><strong>Feature</strong></p><ul><li>PickerGroup: 新增 next-step-text 属性 <a href="https://github.com/vant-ui/vant/issues/11487" target="_blank">#11487</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Picker: 调整确认按钮的颜色为 primary color <a href="https://github.com/vant-ui/vant/issues/11479" target="_blank">#11479</a></li><li>NumberKeyboard: 调整确认按钮的颜色为 primary color <a href="https://github.com/vant-ui/vant/issues/11479" target="_blank">#11479</a></li><li>Icons: 增加 woff 格式来兼容个别 webview 环境 <a href="https://github.com/vant-ui/vant/issues/11485" target="_blank">#11485</a></li><li>Picker: 修复标题文字可能不居中的问题 <a href="https://github.com/vant-ui/vant/issues/11489" target="_blank">#11489</a></li><li>Skeleton: 修复全量引入组件时不会自动注册 Skeleton 子组件的问题 <a href="https://github.com/vant-ui/vant/issues/11470" target="_blank">#11470</a> <a href="https://github.com/vant-ui/vant/issues/11469" target="_blank">#11469</a></li><li>Tabs: 修复动态插入 Tab 时在个别情况下顺序错误的问题 <a href="https://github.com/vant-ui/vant/issues/11462" target="_blank">#11462</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.7" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.6...v4.0.7" target="_blank">v4.0.7</a></h3><p><code>2023-01-02</code></p><p><strong>Bug Fixes</strong></p><ul><li>Icons: 修复 delete / delete-o 图标存在多余黑点的问题 <a href="https://github.com/vant-ui/vant/issues/11441" target="_blank">#11441</a></li><li>Icons: 移除多余的 woff/ttf 格式声明 <a href="https://github.com/vant-ui/vant/issues/11442" target="_blank">#11442</a></li><li>ImagePreview：修复 teleport 属性不生效的问题 <a href="https://github.com/vant-ui/vant/issues/11429" target="_blank">#11429</a></li><li>Locale: 修复 ru-RU 中的 &quot;Calendar&quot; 拼写错误 <a href="https://github.com/vant-ui/vant/issues/11425" target="_blank">#11425</a></li><li>Swipe: 修复在 keep-alive 内使用时可能渲染空白的问题 <a href="https://github.com/vant-ui/vant/issues/11437" target="_blank">#11437</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.6" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.5...v4.0.6" target="_blank">v4.0.6</a></h3><p><code>2022-12-26</code></p><p><strong>Bug Fixes</strong></p><ul><li>修复升级 vite v4 导致构建产物不全的问题 <a href="https://github.com/vant-ui/vant/issues/11423" target="_blank">#11423</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.5" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.4...v4.0.5" target="_blank">v4.0.5</a></h3><p><code>2022-12-25</code></p><p><strong>Feature</strong></p><ul><li>Locale: 新增 Dutch 荷兰语 <a href="https://github.com/vant-ui/vant/issues/11419" target="_blank">#11419</a></li><li>Locale: 新增 Mongolian 蒙古语 <a href="https://github.com/vant-ui/vant/issues/11418" target="_blank">#11418</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Badge: 修复 offset 属性部分情况下导致样式错误的问题 <a href="https://github.com/vant-ui/vant/issues/11400" target="_blank">#11400</a></li><li>Form: 修复事件参数中可能出现 key 为 undefined 的问题 <a href="https://github.com/vant-ui/vant/issues/11410" target="_blank">#11410</a></li><li>Picker: 修复深色模式下加载状态样式错误的问题 <a href="https://github.com/vant-ui/vant/issues/11405" target="_blank">#11405</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.4" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.3...v4.0.4" target="_blank">v4.0.4</a></h3><p><code>2022-12-23</code></p><p><strong>Bug Fixes</strong></p><ul><li>Field: 修复使用 formatter 时光标位置可能错误的问题 <a href="https://github.com/vant-ui/vant/issues/11360" target="_blank">#11360</a></li><li>Image: 修复 load 事件未正确触发导致 ImagePreview 报错的问题 <a href="https://github.com/vant-ui/vant/issues/11406" target="_blank">#11406</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.3" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.2...v4.0.3" target="_blank">v4.0.3</a></h3><p><code>2022-12-13</code></p><p><strong>Bug Fixes</strong></p><ul><li>Field: 修复动态设置空的 label 不生效的问题 <a href="https://github.com/vant-ui/vant/issues/11373" target="_blank">#11373</a></li><li>ImagePreview: 修复图片可能加载失败的问题 <a href="https://github.com/vant-ui/vant/issues/11376" target="_blank">#11376</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.2" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.1...v4.0.2" target="_blank">v4.0.2</a></h3><p><code>2022-12-03</code></p><p><strong>Bug Fixes</strong></p><ul><li>Field: 修复使用 formatter 时光标位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11348" target="_blank">#11348</a></li><li>Image: 修复在 Nuxt 3 下图片可能无法展示的问题 <a href="https://github.com/vant-ui/vant/commit/128972a75329d4b14028d00cd23dac66038e2d4c" target="_blank">128972</a></li><li>NavBar: 修复屏幕旋转时 placeholder 未自动适配高度的问题 <a href="https://github.com/vant-ui/vant/issues/11351" target="_blank">#11351</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.1" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0...v4.0.1" target="_blank">v4.0.1</a></h3><p><code>2022-12-01</code></p><p><strong>Feature</strong></p><ul><li>Picker: 新增 selectedIndexes 作为事件入参 <a href="https://github.com/vant-ui/vant/issues/11329" target="_blank">#11329</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Field: 修复未选中时修改绑定的值会导致键盘弹出的问题 <a href="https://github.com/vant-ui/vant/issues/11333" target="_blank">#11333</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.9...v4.0.0" target="_blank">v4.0.0</a></h3><p><code>2022-11-26</code></p><blockquote><p>完整内容请移步：<a href="https://vant-ui.github.io/vant/#/zh-CN/release-note-v4" target="_blank">「4.0 更新介绍」</a></p></blockquote><p><strong>Feature</strong></p><ul><li>List: 新增 disabled 属性 <a href="https://github.com/vant-ui/vant/issues/11307" target="_blank">#11307</a></li><li>BackTop: 支持动态设置 target 属性 <a href="https://github.com/vant-ui/vant/issues/11311" target="_blank">#11311</a></li><li>BackTop: 支持通过 CSS 变量修改组件位置 <a href="https://github.com/vant-ui/vant/issues/11312" target="_blank">#11312</a></li><li>BackTop: 重命名 visibility-height 属性为 offset <a href="https://github.com/vant-ui/vant/issues/11309" target="_blank">#11309</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Field: 修复格式化值后，光标位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11308" target="_blank">#11308</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.9" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.8...v4.0.0-rc.9" target="_blank">v4.0.0-rc.9</a></h3><p><code>2022-11-24</code></p><p><strong>Bug Fixes</strong></p><ul><li>Cell: 修复 arrow-direction 设置为 right 不显示的问题 <a href="https://github.com/vant-ui/vant/issues/11279" target="_blank">#11279</a></li><li>Style: 修复 body 标签上的 normalize 样式未生效的问题 <a href="https://github.com/vant-ui/vant/issues/11287" target="_blank">#11287</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.8" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.7...v4.0.0-rc.8" target="_blank">v4.0.0-rc.8</a></h3><p><code>2022-11-20</code></p><p><strong>Feature</strong></p><ul><li>新增 BackTop 回到顶部组件，注意该新组件的 API 尚未稳定，在 4.0 正式版发布前仍可能产生 breaking change <a href="https://github.com/vant-ui/vant/issues/11236" target="_blank">#11236</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>DropdownItem: 修复使用 teleport 时无法设置 attr 的问题 <a href="https://github.com/vant-ui/vant/issues/11273" target="_blank">#11273</a></li><li>List: 修复初始的 loading 值为 true 时加载错误的问题 <a href="https://github.com/vant-ui/vant/issues/11275" target="_blank">#11275</a></li><li>NumberKeyboard: 修复使用 teleport 时无法设置 attr 的问题 <a href="https://github.com/vant-ui/vant/issues/11274" target="_blank">#11274</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.7" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.6...v4.0.0-rc.7" target="_blank">v4.0.0-rc.7</a></h3><p><code>2022-11-13</code></p><p><strong>New Component</strong></p><ul><li>新增 SkeletonAvatar、SkeletonTitle、SkeletonImage、SkeletonParagraph 组件 <a href="https://github.com/vant-ui/vant/issues/11173" target="_blank">#11173</a></li></ul><p><strong>Feature</strong></p><ul><li>ImagePreview: 新增 long-press 事件 <a href="https://github.com/vant-ui/vant/issues/11252" target="_blank">#11252</a></li><li>Popover: 支持非受控模式 <a href="https://github.com/vant-ui/vant/issues/11244" target="_blank">#11244</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>ActionSheet: 修复标题为空时取消按钮层级错误的问题 <a href="https://github.com/vant-ui/vant/issues/11213" target="_blank">#11213</a></li><li>DatePicker: 在生产环境下不再抛出开发错误提示 <a href="https://github.com/vant-ui/vant/issues/11248" target="_blank">#11248</a></li><li>Lazyload: 修复使用 lazy-image 时报错 h is not a function 的问题 <a href="https://github.com/vant-ui/vant/issues/11229" target="_blank">#11229</a></li><li>Picker: 修复抛出 confirm 事件时 v-model 未正确更新的问题 <a href="https://github.com/vant-ui/vant/issues/11194" target="_blank">#11194</a></li><li>Picker: 修复 column 为空时操作报错的问题 <a href="https://github.com/vant-ui/vant/issues/11249" target="_blank">#11249</a></li><li>Uploader: 修复 show-upload 为 false 时 chooseFile 无法调用的问题 <a href="https://github.com/vant-ui/vant/issues/11218" target="_blank">#11218</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.6" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.5...v4.0.0-rc.6" target="_blank">v4.0.0-rc.6</a></h3><p><code>2022-10-23</code></p><p><strong>Feature</strong></p><ul><li>Calendar: subtitle 插槽新增 text 和 date 入参 <a href="https://github.com/vant-ui/vant/issues/11168" target="_blank">#11168</a></li><li>Cell: 新增 tag 属性 <a href="https://github.com/vant-ui/vant/issues/11139" target="_blank">#11139</a></li><li>ImagePreview: 新增 image 插槽 <a href="https://github.com/vant-ui/vant/issues/11133" target="_blank">#11133</a></li><li>Toast: 新增 wordBreak 选项 <a href="https://github.com/vant-ui/vant/issues/11147" target="_blank">#11147</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>CouponList: 修复 coupon 位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11153" target="_blank">#11153</a></li><li>CouponList: 修复输入框样式错误的问题 <a href="https://github.com/vant-ui/vant/issues/11155" target="_blank">#11155</a></li><li>Swipe: 修复在 Popup 内时个别情况下渲染错误的问题 <a href="https://github.com/vant-ui/vant/issues/11162" target="_blank">#11162</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.5" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.4...v4.0.0-rc.5" target="_blank">v4.0.0-rc.5</a></h3><p><code>2022-10-07</code></p><p><strong>Feature</strong></p><ul><li>Field: 支持将 label-position 设置为 top <a href="https://github.com/vant-ui/vant/issues/11102" target="_blank">#11102</a></li><li>Loading: 新增 icon 插槽 <a href="https://github.com/vant-ui/vant/issues/11109" target="_blank">#11109</a></li><li>NavBar: 新增 clickable 属性 <a href="https://github.com/vant-ui/vant/issues/11048" target="_blank">#11048</a></li><li>Stepper: 新增 auto-fixed 属性 <a href="https://github.com/vant-ui/vant/issues/11071" target="_blank">#11071</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>DatePicker: 修复日期超出 maxDate 时格式化不正确的问题 <a href="https://github.com/vant-ui/vant/issues/11122" target="_blank">#11122</a></li><li>Tabs: 修复开启 scrollspy 时个别情况下标题栏滚动位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11116" target="_blank">#11116</a></li><li>Tabs: 修复开启 scrollspy 时 nav-bottom 插槽遮挡内容的问题 <a href="https://github.com/vant-ui/vant/issues/11115" target="_blank">#11115</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.4" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.3...v4.0.0-rc.4" target="_blank">v4.0.0-rc.4</a></h3><p><code>2022-09-25</code></p><p><strong>Feature</strong></p><ul><li>Field: end-validate 事件新增 message 参数 <a href="https://github.com/vant-ui/vant/issues/11080" target="_blank">#11080</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Tabs: 修复个别情况下页面滚动位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11085" target="_blank">#11085</a></li><li>Tabs: 修复初始化时菜单横向滚动位置错误的问题 <a href="https://github.com/vant-ui/vant/issues/11059" target="_blank">#11059</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.3" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.2...v4.0.0-rc.3" target="_blank">v4.0.0-rc.3</a></h3><p><code>2022-09-12</code></p><p><strong>Feature</strong></p><ul><li>ConfigProvider: 新增 ConfigProviderThemeVars 类型 <a href="https://github.com/vant-ui/vant/issues/11034" target="_blank">#11034</a></li><li>Notify: 新增 z-index 属性 <a href="https://github.com/vant-ui/vant/issues/11032" target="_blank">#11032</a></li><li>移除 <code>@popperjs/core</code> 依赖，减少安装体积 1.6MB <a href="https://github.com/vant-ui/vant/issues/11030" target="_blank">#11030</a></li></ul><p><strong>Types</strong></p><ul><li>Toast: 修复缺少全局类型定义的问题 <a href="https://github.com/vant-ui/vant/issues/11033" target="_blank">#11033</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.2" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.1...v4.0.0-rc.2" target="_blank">v4.0.0-rc.2</a></h3><p><code>2022-09-11</code></p><p><strong>Breaking Changes</strong></p><ul><li>调整了所有 CSS 变量的挂载位置，由 <code>body</code> 节点调整回 <code>:root</code> 节点，调整后与 Vant v3 版本保持一致，以便于 v3 项目更平滑地升级到 v4 版本。 <a href="https://github.com/vant-ui/vant/issues/11026" target="_blank">#11026</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Dialog: 修复过渡动画异常的问题 <a href="https://github.com/vant-ui/vant/issues/11028" target="_blank">#11028</a></li><li>Empty: 修复深色模式下亮度过高的问题 <a href="https://github.com/vant-ui/vant/issues/11027" target="_blank">#11027</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.1" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v4.0.0-rc.0...v4.0.0-rc.1" target="_blank">v4.0.0-rc.1</a></h3><p><code>2022-09-10</code></p><p><strong>Feature</strong></p><ul><li>导出所有组件的 props，方便进行二次封装 <a href="https://github.com/vant-ui/vant/issues/11024" target="_blank">#11024</a></li><li>Dialog: message-align 属性支持设置为 justify <a href="https://github.com/vant-ui/vant/issues/11014" target="_blank">#11014</a></li><li>Image: 新增 block 属性 <a href="https://github.com/vant-ui/vant/issues/11022" target="_blank">#11022</a></li><li>Toast: 新增 message 插槽 <a href="https://github.com/vant-ui/vant/issues/11018" target="_blank">#11018</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Picker: 修复部分情况下未正确更新选中值的问题 <a href="https://github.com/vant-ui/vant/issues/11009" target="_blank">#11009</a></li><li>Locale: 修复读取 i18n 文案时可能获取到 JS 原生方法的问题 <a href="https://github.com/vant-ui/vant/issues/11010" target="_blank">#11010</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-rc.0" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v3.6.2...v4.0.0-rc.0" target="_blank">v4.0.0-rc.0</a></h3><p><code>2022-09-04</code></p><p><strong>Feature</strong></p><ul><li>新增 <a href="#/zh-CN/picker-group" target="_blank">PickerGroup 选择器组</a> 组件</li></ul><p><strong>Bug Fixes</strong></p><ul><li>DatePicker: 修复未正确更新 modelValue 的问题 <a href="https://github.com/vant-ui/vant/issues/10984" target="_blank">#10984</a></li><li>DatePicker: 修复 min-date 属性未正确生效的问题 <a href="https://github.com/vant-ui/vant/issues/10985" target="_blank">#10985</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-beta.1" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v3.6.0...v4.0.0-beta.1" target="_blank">v4.0.0-beta.1</a></h3><p><code>2022-08-24</code></p><p><strong>Breaking Changes</strong></p><ul><li>Popup: 默认添加了 <code>box-sizing: border-box</code> 样式。</li><li>Popup: 调整了 <code>position=&quot;center&quot;</code> 时的水平居中方式，以解决弹窗宽度无法正确自适应的问题。</li></ul><pre><code class="language-less"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-selector-class">.van-popup--center</span> {
  <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>, <span class="hljs-number">0</span>);
}

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-selector-class">.van-popup--center</span> {
  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">width</span>: fit-content;
  <span class="hljs-attribute">max-width</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100vw</span> - <span class="hljs-built_in">var</span>(--van-padding-md) * <span class="hljs-number">2</span>);
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(-<span class="hljs-number">50%</span>);
}
</code></pre><p><strong>New Component</strong></p><ul><li>新增 <a href="#/zh-CN/space" target="_blank">Space 间距</a> 组件, 由 <a href="https://github.com/LadyChatterleyLover" target="_blank">@LadyChatterleyLover</a> 贡献 <a href="https://github.com/vant-ui/vant/issues/10857" target="_blank">#10857</a></li></ul><p><strong>Feature</strong></p><ul><li>ConfigProvider: 新增 z-index 属性，用于设置弹窗组件的 z-index <a href="https://github.com/vant-ui/vant/issues/10915" target="_blank">#10915</a></li><li>Form: 新增 rule 的 validateEmpty 选项 <a href="https://github.com/vant-ui/vant/issues/10913" target="_blank">#10913</a></li><li>Popup: 新增 role 和 tabindex，优化无障碍访问 <a href="https://github.com/vant-ui/vant/issues/10894" target="_blank">#10894</a></li><li>TouchEmulator: 支持 .mjs 后缀 <a href="https://github.com/vant-ui/vant/issues/10888" target="_blank">#10888</a></li></ul><p><strong>Feature</strong></p><ul><li>ConfigProvider: 新增 theme-vars-dark 和 theme-vars-light 属性 <a href="https://github.com/vant-ui/vant/issues/10939" target="_blank">#10939</a></li><li>Picker: 新增 clickOption 事件 <a href="https://github.com/vant-ui/vant/issues/10865" target="_blank">#10865</a></li><li>为 scroll 事件添加了正确的 passive 标记来提升滚动性能 <a href="https://github.com/vant-ui/vant/issues/10951" target="_blank">#10951</a></li><li>@vant/use: 优化 useEventListener 类型定义 <a href="https://github.com/vant-ui/vant/issues/10952" target="_blank">#10952</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>ConfigProvider: 修复销毁时没有回收全局样式类的问题 <a href="https://github.com/vant-ui/vant/issues/10898" target="_blank">#10898</a></li><li>修复 touchstart 导致控制台出现 passive event warning 的问题 <a href="https://github.com/vant-ui/vant/issues/10954" target="_blank">#10954</a></li><li>Tabs: 修复开启 swipeable 时，resize 方法无法正确生效的问题 <a href="https://github.com/vant-ui/vant/issues/10964" target="_blank">#10964</a></li><li>修复在 WebStorm 下标签无法自动补全的问题 <a href="https://github.com/vant-ui/vant/issues/10946" target="_blank">#10946</a></li><li>Badge: 修复使用 show-zero 时字符串 <code>&#39;0&#39;</code> 不生效的问题 <a href="https://github.com/vant-ui/vant/issues/10921" target="_blank">#10921</a></li><li>Calendar: 修复关闭弹窗过程中内容白屏的问题 <a href="https://github.com/vant-ui/vant/issues/10910" target="_blank">#10910</a></li><li>Calendar: 修复控制台出现读取 getFullYear 异常的问题 <a href="https://github.com/vant-ui/vant/issues/10909" target="_blank">#10909</a></li><li>Empty: 修复在 Tab 下嵌套使用时渲染异常的问题 <a href="https://github.com/vant-ui/vant/issues/10943" target="_blank">#10943</a></li><li>Popover: 修复在 Popup 下嵌套使用时无法滚动的问题 <a href="https://github.com/vant-ui/vant/issues/10949" target="_blank">#10949</a></li><li>PullRefresh: 修复 Chrome 控制台出现 passive event warning 的问题 <a href="https://github.com/vant-ui/vant/issues/10938" target="_blank">#10938</a></li><li>Search: 修复 --van-search-input-height 样式变量不生效的问题 <a href="https://github.com/vant-ui/vant/issues/10911" target="_blank">#10911</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-beta.0" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v3.5.2...v4.0.0-beta.0" target="_blank">v4.0.0-beta.0</a></h3><p><code>2022-07-16</code></p><p><strong>Breaking Changes</strong></p><ul><li>Toast: 重新设计函数调用 API <a href="https://github.com/vant-ui/vant/issues/10804" target="_blank">#10804</a></li><li>Dialog: 重新设计函数调用 API <a href="https://github.com/vant-ui/vant/issues/10781" target="_blank">#10781</a></li><li>Notify: 重新设计函数调用 API<a href="https://github.com/vant-ui/vant/issues/10782" target="_blank">#10782</a></li><li>ImagePreview: 重新设计函数调用 API <a href="https://github.com/vant-ui/vant/issues/10802" target="_blank">#10802</a></li></ul><p>关于以上改动的详细描述和迁移方法，请参考 <a href="/vant/v4/#/zh-CN/migrate-from-v3" target="_blank">从 v3 升级到 v4</a> 的 「API 调整」部分。</p><p><strong>Feature</strong></p><ul><li>新增 @vant/compat 包，用于辅助代码迁移 <a href="https://github.com/vant-ui/vant/issues/10806" target="_blank">#10806</a></li><li>Calendar: 新增 getSelectedDate 方法 <a href="https://github.com/vant-ui/vant/commit/419a8e4f0e6454b9aac30d5800318deabec099cb" target="_blank">419a8e</a></li><li>由于主题定制方式调整，发布到 npm 的代码中将不再包含 .less 样式源文件，从而减少 npm 包体积 <a href="https://github.com/vant-ui/vant/issues/10752" target="_blank">#10752</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Uploader: 修复预览图片时会展示上传失败的图片的问题 <a href="https://github.com/vant-ui/vant/issues/10790" target="_blank">#10790</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-alpha.4" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v3.5.0-beta.0...v4.0.0-alpha.4" target="_blank">v4.0.0-alpha.4</a></h3><p><code>2022-05-31</code></p><p><strong>Feature</strong></p><ul><li>适配 nuxt 3，现在 dist 目录下所有 esmodule 文件将使用 <code>.mjs</code> 文件后缀 <a href="https://github.com/vant-ui/vant/issues/10625" target="_blank">#10625</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-alpha.3" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v3.4.9...v4.0.0-alpha.3" target="_blank">v4.0.0-alpha.3</a></h3><p><code>2022-05-02</code></p><p><strong>Feature</strong></p><ul><li>Form: 支持同时设置多个 validate-trigger 值 <a href="https://github.com/vant-ui/vant/issues/10544" target="_blank">#10544</a></li><li>Empty: 支持在无网络的环境下离线使用，图片从 CDN 调整为内联的 SVG 图片 <a href="https://github.com/vant-ui/vant/issues/10514" target="_blank">#10514</a> <a href="https://github.com/vant-ui/vant/issues/10515" target="_blank">#10515</a> <a href="https://github.com/vant-ui/vant/issues/10516" target="_blank">#10516</a></li><li>Loading: 优化无障碍访问 <a href="https://github.com/vant-ui/vant/issues/10568" target="_blank">#10568</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Search: 修复暗色模式下样式错误的问题 <a href="https://github.com/vant-ui/vant/issues/10527" target="_blank">#10527</a></li><li>@vant/area-data: 修复发布到 npm 时包含 tsconfig.json 文件导致编译错误的问题 <a href="https://github.com/vant-ui/vant/commit/f927f6a7518cf7d08ec8abc5dd35019685c19e3a" target="_blank">f927f6</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-alpha.2" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v3.4.8...v4.0.0-alpha.2" target="_blank">v4.0.0-alpha.2</a></h3><p><code>2022-04-16</code></p><p><strong>Feature</strong></p><ul><li>CalendarDay: 增加日期行间距 <a href="https://github.com/vant-ui/vant/issues/10441" target="_blank">#10441</a></li><li>Empty: 支持单独设置 image 的宽高 <a href="https://github.com/vant-ui/vant/issues/10465" target="_blank">#10465</a></li><li>Field: 新增 enterkeyhint 属性 <a href="https://github.com/vant-ui/vant/issues/10478" target="_blank">#10478</a></li><li>Form: 新增 getValues 方法 <a href="https://github.com/vant-ui/vant/issues/10511" target="_blank">#10511</a></li><li>Icon: 新增 qq、weibo 等图标 <a href="https://github.com/vant-ui/vant/issues/10468" target="_blank">#10468</a></li><li>Locale: 新增 Danish 丹麦语 <a href="https://github.com/vant-ui/vant/issues/10513" target="_blank">#10513</a></li><li>ShareSheet: 不再依赖 CDN 上的图片资源，使用 iconfont 代替 <a href="https://github.com/vant-ui/vant/issues/10469" target="_blank">#10469</a></li><li>web-types.json 文件增加 event arguments 信息 <a href="https://github.com/vant-ui/vant/issues/10474" target="_blank">#10474</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>DatetimePicker: 修复 modeValue 与选中的数据不一致的问题 <a href="https://github.com/vant-ui/vant/issues/10448" target="_blank">#10448</a></li><li>Rate: 修复多行时滑动选中不正确的问题 <a href="https://github.com/vant-ui/vant/issues/10500" target="_blank">#10500</a></li></ul></div><div class="van-doc-card"><h3 id="v4.0.0-alpha.1" tabindex="-1"><a href="https://github.com/vant-ui/vant/compare/v3.4.6...v4.0.0-alpha.1" target="_blank">v4.0.0-alpha.1</a></h3><p><code>2022-03-19</code></p><p><strong>Feature</strong></p><ul><li>@vant/area-data: 新增南京市江北新区 <a href="https://github.com/vant-ui/vant/issues/10410" target="_blank">#10410</a></li><li>Locale: 新增老挝语 <a href="https://github.com/vant-ui/vant/issues/10388" target="_blank">#10388</a></li></ul><p><strong>Bug Fixes</strong></p><ul><li>Calendar: 修复暗色模式下标题颜色 <a href="https://github.com/vant-ui/vant/issues/10403" target="_blank">#10403</a></li><li>Picker: 修复暗色模式下标题颜色 <a href="https://github.com/vant-ui/vant/issues/10403" target="_blank">#10403</a></li><li>ConfigProvider: 修复默认设置暗色模式不生效的问题 <a href="https://github.com/vant-ui/vant/issues/10413" target="_blank">#10413</a></li><li>DatePicker: 修复更新 v-model 不生效的问题 <a href="https://github.com/vant-ui/vant/issues/10415" target="_blank">#10415</a></li><li>Dialog: 修复暗色模式下标题和文本颜色 <a href="https://github.com/vant-ui/vant/issues/10379" target="_blank">#10379</a></li><li>IndexBar: 修复底部索引无法高亮的问题 <a href="https://github.com/vant-ui/vant/issues/10404" target="_blank">#10404</a></li></ul></div><div class="van-doc-card"><h3 id="4.0.0-alpha.0" tabindex="-1">4.0.0-alpha.0</h3><p><code>2022-02-21</code></p><p><strong>不兼容更新</strong></p><p>参见 <a href="#/zh-CN/migrate-from-v3" target="_blank">从 v3 升级到 v4</a>。</p><p><strong>Feature</strong></p><ul><li>ConfigProvider: 新增 <code>theme</code> 属性，用于开启深色模式</li><li>ConfigProvider: 新增 <code>ConfigProviderTheme</code> 类型</li></ul><p><strong>Style</strong></p><p>在之前的版本中，Vant 组件有两种色彩风格，一部分采用红色作为主色调，另一部分采用蓝色。为了保持色彩规范的统一，我们在 Vant 4 中对组件的主色调进行了统一，所有组件均采用蓝色作为主色调。</p><p>以下组件的默认色值风格由红色调整为蓝色：</p><ul><li>AddressEdit</li><li>AddressList</li><li>Card</li><li>Calendar</li><li>Cascader</li><li>ContactList</li><li>ContactEdit</li><li>CouponList</li><li>Dialog</li><li>DropdownMenu</li><li>IndexBar</li><li>Sidebar</li><li>Steps</li><li>Tabs</li><li>TreeSelect</li></ul><p>其他：</p><ul><li><code>--van-font-bold</code> 的默认值由 <code>500</code> 调整为 <code>600</code></li><li>ActionBar: 调整 <code>--van-action-bar-icon-text-color</code> 变量的默认值为 <code>--van-text-color</code></li><li>AddressList: 重命名 <code>--van-address-list-item-radio-icon-color</code> 为 <code>--van-address-list-radio-color</code></li><li>Button: 默认圆角大小从 <code>2px</code> 调整为 <code>4px</code></li><li>Button: 默认按钮的边框颜色调整为 <code>--van-gray-4</code></li><li>Button: 调整 <code>font-smoothing</code>，默认使用粗体文字</li><li>Cell: 只设置 <code>value</code> 时，内容不再会靠左对齐</li><li>Card: 调整 <code>--van-card-background</code> 变量的默认值为 <code>--van-background</code></li><li>Card: 调整 <code>--van-card-price-color</code> 变量的默认值为 <code>--van-text-color</code></li><li>Card: 调整 <code>--van-card-desc-color</code> 变量的默认值为 <code>--van-text-color-2</code></li><li>ContactList: 重命名 <code>--van-contact-list-item-radio-icon-color</code> 为 <code>--van-contact-list-radio-color</code></li><li>CouponList: 重命名 <code>--van-coupon-corner-checkbox-icon-color</code> 为 <code>--van-coupon-checkbox-color</code></li><li>Field: 调整 <code>--van-field-label-color</code> 变量的默认值为 <code>--van-text-color</code></li><li>Switch: 移除 <code>--van-switch-border</code> 变量</li><li>Switch: 调整 <code>--van-switch-size</code> 变量的默认值为 <code>26px</code></li><li>Switch: 调整 <code>--van-switch-background</code> 变量的默认值为 <code>rgba(120, 120, 128, 0.16)</code></li><li>Tabbar: 调整 <code>--van-tabbar-item-text-color</code> 变量的默认值为 <code>--van-text-color</code></li><li>GridItem: 调整 <code>--van-grid-item-text-color</code> 变量的默认值为 <code>--van-text-color</code></li></ul></div>`,36),l=[n],c={__name:"changelog.zh-CN",setup(r,{expose:t}){return t({frontmatter:{}}),(u,h)=>(a(),i("div",s,l))}};export{c as default};
