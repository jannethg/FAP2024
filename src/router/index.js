import Container from '@/components/layouts/Container.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Container,
      children:[
        {
          path: '/',
          name: 'dashboard',
          component: () => import('../views/dashboard/index.vue'),
          meta: {
            title: "Dashboard",
          },
        },
        {
          path: '/programs',
          name: 'programs',
          component: () => import('../views/programs/index.vue'),
          meta: {
            title: "Programs",
          },
        },
        {
          path: '/programs/detail/:id',
          name: 'programsDetail',
          component: () => import('../views/programs/detail/index.vue'),
          meta: {
            title: "Programs Detail",
          },
        },
        {
          path: '/programs/edit/:id',
          name: 'programsEdit',
          component: () => import('../views/programs/edit/index.vue'),
          meta: {
            title: "Programs Edit",
          },
        },
        {
          path: '/verification-programs',
          name: 'verificationPrograms',
          component: () => import('../views/programs/verification-programs/index.vue'),
          meta: {
            title: "Verification Program",
          },
        },
        {
          path: '/my-programs',
          name: 'myPrograms',
          component: () => import('../views/programs/my-programs/index.vue'),
          meta: {
            title: "My Program",
          },
        },
        {
          path: '/programs/edit-program-access/:id',
          name: 'editProgramAccess',
          component: () => import('../views/programs/my-programs/edit-program-access/index.vue'),
          meta: {
            title: "Edit Program Access",
          },
        },
        {
          path: '/request-history',
          name: 'requestPrograms',
          component: () => import('../views/programs/request-history/index.vue'),
          meta: {
            title: "Request Program",
          },
        },
        {
          path: '/announcements',
          name: 'announcements',
          component: () => import('../views/announcements/index.vue'),
          meta: {
            title: "Announcements",
          },
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../views/settings/index.vue'),
          meta: {
            title: "Settings",
          },
        },
        {
          path: '/program-management',
          name: 'program-management',
          component: () => import('../views/program-management/index.vue'),
          meta: {
            title: "program-management",
          },
        },
        {
          path: '/testimonials',
          name: 'testimonials',
          component: () => import('../views/testimonials/index.vue'),
          meta: {
            title: "Testimonials",
          },
        },
      ],
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue'),
      meta: {
        title: "Login",
      },
    }
  ]
})

export default router
