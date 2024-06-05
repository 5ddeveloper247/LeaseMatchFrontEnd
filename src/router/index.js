import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import AboutPage from '@/components/AboutPage.vue'
import PricingPage from '@/components/PricingPage.vue'
import LandLordPage from '@/components/LandLordPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import WaitlistPage from '@/components/WaitlistPage.vue'
import ReturnPolicy from '@/components/ReturnPolicy.vue'
import PrivacyPage from '@/components/PrivacyPage.vue'
import TermsAndCondition from '@/components/TermsAndCondition.vue'
import Login from '@/components/Login.vue'
import ForgetPass from '@/components/ForgetPass.vue'
import OtpSection from '@/components/OtpSection.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/registerForm',
      name: 'registerForm',
      component: RegisterForm
    },

    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },

    {
      path: '/pricing',
      name: 'pricing',
      component: PricingPage
    },

    {
      path: '/landlord',
      name: 'landlord',
      component: LandLordPage
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },

    {
      path: '/waitlist',
      name: 'waitlist',
      component: WaitlistPage
    },

    {
      path: '/policy',
      name: 'policy',
      component: ReturnPolicy
    },

    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPage
    },

    {
      path: '/terms',
      name: 'terms',
      component: TermsAndCondition
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPass
    },

    {
      path: '/OtpSection',
      name: 'OtpSection',
      component: OtpSection
    }
  ],

  scrollBehavior() {
    return {left: 0, top: 0};
  }
})

export default router
