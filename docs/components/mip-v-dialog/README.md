# mip-v-dialog

`mip-v-dialog` 组件用来通知用户有关特定任务的信息，并且可能包含重要信息，需要作出决定或者涉及多任务；应谨慎使用对话框，因为它是中断的。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "dialog": false
    }
  </script>
</mip-data>
<div class="layout row justify-center">
  <mip-v-dialog
    m-bind:value.sync="dialog"
    max-width="500"
  >
    <mip-v-btn
      slot="activator"
      color="red lighten-2"
      dark
    >
      Click Me
    </mip-v-btn>
    <mip-v-card>
      <mip-v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Privacy Policy
      </mip-v-card-title>
      <mip-v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </mip-v-card-text>
      <mip-v-divider></mip-v-divider>
      <mip-v-card-actions>
        <div class="spacer"></div>
        <mip-v-btn
          color="primary"
          flat
          on="tap:MIP.setData({ dialog: false })"
        >
          I accept
        </mip-v-btn>
      </mip-v-card-actions>
    </mip-v-card>
  </mip-v-dialog>
</div>
```

## API

### mip-v-dialog

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
attach|any|/|指定该组件应该分离到哪个DOM元素，使用CSS选择器字符串或元素的对象应用。
content-class|any|''|将自定义类应用于分离的元素。这是很有用的，因为内容被移动到应用程序的末尾，而不是直接通过组件传递给类。
disabled|boolean|/|禁用打开对话框
full-width|boolean|/|指定模态框强制100%宽度
fullscreen|boolean|/|改变布局全屏显示
hide-overlay|boolean|/|隐藏遮罩
lazy|boolean|/|有条件地渲染内容，只有激活时才会渲染内容
max-width|string / number|'none'|内容的最大宽度
no-click-animation|boolean|/|当使用 **persistent** 属性时，点击 `mip-v-dialog` 内容之外会禁止弹跳效果
origin|string|'center center'|设置过渡原点
persistent|boolean|/|点击对话框外部不能使其关闭
return-value|any|/|
scrollable|boolean|/|设为 true 的时候，内部应该包含card, card-title, card-text 以及 card-actions；另外 card-text 应该指定高度并且设置 overflow-y
transition|string / boolean|'dialog-transition'|设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。
value|boolean|/|控制可见性
width|string / number|'auto'|设置对话框的宽度

## 示例

### 模态框

```html
<mip-data>
  <script type="application/json">
    {
      "dialog": false
    }
  </script>
</mip-data>
<div class="layout row justify-center">
  <mip-v-dialog
    m-bind:value.sync="dialog"
    persistent
    max-width="290"
  >
    <mip-v-btn
      slot="activator"
      color="primary"
      dark
    >
      Open Dialog
    </mip-v-btn>
    <mip-v-card>
      <mip-v-card-title class="headline">Use Google's location service?</mip-v-card-title>
      <mip-v-card-text>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </mip-v-card-text>
      <mip-v-card-actions>
        <div class="spacer"></div>
        <mip-v-btn
          color="green darken-1"
          flat
          on="tap:MIP.setData({ dialog: false })"
        >
          Disagree
        </mip-v-btn>
        <mip-v-btn
          color="green darken-1"
          flat
          on="tap:MIP.setData({ dialog: false })"
        >
          Agree
        </mip-v-btn>
      </mip-v-card-actions>
    </mip-v-card>
  </mip-v-dialog>
</div>
```

### 全屏对话框

```html
<mip-data>
  <script type="application/json">
    {
      "dialog": false,
      "notifications": false,
      "sound": true,
      "widgets": false
    }
  </script>
