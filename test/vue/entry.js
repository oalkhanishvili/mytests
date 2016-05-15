import Vue from 'vue';
import VueRouter from 'vue-router';

//  Vue Route Components
import Header from './components/header.vue';
import Main from './components/MainView.vue';
import App from './components/app.vue';
import List from './components/list.vue';


// Attach router to instance
Vue.use(VueRouter);

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter();


// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/': {
        component: Main,
        auth: true
    },
    '/foo': {
        component: List
    },
    '/bar': {
        component: Header
    }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');

// new Vue({
//     el: 'body',
//     components: {
//         app: App
//     }
// });
