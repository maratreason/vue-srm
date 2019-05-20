import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import MessagePlugin from '@/utils/message.plugin';

import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min.js';

Vue.config.productionTip = false;

Vue.use(MessagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

var firebaseConfig = {
	apiKey: "AIzaSyCnoPScdo1H4AmwKUCRJdyNEZJ7QrIea9E",
	authDomain: "vue-crm-app.firebaseapp.com",
	databaseURL: "https://vue-crm-app.firebaseio.com",
	projectId: "vue-crm-app",
	storageBucket: "vue-crm-app.appspot.com",
	messagingSenderId: "348571639386",
	appId: "1:348571639386:web:46fcdca3cca19cf8"
};

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
