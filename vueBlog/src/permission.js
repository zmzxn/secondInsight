import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
    showSpinner: false
})

router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    document.title = to.meta.title + '-二更灼见'
    next()
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
