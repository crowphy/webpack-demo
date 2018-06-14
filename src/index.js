import Vue from 'vue'
import { sub } from './test/shaking'

sub();
const app = new Vue({
    el: '#app',
    // components: { App },
    // template: '<App/>'
    data: {
        message: 'Hello Webpack!'
    },
    template: `<div id="app">{{ message }}</div>`
})