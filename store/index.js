

import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import Notifications from 'vue-notification/dist/ssr.js';
import Multiselect from 'vue-multiselect';


Vue.use(Vuex);
Vue.use(_);
Vue.use(Notifications);

Vue.component('multiselect', Multiselect)

import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',
    'Пятница', 'Суббота'
  ],
  dayOfWeekNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
  ],
  monthNames: [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  // Timezone offset, in minutes (0 - UTC, 180 - Russia, undefined - current)
  timezone: 5
});

// import ApiPlugin from '@/plugins/api'
// Vue.use(ApiPlugin);


/* GLOBAL FILTRES */

Vue.filter('spaceBetweenNum', (price)=>{ 
	price += "";
	var pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(price))
		price = price.replace(pattern, "$1 $2");
	return price; 
})




/* GLOBAL MIXINS */

Vue.mixin({
	methods:{
		sortedUniq(ob) {
			return _.uniqWith(ob, _.isEqual);
		},
		
	}
})




