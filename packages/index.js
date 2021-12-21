import Button from './components/button'
import Dialog from './components/dialog'
import Toast from './components/toast'
import Loading from './components/loading'

const components = [
  Button,
  Dialog
]

/*
安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。
如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
 */
const install = function (Vue) {
  components.forEach(value => {
    Vue.component(value.name, value)
  })

  // 请参考《VUE：从toast组件到toast插件（二）》-https://blog.csdn.net/qq_41422946/article/details/104345602
  // 1.创建组件构造器
  const ToastContrustor = Vue.extend(Toast)

  // 2.new的方式，根据组件构造器，可以创建出一个组件对象
  const toast = new ToastContrustor()

  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast.show

  const LoadingContrustor = Vue.extend(Loading)
  const loading = new LoadingContrustor()
  loading.$mount(document.createElement('div'))
  document.body.appendChild(loading.$el)
  Vue.prototype.$showLoading = loading.show
  Vue.prototype.$hideLoading = loading.hide
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
