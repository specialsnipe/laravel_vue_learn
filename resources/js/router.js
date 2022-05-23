import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes:[
        {
            path: '/people', component: () => import('./components/person/Index'),
            name: 'person.index'
        },
        {
            path: '/create', component: () => import('./components/person/Create'),
            name: 'person.create'
        },
        {
            path: '/people/:id/edit', component: () => import('./components/person/Edit'),
            name: 'person.edit'
        },
        {
            path: '/people/:id', component: () => import('./components/person/Show'),
            name: 'person.show'
        },
    ]
})

