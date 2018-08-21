import '../../../src/stylus/components/_chips.styl'
import mixins from '../../util/mixins'
// Components
import VIcon from '../VIcon'
// Mixins
import Colorable from '../../mixins/colorable'
import Themeable from '../../mixins/themeable'
import Toggleable from '../../mixins/toggleable'
import { fixClass } from '../../util/class'

/* @vue/component */
export default mixins(Colorable, Themeable, Toggleable).extend({
  name: 'VChip',
  props: {
    close: Boolean,
    disabled: Boolean,
    label: Boolean,
    outline: Boolean,
    // Used for selects/tagging
    selected: Boolean,
    small: Boolean,
    textColor: String,
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      let classes = this.addBackgroundColorClassChecks({
        'v-chip--disabled': this.disabled,
        'v-chip--selected': this.selected && !this.disabled,
        'v-chip--label': this.label,
        'v-chip--outline': this.outline,
        'v-chip--small': this.small,
        'v-chip--removable': this.close,
        'theme--light': this.light,
        'theme--dark': this.dark
      })
      classes = fixClass(this.$element, classes)

      return this.textColor || this.outline ? this.addTextColorClassChecks(classes, this.textColor || this.color) : classes
    }
  },
  methods: {
    genClose (h) {
      const data = {
        staticClass: 'v-chip__close',
        on: {
          click: e => {
            e.stopPropagation()
            this.$emit('input', false)
            this.$emit('update:value', false)
          }
        }
      }
      return h('div', data, [h(VIcon, '$vuetify.icons.delete')])
    },
    genContent (h) {
      const children = [this.$slots.default]
      this.close && children.push(this.genClose(h))
      return h('span', {
        staticClass: 'v-chip__content'
      }, children)
    }
  },
  render (h) {
    const data = {
      staticClass: 'v-chip',
      'class': this.classes,
      attrs: { tabindex: this.disabled ? -1 : 0 },
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    }
    return h('span', data, [this.genContent(h)])
  }
})
