var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../../../src/stylus/components/_expansion-panel.styl';
import Themeable from '../../mixins/themeable';
import { provide as RegistrableProvide } from '../../mixins/registrable';
import mixins from '../../util/mixins';
/* @vue/component */
export default mixins(Themeable, RegistrableProvide('expansionPanel')).extend({
    name: 'v-expansion-panel',
    provide() {
        return {
            expansionPanel: this
        };
    },
    props: {
        disabled: Boolean,
        readonly: Boolean,
        expand: Boolean,
        focusable: Boolean,
        inset: Boolean,
        popout: Boolean,
        value: {
            type: [Number, Array],
            default: () => null
        }
    },
    data: () => ({
        items: [],
        open: []
    }),
    computed: {
        classes() {
            return _extends({
                'v-expansion-panel--focusable': this.focusable,
                'v-expansion-panel--popout': this.popout,
                'v-expansion-panel--inset': this.inset
            }, this.themeClasses);
        }
    },
    watch: {
        expand(v) {
            let openIndex = -1;
            if (!v) {
                // Close all panels unless only one is open
                const openCount = this.open.reduce((acc, val) => val ? acc + 1 : acc, 0);
                const open = Array(this.items.length).fill(false);
                if (openCount === 1) {
                    openIndex = this.open.indexOf(true);
                }
                if (openIndex > -1) {
                    open[openIndex] = true;
                }
                this.open = open;
            }
            this.$emit('input', v ? this.open : openIndex > -1 ? openIndex : null);
        },
        value(v) {
            this.updateFromValue(v);
        }
    },
    mounted() {
        this.value !== null && this.updateFromValue(this.value);
    },
    methods: {
        updateFromValue(v) {
            if (Array.isArray(v) && !this.expand) return;
            let open = Array(this.items.length).fill(false);
            if (typeof v === 'number') {
                open[v] = true;
            } else if (v !== null) {
                open = v;
            }
            this.updatePanels(open);
        },
        updatePanels(open) {
            this.open = open;
            for (let i = 0; i < this.items.length; i++) {
                const active = open && open[i];
                this.items[i].toggle(active);
            }
        },
        panelClick(uid) {
            const open = this.expand ? this.open.slice() : Array(this.items.length).fill(false);
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i]._uid === uid) {
                    open[i] = !this.open[i];
                    !this.expand && this.$emit('input', open[i] ? i : null);
                }
            }
            this.updatePanels(open);
            if (this.expand) this.$emit('input', open);
        },
        register(content) {
            this.items.push(content);
            this.open.push(false);
        },
        unregister(content) {
            const index = this.items.findIndex(i => i._uid === content._uid);
            this.items.splice(index, 1);
            this.open.splice(index, 1);
        }
    },
    render(h) {
        return h('ul', {
            staticClass: 'v-expansion-panel',
            class: this.classes
        }, this.$slots.default);
    }
});
//# sourceMappingURL=VExpansionPanel.js.map