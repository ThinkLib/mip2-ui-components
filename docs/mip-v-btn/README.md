# mip-v-btn

`v-btn`组件用一个material design主题和多个选项来替换标准的html按钮。任何色彩辅助类都可以用来改变背景或文字的颜色。

## 用例

```html
<div class="container">
  <mip-v-btn color="success">Success</mip-v-btn>
  <mip-v-btn color="error">Error</mip-v-btn>
  <mip-v-btn color="warning">Warning</mip-v-btn>
  <mip-v-btn color="info">Info</mip-v-btn>
</div>
```

## API

### mip-v-btn

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
activeClass|string|undefined|当组件处于激活状态时被绑定的类，**警告（warning）**取决于组件，这可能会导致副作用。如果您需要在默认情况下添加自定义类，只需设置<code>active-class="default-class your-class"</code>
block|boolean|undefined|
depressed|boolean|undefined|
fab|boolean|undefined|
flat|boolean|undefined|
icon|boolean|undefined|
large|boolean|undefined|
loading|boolean|undefined|
outline|boolean|undefined|
ripple|boolean / any|undefined|使用`v-ripple`指令
round|boolean|undefined|
small|boolean|undefined|
tag|string|undefined|指定要在组件上使用的自定义标签
type|string|button|
value|any|undefined|控制可见性
color|string|undefined|将指定的色彩应用与控件
append|boolean|undefined|Vue Router的router-link属性
disabled|boolean|undefined|Route列表项是被禁用的
exact|boolean|undefined|完全匹配链接，没有这个的话，“/”将匹配每一个路由
exactActiveClass|string|undefined|Vue Router的 router-link属性
href|string / any|undefined|将组件标签指定为`<a>`
to|string / any|undefined|将组件标签指定为`<router-link>`
nuxt|boolean|undefined|指定一个链接是nuxt链接（nuxt-link）
replace|boolean|undefined|Vue Router router-link 属性
target|string|undefined|指定目标属性，仅适用于猫标签。
absolute|boolean|undefined|给元素设置绝对定位
bottom|boolean|undefined|将组件向底部对齐
fixed|boolean|undefined|给元素设置固定定位
left|boolean|undefined|将组件向左边对齐
right|boolean|undefined|将组件向右边对齐
top|boolean|undefined|将组件向顶部对齐
dark|boolean|undefined|应用暗黑主题变体
light|boolean|undefined|应用明亮主题变体
inputValue|boolean|undefined|

### mip-v-btn-toggle

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
inputValue|any|undefined|
mandatory|boolean|undefined|
multiple|boolean|undefined|
dark|boolean|undefined|应用暗黑主题变体
light|boolean|undefined|应用明亮主题变体

## 示例

### 扁平

```html
<div class="container">
  <mip-v-btn flat="" small="">Normal</mip-v-btn>
  <mip-v-btn flat="" small="" color="primary">Primary</mip-v-btn>
  <mip-v-btn flat="" small="" color="error">Error</mip-v-btn>
  <mip-v-btn flat="" small="" disabled>Disabled</mip-v-btn>
</div>
<div class="container">
  <mip-v-btn flat="">Normal</mip-v-btn>
  <mip-v-btn flat="" color="primary">Primary</mip-v-btn>
  <mip-v-btn flat="" color="error">Error</mip-v-btn>
  <mip-v-btn flat="" disabled>Disabled</mip-v-btn>
</div>
<div class="container">
  <mip-v-btn flat="" large="">Normal</mip-v-btn>
  <mip-v-btn flat="" large="" color="primary">Primary</mip-v-btn>
  <mip-v-btn flat="" large="" color="error">Error</mip-v-btn>
  <mip-v-btn flat="" large="" disabled>Disabled</mip-v-btn>
</div>
```

### 凸起

