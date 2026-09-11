import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../view/Homepage.vue'
import about_us from '../view/About_us.vue'
import admission from '../view/Admission.vue'
import sampleData from '../view/SampleData.vue'
import sampleVmodel from '../view/SampleVmodel.vue'
import sampleMethods from '../view/SampleMethods.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
    },

    {
      path: '/about_us',
      name: 'about_us',
      component: about_us
    },

    {
      path: '/admissions',
      name: 'admissions',
      component: admission
    },

    {
      path: '/sample-data',
      name: 'sample-data',
      component: sampleData
    },

    {
      path: '/sample-vmodel',
      name: 'sample-vmodel',
      component: sampleVmodel
    },

    {
      path: '/sample-methods',
      name: 'sample-methods',
      component: sampleMethods
    }
    
  ],
})

export default router
