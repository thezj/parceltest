import Vue from 'vue'
import app from './App'


import 'element-ui/lib/theme-chalk/fonts/element-icons.ttf'
import 'element-ui/lib/theme-chalk/fonts/element-icons.woff'
import 'element-ui/lib/theme-chalk/index.css'

// 还可以修改 \node_modules\parcel-bundler\src\packagers\JSPackager.js 解决url不能加载文件的问题
// hey @FalkoJoseph, I went to the actual code of parcel to do this. On the file \node_modules\parcel-bundler\src\packagers\JSPackager.js on line 56 you will see this line:

// this.bundleLoaders.add(mod.type);
// So what I did to get rid of the error is put a validation before that line. Something like this:

// if(!this.bundleLoaders){
//     this.bundleLoaders = new Set();
// }
// this.bundleLoaders.add(mod.type);
import ElementUI from 'element-ui'
Vue.use(ElementUI)




const vm = new Vue({
    el: '#app',
    render: h => h(app)
})