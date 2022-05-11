/* 
	[VUE] Main imports
	Define main imports to create the application
*/
    // Vue imports
    import { createApp } from 'vue';

    // App imports
    import App from './App.vue';
    import StoreModule from './store/index'; // Data binding => https://vuex.vuejs.org
    import RouterModule from "./router"; // Path binding => https://router.vuejs.org
    import YouTube from 'vue3-youtube'
    //Vue.component('YouTube', YouTube)

/* 
	[APP] Start Vue.js app
	Init new Vue.js applilcation
*/
    
    const newApp = createApp(App) 
    newApp.component('YouTube', YouTube)
    newApp.use( StoreModule ) //=> Inject StoreModule with 'use()' method
    newApp.use( RouterModule ) //=> Inject RouterModule with 'use()' method
    .mount('#app');
//