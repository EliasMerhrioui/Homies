/* 
	[IMPORTS] Vue.js
	Define main imports to create the application router
*/
    import { createWebHistory, createRouter } from "vue-router";
//

/* 
    [ROUTER] Vue.js Path
    Define a constant with all needed application paths
    => https://router.vuejs.org
*/
    const routerPath = [
        {
            path: '/',
            name: 'HomeView',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/history',
            name: 'HistoryView',
            component: () => import('../views/HistoryView.vue'),
        },
        {
            path: '/schedule',
            name: 'ScheduleView',
            component: () => import('../views/ScheduleView.vue'),
        },
        {
            path: '/how-to-come',
            name: 'LocationView',
            component: () => import('../views/LocationView.vue'),
        },
        {
            path: '/news',
            name: 'NewsView',
            component: () => import('../views/NewsView.vue'),
        },
        {
            path: '/teams',
            name: 'TeamsView',
            component: () => import('../views/TeamsView.vue'),
        },
        {
            path: '/how-to-sign',
            name: 'RegistrationView',
            component: () => import('../views/RegistrationView.vue'),
        },
        {
            path: '/shop',
            name: 'ShopView',
            component: () => import('../views/ShopView.vue'),
        },
        {
            path: '/contact-us',
            name: 'ContactView',
            component: () => import('../views/ContactView.vue'),
        },
  /*
        /home DONE
        /history DONE
        /how-to-come DONE

        /news DONE

        /teams DONE
        /teams/senior DONT DONE 
        /teams/junior DONT DONE 
        /teams/flag-mixte DONT DONE 

        /how-to-sign DONE

        /shop DONE

        /contact-us DONE
        */





/*
        {
            path: '/:type/:id',
            name: 'SingleView',
            component: () => import('../views/SingleView.vue'),
        },
        {
            path: '/create',
            name: 'CreateView',
            authGuard: true,
            component: () => import('../views/CreateView.vue'),
        }
*/


      
    ];
//

/* 
    [ROUTER] Vue.js router configuration
    Create new router and add navigation guards to
    include OpenAPI in the router description
*/
    export default createRouter({
        history: createWebHistory(),
        routes: routerPath,
    })
//