</mip-data>
<div class="layout row justify-center">
  <mip-v-dialog
    m-bind:value.sync="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <mip-v-btn
      slot="activator"
      color="primary"
      dark
    >
      Open Dialog
    </mip-v-btn>
    <div class="v-card">
      <mip-v-toolbar
        dark
        color="primary"
      >
        <mip-v-btn
          icon
          dark
          on="tap:MIP.setData({ dialog: false })"
        >
          <mip-v-icon>close</mip-v-icon>
        </mip-v-btn>
        <mip-v-toolbar-title>Settings</mip-v-toolbar-title>
        <mip-v-spacer></mip-v-spacer>
        <mip-v-toolbar-items>
          <mip-v-btn
            dark
            flat
            on="tap:MIP.setData({ dialog: false })"
          >
            Save
          </mip-v-btn>
        </mip-v-toolbar-items>
      </mip-v-toolbar>
      <mip-v-list
        three-line
        subheader
      >
        <mip-v-subheader>User Controls</mip-v-subheader>
        <mip-v-list-tile avatar>
          <mip-v-list-tile-content>
            <mip-v-list-tile-title>Content filtering</mip-v-list-tile-title>
            <mip-v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</mip-v-list-tile-sub-title>
          </mip-v-list-tile-content>
        </mip-v-list-tile>
        <mip-v-list-tile avatar>
          <mip-v-list-tile-content>
            <mip-v-list-tile-title>Password</mip-v-list-tile-title>
            <mip-v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</mip-v-list-tile-sub-title>
          </mip-v-list-tile-content>
        </mip-v-list-tile>
      </mip-v-list>
      <mip-v-divider></mip-v-divider>
      <mip-v-list
        three-line
        subheader
      >
        <mip-v-subheader>General</mip-v-subheader>
        <mip-v-list-tile avatar>
          <mip-v-list-tile-action>
            <mip-v-checkbox m-bind:input-value.sync="notifications"></mip-v-checkbox>
          </mip-v-list-tile-action>
          <mip-v-list-tile-content>
            <mip-v-list-tile-title>Notifications</mip-v-list-tile-title>
            <mip-v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</mip-v-list-tile-sub-title>
          </mip-v-list-tile-content>
        </mip-v-list-tile>
        <mip-v-list-tile avatar>
          <mip-v-list-tile-action>
            <mip-v-checkbox m-bind:input-value.sync="sound"></mip-v-checkbox>
          </mip-v-list-tile-action>
          <mip-v-list-tile-content>
            <mip-v-list-tile-title>Sound</mip-v-list-tile-title>
            <mip-v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</mip-v-list-tile-sub-title>
          </mip-v-list-tile-content>
        </mip-v-list-tile>
        <mip-v-list-tile avatar>
          <mip-v-list-tile-action>
            <mip-v-checkbox m-bind:input-value.sync="widgets"></mip-v-checkbox>
          </mip-v-list-tile-action>
          <mip-v-list-tile-content>
            <mip-v-list-tile-title>Auto-add widgets</mip-v-list-tile-title>
            <mip-v-list-tile-sub-title>Automatically add home screen widgets</mip-v-list-tile-sub-title>
          </mip-v-list-tile-content>
        </mip-v-list-tile>
      </mip-v-list>
    </div>
  </mip-v-dialog>
</div>
```

### 表单对话框

```html
<mip-data>
  <script type="application/json">
    {
      "dialog": false
    }
  </script>
</mip-data>
<div class="layout row justify-center">
  <mip-v-dialog
    m-bind:value.sync="dialog"
    persistent
    max-width="500px"
  >
    <mip-v-btn
      slot="activator"
      color="primary"
      dark
    >
      Open Dialog
    </mip-v-btn>
    <mip-v-card>
      <mip-v-card-title>
        <span class="headline">User Profile</span>
      </mip-v-card-title>
      <mip-v-card-text>
        <div class="container grid-list-md">
          <div class="layout wrap">
            <div class="flex xs12 sm6 md4">
              <mip-v-text-field
                label="Legal first name"
                required
              ></mip-v-text-field>
            </div>
            <div class="flex xs12 sm6 md4">
              <mip-v-text-field
                label="Legal middle name"
                hint="example of helper text only on focus"
              ></mip-v-text-field>
            </div>
            <div class="flex xs12 sm6 md4">
              <mip-v-text-field
                label="Legal last name"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></mip-v-text-field>
            </div>
            <div class="flex xs12">
              <mip-v-text-field
                label="Email"
                required
              ></mip-v-text-field>
            </div>
            <div class="flex xs12">
              <mip-v-text-field
                label="Password"
                type="password"
                required
              ></mip-v-text-field>
            </div>
            <div class="flex xs12 sm6">
              <mip-v-select
                label="Age"
                required
              >
                <script type="application/json">
                  {
                    "items": ["0-17", "18-29", "30-54", "54+"]
                  }
                </script>
              </mip-v-select>
            </div>
            <div class="flex xs12 sm6">
              <mip-v-autocomplete
                label="Interests"
                multiple
                chips
              >
                <script type="application/json">
                  {
                    "items": ["Skiing", "Ice hockey", "Soccer", "Basketball", "Hockey", "Reading", "Writing", "Coding", "Basejump"]
                  }
                </script>
              </mip-v-autocomplete>
            </div>
          </div>
        </div>
        <small>*indicates required field</small>
      </mip-v-card-text>
      <mip-v-card-actions>
        <mip-v-spacer></mip-v-spacer>
        <mip-v-btn
          color="blue darken-1"
          flat
          on="tap:MIP.setData({ dialog: false })"
        >
          Close
        </mip-v-btn>
        <mip-v-btn
          color="blue darken-1"
          flat
          on="tap:MIP.setData({ dialog: false })"
        >
          Save
        </mip-v-btn>
      </mip-v-card-actions>
    </mip-v-card>
  </mip-v-dialog>
</div>
```

### 可滚动

```html
<mip-data>
  <script type="application/json">
    {
      "dialog": false,
      "country": ""
    }
  </script>
