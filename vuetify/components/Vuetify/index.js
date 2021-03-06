import application from './mixins/application';
import breakpoint from './mixins/breakpoint';
import theme from './mixins/theme';
import icons from './mixins/icons';
import options from './mixins/options';
import genLang from './mixins/lang';
import { consoleWarn } from '../../util/console';
import goTo from './util/goTo';
const Vuetify = {
    install(Vue, opts = {}) {
        if (this.installed) return;
        this.installed = true;
        checkVueVersion(Vue);
        const lang = genLang(opts.lang);
        Vue.prototype.$vuetify = new Vue({
            mixins: [breakpoint],
            data: {
                application,
                dark: false,
                icons: icons(opts.iconfont, opts.icons),
                lang,
                options: options(opts.options),
                rtl: opts.rtl,
                theme: theme(opts.theme)
            },
            methods: {
                goTo,
                t: lang.t.bind(lang)
            }
        });
        if (opts.transitions) {
            Object.values(opts.transitions).forEach(transition => {
                if (transition.name !== undefined && transition.name.startsWith('v-')) {
                    Vue.component(transition.name, transition);
                }
            });
        }
        if (opts.directives) {
            Object.values(opts.directives).forEach(directive => {
                Vue.directive(directive.name, directive);
            });
        }
        if (opts.components) {
            Object.values(opts.components).forEach(component => {
                Vue.use(component);
            });
        }
    },
    version: '1.1.10'
};
export function checkVueVersion(Vue, requiredVue) {
    const vueDep = requiredVue || '^2.5.10';
    const required = vueDep.split('.', 3).map(v => v.replace(/\D/g, '')).map(Number);
    const actual = Vue.version.split('.', 3).map(n => parseInt(n, 10));
    // Simple semver caret range comparison
    const passes = actual[0] === required[0] && ( // major matches
    actual[1] > required[1] || // minor is greater
    actual[1] === required[1] && actual[2] >= required[2] // or minor is eq and patch is >=
    );
    if (!passes) {
        consoleWarn(`Vuetify requires Vue version ${vueDep}`);
    }
}
export default Vuetify;