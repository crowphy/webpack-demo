import Vue from 'vue'
// import App from './App.vue'

const app = new Vue({
    el: '#app',
    // components: { App },
    // template: '<App/>'
    data: {
        message: 'Hello Webpack!'
    },
    template: `<div id="app">{{ message }}</div>`
})