```html
<div class="container">
  <mip-v-btn small="">Normal</mip-v-btn>
  <mip-v-btn small="" color="primary">Primary</mip-v-btn>
  <mip-v-btn small="" color="error">Error</mip-v-btn>
  <mip-v-btn small="" disabled>Disabled</mip-v-btn>
</div>
<div class="container">
  <mip-v-btn>Normal</mip-v-btn>
  <mip-v-btn color="primary">Primary</mip-v-btn>
  <mip-v-btn color="error">Error</mip-v-btn>
  <mip-v-btn disabled>Disabled</mip-v-btn>
</div>
<div class="container">
  <mip-v-btn large="">Normal</mip-v-btn>
  <mip-v-btn large="" color="primary">Primary</mip-v-btn>
  <mip-v-btn large="" color="error">Error</mip-v-btn>
  <mip-v-btn large="" disabled>Disabled</mip-v-btn>
</div>
```

### 凹陷

```html
<div class="container">
  <mip-v-btn depressed="" small="">Normal</mip-v-btn>
  <mip-v-btn depressed="" small="" color="primary">Primary</mip-v-btn>
  <mip-v-btn depressed="" small="" color="error">Error</mip-v-btn>
  <mip-v-btn depressed="" small="" disabled>Disabled</mip-v-btn>
</div>
<div class="container">
  <mip-v-btn depressed="">Normal</mip-v-btn>
  <mip-v-btn depressed="" color="primary">Primary</mip-v-btn>
  <mip-v-btn depressed="" color="error">Error</mip-v-btn>
  <mip-v-btn depressed="" disabled>Disabled</mip-v-btn>
</div>
<div class="container">
  <mip-v-btn depressed="" large="">Normal</mip-v-btn>
  <mip-v-btn depressed="" large="" color="primary">Primary</mip-v-btn>
  <mip-v-btn depressed="" large="" color="error">Error</mip-v-btn>
  <mip-v-btn depressed="" large="" disabled>Disabled</mip-v-btn>
</div>
```

### 按钮切换

```html
<h4>Exclusive</h4>
<mip-v-btn-toggle m-bind:input-value.sync="toggle_exclusive">
  <mip-v-btn flat="">
    <mip-v-icon>format_align_left</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_center</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_right</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_justify</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>Multiple</h4>
<mip-v-btn-toggle m-bind:input-value.sync="toggle_multiple" multiple>
  <mip-v-btn flat="">
    <mip-v-icon>format_bold</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_italic</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_underlined</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_color_fill</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>No Options Selected</h4>
<mip-v-btn-toggle m-bind:input-value.sync="toggle_none">
  <mip-v-btn flat="">
    <mip-v-icon>format_align_left</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_center</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_right</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_justify</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>Mandatory</h4>
<mip-v-btn-toggle m-bind:input-value.sync="toggle_one" mandatory="">
  <mip-v-btn flat="">
    <mip-v-icon>format_align_left</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_center</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_right</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="">
    <mip-v-icon>format_align_justify</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>Text Options</h4>
<mip-v-btn-toggle m-bind:input-value.sync="text">
  <mip-v-btn flat="" value="left">
    Left
  </mip-v-btn>
  <mip-v-btn flat="" value="center">
    Center
  </mip-v-btn>
  <mip-v-btn flat="" value="right">
    Right
  </mip-v-btn>
  <mip-v-btn flat="" value="justify">
    Justify
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>Text &amp; Icon Options</h4>
<mip-v-btn-toggle m-bind:input-value.sync="icon">
  <mip-v-btn flat="" value="left">
    <mip-v-icon>format_align_left</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="" value="center">
    <mip-v-icon>format_align_center</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="" value="right">
    <mip-v-icon>format_align_right</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="" value="justify">
    <mip-v-icon>format_align_justify</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
```

### 图标

```html
<h4>Normal</h4>
<div class="container">
  <mip-v-btn flat="" icon="" color="pink">
    <mip-v-icon>favorite</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="" icon="" color="indigo">
    <mip-v-icon>star</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="" icon="" color="green">
    <mip-v-icon>cached</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat="" icon="" color="deep-orange">
    <mip-v-icon>thumb_up</mip-v-icon>
  </mip-v-btn>
</div>
<h4>Disabled</h4>
<div class="container">
  <mip-v-btn icon="" disabled>
    <mip-v-icon>favorite</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn icon="" disabled>
    <mip-v-icon>star</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn icon="" disabled>
    <mip-v-icon>cached</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn icon="" disabled>
    <mip-v-icon>thumb_up</mip-v-icon>
  </mip-v-btn>
</div>
```