</mip-data>
<div class="layout row justify-center">
  <mip-v-dialog
    m-bind:value.sync="dialog"
    scrollable
    max-width="300px"
  >
    <mip-v-btn
      slot="activator"
      color="primary"
      dark
    >
      Open Dialog
    </mip-v-btn>
    <div class="v-card">
      <div class="v-card__title">Select Country</div>
      <mip-v-divider></mip-v-divider>
      <div
        class="v-card__text"
        style="height: 300px;"
      >
        <mip-v-radio-group
          m-bind:value.sync="country"
          column
        >
          <mip-v-radio
            label="Bahamas"
            value="bahamas"
          ></mip-v-radio>
          <mip-v-radio
            label="Bahrain"
            value="bahrain"
          ></mip-v-radio>
          <mip-v-radio
            label="Bangladesh"
            value="bangladesh"
          ></mip-v-radio>
          <mip-v-radio
            label="Barbados"
            value="barbados"
          ></mip-v-radio>
          <mip-v-radio
            label="Belarus"
            value="belarus"
          ></mip-v-radio>
          <mip-v-radio
            label="Belgium"
            value="belgium"
          ></mip-v-radio>
          <mip-v-radio
            label="Belize"
            value="belize"
          ></mip-v-radio>
          <mip-v-radio
            label="Benin"
            value="benin"
          ></mip-v-radio>
          <mip-v-radio
            label="Bhutan"
            value="bhutan"
          ></mip-v-radio>
          <mip-v-radio
            label="Bolivia"
            value="bolivia"
          ></mip-v-radio>
          <mip-v-radio
            label="Bosnia and Herzegovina"
            value="bosnia"
          ></mip-v-radio>
          <mip-v-radio
            label="Botswana"
            value="botswana"
          ></mip-v-radio>
          <mip-v-radio
            label="Brazil"
            value="brazil"
          ></mip-v-radio>
          <mip-v-radio
            label="Brunei"
            value="brunei"
          ></mip-v-radio>
          <mip-v-radio
            label="Bulgaria"
            value="bulgaria"
          ></mip-v-radio>
          <mip-v-radio
            label="Burkina Faso"
            value="burkina"
          ></mip-v-radio>
          <mip-v-radio
            label="Burma"
            value="burma"
          ></mip-v-radio>
          <mip-v-radio
            label="Burundi"
            value="burundi"
          ></mip-v-radio>
        </mip-v-radio-group>
      </div>
      <mip-v-divider></mip-v-divider>
      <div class="v-card__actions">
        <mip-v-btn
          color="blue darken-1"
          flat
          on="tap:MIP.setData({ dialog: false })"
        >
          Close
        </mip-v-btn>
        <mip-v-btn
          color="blue darken-1"
          flat
          on="tap:MIP.setData({ dialog: false })"
        >
          Save
        </mip-v-btn>
      </div>
    </div>
  </mip-v-dialog>
</div>
```

### 溢出

```html
<mip-data>
  <script type="application/json">
    {
      "dialog": false
    }
  </script>
</mip-data>
<div class="layout row justify-center">
  <mip-v-dialog
    m-bind:value.sync="dialog"
    max-width="600px"
  >
    <mip-v-btn
      slot="activator"
      color="primary"
      dark
    >
      Open Dialog
    </mip-v-btn>
    <mip-v-card>
      <mip-v-card-title>
        <span class="headline">Use Google's location service?</span>
      </mip-v-card-title>
      <mip-v-card-text>Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
      Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
      Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
      Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
      Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
      Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
      Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
      Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
      Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
      Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
      </mip-v-card-text>
      <mip-v-card-actions>
        <mip-v-spacer></mip-v-spacer>
        <mip-v-btn
          color="green darken-1"
          flat="flat"
          on="tap:MIP.setData({ dialog: false })"
        >
          Disagree
        </mip-v-btn>
        <mip-v-btn
          color="green darken-1"
          flat="flat"
          on="tap:MIP.setData({ dialog: false })"
        >
          Agree
        </mip-v-btn>
      </mip-v-card-actions>
    </mip-v-card>
  </mip-v-dialog>
</div>
```

### 加载器

```html
<mip-data>
  <script type="application/json">
    {
      "dialog": false
    }
  </script>
</mip-data>
<div class="layout row justify-center">
  <mip-v-dialog
    m-bind:value.sync="dialog"
    hide-overlay
    persistent
    max-width="300"
  >
    <mip-v-btn
      slot="activator"
      m-bind:disabled="dialog"
      m-bind:loading="dialog"
      class="white--text"
      color="purple darken-2"
      on="tap:MIP.setData({ dialog: true })"
    >
      Start loading
    </mip-v-btn>
    <mip-v-card
      color="primary"
      dark
    >
      <mip-v-card-text>
        Please stand by
        <mip-v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></mip-v-progress-linear>
      </mip-v-card-text>
    </mip-v-card>
  </mip-v-dialog>
</div>
<mip-script>
  MIP.watch('dialog', val => {
    val && setTimeout(() => MIP.setData({ dialog: false }), 2000)
  })
</mip-script>
<script src="https://c.mipcdn.com/static/v2/mip-script/mip-script.js"></script>
```
