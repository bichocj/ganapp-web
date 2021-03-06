import Dashboard from './components/Dashboard.vue'
import NotFound from './components/modules/dashboard/404.vue'
import BlankPage from './components/modules/common-page/BlankPage.vue'
import ChallengesList from './components/modules/challenges/ChallengesList.vue'
import ChallengesForm from './components/modules/challenges/ChallengesForm.vue'
import ChallengesWinners from './components/modules/challenges/ChallengesWinners.vue'
import ChallengesFormTwo from './components/modules/challenges/ChallengesFormTwo.vue'
import PromotionsList from './components/modules/promotions/PromotionsList.vue'
import AdvertisementsList from './components/modules/advertisements/AdvertisementsList.vue'
import Login from './components/Login.vue'
import NotFoundSecond from './components/modules/dashboard/500.vue'

// Routes
const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      document.body.className += 'skin-light sidebar-mini'
      next()
    },
    activate: function () {
      this.$nextTick(function () {
        // => 'DOM loaded and ready'
        alert('test')
      })
    },
    children: [
      {
        path: '',
        name: 'blank-page',
        component: BlankPage
      }, {
        path: '/login',
        name: 'login',
        component: Login
      }, {
        path: '/challenges/list',
        name: 'challenges-list',
        component: ChallengesList
      }, {
        path: '/challenges/form',
        name: 'challenges-form',
        component: ChallengesForm
      }, {
        path: '/challenges/winners',
        name: 'challenges-winners',
        component: ChallengesWinners
      }, {
        path: '/challenges/form-two',
        name: 'challenges-form-two',
        component: ChallengesFormTwo
      }, {
        path: '/advertisements-list',
        name: 'advertisements-list',
        component: AdvertisementsList
      }, {
        path: '/promotions-list',
        name: 'promotions-list',
        component: PromotionsList
      }, {
        path: '/blank-page',
        name: 'blank-page',
        component: BlankPage
      }, {
        path: '/404',
        name: '404',
        component: NotFound
      }, {
        path: '/500',
        name: '500',
        component: NotFoundSecond
      },
      {
        path: '*',
        name: '404',
        component: NotFound
      }
    ]
  }, {
    // not found handler
    path: '*',
    redirect: '/login'
  }
]

export default routes
