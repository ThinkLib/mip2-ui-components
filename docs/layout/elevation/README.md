# elevation

海拔辅助器允许您控制沿着**z-轴**的两个曲面之间的相对深度或距离。共有25个海拔层级，您可以使用类`elevation-{n}`去设置一个元素的海拔，其中的n是一个对应海拔层级所用到的介于0-24的整数。

## 用例

相对深度或距离。共有 25 个层级，例如 elevation-0 elevation-1 elevation-24

```html
<div class="container grid-list-md text-xs-center">
  <div class="layout row wrap">
    <div class="flex xs4">
      <div class="v-card elevation-0">
        <div class="v-card__text px-0">0</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-1">
        <div class="v-card__text px-0">1</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-2">
        <div class="v-card__text px-0">2</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-3">
        <div class="v-card__text px-0">3</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-4">
        <div class="v-card__text px-0">4</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-5">
        <div class="v-card__text px-0">5</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-6">
        <div class="v-card__text px-0">6</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-7">
        <div class="v-card__text px-0">7</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-8">
        <div class="v-card__text px-0">8</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-9">
        <div class="v-card__text px-0">9</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-10">
        <div class="v-card__text px-0">10</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card elevation-11">
        <div class="v-card__text px-0">11</div>
      </div>
    </div>
  </div>
</div>
```

