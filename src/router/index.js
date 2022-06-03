// Définir les importations principales pour créer le routeur d’application
import { createWebHistory, createRouter } from "vue-router";

/* 
    Définir une constante avec tous les chemins d’application nécessaires
*/
    const routerPath = [
        {   //lien vers laquelle il redirigera vers la page "HomeView.vue"
            path: '/', 
            name: 'HomeView',
            component: () => import('../views/HomeView.vue'),
        },
        {   //lien vers laquelle il redirigera vers la page "HistoryView.vue"
            path: '/history', 
            name: 'HistoryView',
            component: () => import('../views/HistoryView.vue'),
        },
        {   //lien vers laquelle il redirigera vers la page "ScheduleView.vue"
            path: '/schedule', 
            name: 'ScheduleView',
            component: () => import('../views/ScheduleView.vue'),
        },
        {   //lien vers laquelle il redirigera vers la page "LocationView.vue"
            path: '/how-to-come', 
            name: 'LocationView',
            component: () => import('../views/LocationView.vue'),
        },
        {   //lien vers laquelle il redirigera vers la page "NewsView.vue"
            path: '/news', 
            name: 'NewsView', 
            component: () => import('../views/NewsView.vue'),
        },
        {   //lien vers laquelle il redirigera vers la page "TeamsView.vue"
            path: '/teams', 
            name: 'TeamsView',
            component: () => import('../views/TeamsView.vue'),
        },
        {   //lien vers laquelle il redirigera vers la page "RegistrationView.vue"
            path: '/how-to-sign',
            name: 'RegistrationView',
            component: () => import('../views/RegistrationView.vue'),
        },
        {   //lien vers laquelle il redirigera vers la page "ShopView.vue"
            path: '/shop',
            name: 'ShopView',
            component: () => import('../views/ShopView.vue'),
        },
        {   //lien vers laquelle il redirigera vers la page "ContactView.vue"
            path: '/contact-us',
            name: 'ContactView',
            component: () => import('../views/ContactView.vue'),
        },  
    ];

    // ? 
    export default createRouter({
        history: createWebHistory(),
        routes: routerPath,
    })

