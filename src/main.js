import Vue from 'vue'
import App from './App.vue'

import store from './utils/store'

Vue.config.productionTip = false

var paras = [
    [
        {
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaaaaaaaaaa',
            textStyle: {
                
            }
        },
        {
            text: 'bbbbbbbbbbbb',
            textStyle: {

            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'ccccccccasdfasdfasdfasdfasdfasdfasdfsdfasdfasfdcccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'cccccccccccc',
            textStyle: {
                
            }
        }
    ],
    [
        {
            text: 'ccccccccccccaa',
            textStyle: {
                
            }
        }
    ]
]



store.commit('setDocumentBody', paras)

new Vue({
    render: h => h(App),
}).$mount('#app')