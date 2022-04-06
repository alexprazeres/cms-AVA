require('./bootstrap');

import Vue from 'vue';
import { store } from './store/admin'
import moment from 'moment';
import { App, plugin } from '@inertiajs/inertia-vue'
Vue.use(plugin);
Vue.use(moment);

require('./plugins/inertia-progress');
require('./plugins/toasted');
require('./plugins/vue2-datepicker');
require('./plugins/vue-cookies');
require('./plugins/vue-meta');
require('./plugins/ziggy');

require('./filters/date-times');

require('./mixins/page-error');

require('./component-registration');


Vue.filter('smallDateTime', function (value) {
    if (!value) {
        return '';
    }
    return moment(String(value)).format('DD/MM/YYYY HH:mm')
});

Vue.filter('smallDateTimeUtc', function (value) {
    if (!value) {
        return '';
    }
    return moment.utc(String(value)).format('DD/MM/YYYY HH:mm')
});

const el = document.getElementById('app');
new Vue({
    store,
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(el);
