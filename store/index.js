

import Vue from 'vue';




//
import Vuex from 'vuex';
Vue.use(Vuex);

/* lodash для работы с массивами */
import _ from 'lodash';
Vue.use(_);

/* Всплывающее подсказки */
import Notifications from 'vue-notification/dist/ssr.js';
Vue.use(Notifications);


/* Обратный отчёт */
import vueAwesomeCountdown from 'vue-awesome-countdown'
Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default

/* Мульти селект */
import Multiselect from 'vue-multiselect';
Vue.component('multiselect', Multiselect)


/* Валидатор  */
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

/* Форматирование даты */
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




/* GLOBAL FILTRES */

Vue.filter('spaceBetweenNum', (price)=>{ 
	price += "";
	var pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(price))
		price = price.replace(pattern, "$1 $2");
	return price; 
})

Vue.filter('spacePhone', (price)=>{ 
  price = price+"";
	return price.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/gim, '$1 $2 $3-$4-$5'); 
})



/* GLOBAL MIXINS */

Vue.mixin({
	methods:{
		sortedUniq(ob) {
			return _.uniqWith(ob, _.isEqual);
    },
	}
})



