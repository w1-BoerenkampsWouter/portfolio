import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import projects from '@/components/projects';
import About from '@/components/About';
import Contact from '@/components/contact';
import Meta from 'vue-meta'
Vue.use(Router);
Vue.use(Meta)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Projects',
      name: 'projects',
      component: projects,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    },

    
  ],
});
