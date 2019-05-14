import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import example1 from '@/views/home/example1';
import example2 from '@/views/home/example2';
import example3 from '@/views/home/example3';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
	  component: Home,
	  redirect: '/1',
      children: [
        {
          path: '/1',
          component: example1
        },
        {
          path: '/2',
          component: example2
        },
        {
          path: '/3',
          component: example3
        },
      ]
    },
  ]
});

  