### 浮动

```html
<div class="container">
  <mip-v-btn fab="" dark="" small="" color="primary">
    <mip-v-icon dark="">remove</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab="" dark="" small="" color="pink">
    <mip-v-icon dark="">favorite</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab="" dark="" color="indigo">
    <mip-v-icon dark="">add</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab="" dark="" color="teal">
    <mip-v-icon dark="">list</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab="" dark="" large="" color="cyan">
    <mip-v-icon dark="">edit</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab="" dark="" large="" color="purple">
    <mip-v-icon dark="">android</mip-v-icon>
  </mip-v-btn>
</div>
```

### 大小

```html
<div class="container">
  <mip-v-btn small="" color="primary" dark="">Small Button</mip-v-btn>
  <mip-v-btn color="warning" dark="">Normal Button</mip-v-btn>
  <mip-v-btn color="error" dark="" large="">Large Button</mip-v-btn>
</div>
<div class="container">
  <mip-v-btn color="primary" fab="" small="" dark="">
    <mip-v-icon>edit</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn color="warning" fab="" dark="">
    <mip-v-icon>account_circle</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn color="error" fab="" large="" dark="">
    <mip-v-icon>alarm</mip-v-icon>
  </mip-v-btn>
</div>
```

### 轮廓

```html
<div class="container">
  <mip-v-btn outline="" color="indigo">Outline Button</mip-v-btn>
  <mip-v-btn outline="" fab="" color="teal">
    <mip-v-icon>list</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn outline="" large="" fab="" color="indigo">
    <mip-v-icon>edit</mip-v-icon>
  </mip-v-btn>
</div>
```

### 圆角

```html
<mip-v-btn round="" color="primary" dark="">Rounded Button</mip-v-btn>
```

### 块状

```html
<mip-v-btn block="" color="secondary" dark="">Block Button</mip-v-btn>
```

### In toolbar

```html
<mip-v-toolbar dense="">
  <mip-v-overflow-btn m-bind:items="dropdown_font" label="Select font" hide-details=""></mip-v-overflow-btn>
  <mip-v-divider vertical=""></mip-v-divider>
  <mip-v-overflow-btn m-bind:items="dropdown_edit" editable="" label="Select size" hide-details="" overflow=""></mip-v-overflow-btn>
  <mip-v-divider class="mr-2" vertical=""></mip-v-divider>
  <mip-v-btn-toggle m-bind:input-value.sync="toggle_multiple" class="transparent" multiple>
    <mip-v-btn flat="">
      <mip-v-icon>format_bold</mip-v-icon>
    </mip-v-btn>
    <mip-v-btn flat="">
      <mip-v-icon>format_italic</mip-v-icon>
    </mip-v-btn>
    <mip-v-btn flat="">
      <mip-v-icon>format_underlined</mip-v-icon>
    </mip-v-btn>
    <mip-v-btn flat="">
      <mip-v-icon>format_color_fill</mip-v-icon>
    </mip-v-btn>
  </mip-v-btn-toggle>
  <mip-v-divider class="mx-2" vertical=""></mip-v-divider>
  <mip-v-btn-toggle m-bind:input-value.sync="toggle_exclusive" class="transparent">
    <mip-v-btn flat="" value="left">
      <mip-v-icon>format_align_left</mip-v-icon>
    </mip-v-btn>
    <mip-v-btn flat="" value="center">
      <mip-v-icon>format_align_center</mip-v-icon>
    </mip-v-btn>
    <mip-v-btn flat="" value="right">
      <mip-v-icon>format_align_right</mip-v-icon>
    </mip-v-btn>
    <mip-v-btn flat="" value="justify">
      <mip-v-icon>format_align_justify</mip-v-icon>
    </mip-v-btn>
  </mip-v-btn-toggle>
</mip-v-toolbar>
```