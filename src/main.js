import clock from './Clock.vue'

const Clock = {
    install: function(Vue){
        Vue.component('Clock', clock)
    }
    
}

export default Clock 

export { Clock }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Clock)
}