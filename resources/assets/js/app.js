
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/*  
*	Load the vue components in - located in a single file to keep things neat
*/
require('./loadTemplates');


/*
*	Init vue
*/ 
const app = new Vue({
    el: '#app'
});
