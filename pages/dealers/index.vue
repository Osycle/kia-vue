<template>
<div>
  <div class="dealers">
    <div class="container-p">					
      <div class="entry-header">
        <h2>Официальный дилер KIA в г. Ташкент</h2>
      </div>
    </div>
    <br>
    <div class="container-p">
      <div class="de-filter-area flex-adaptive justify-c-between">
        <div class="filter-content m-v-10">
          <select class="js-select">
            <option>Ташкент</option>
          </select>
        </div>
        <div class="short-models-nav m-v-10">
          <ul class="list flex-adaptive justify-c-center li-m-v-15">
            <li class="active"><a href="#map-styleitem-1" data-toggle="tab">Карта</a></li>
            <li><a href="#map-styleitem-2" data-toggle="tab">Списком</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-pane fade in active" id="map-styleitem-1">
        <div class="map-content m-v-30">
          <div id="map"></div>
        </div>
      </div>
      <div class="tab-pane fade" id="map-styleitem-2">
        <div class="container-p">
          <div class="dealers-list-search">
            <div class="input-content placeholder-focus">
              <div class="icon-content">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><circle cx="9" cy="9" r="7.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M14 14l5 5" stroke="currentColor" stroke-width="1.5"></path></svg>									
              </div>
              <input type="text" name="search" class="form-control">
              <span class="placeholder">Поиск по названию</span>
              <hr>
            </div>
          </div>
          <div class="dealers-list" id="dealers-list">
            <div class="item" v-for="(item, key) in page.dealerships" :key="key">
              <div class="item-cell">
                <label class="align-center">
                  <input type="radio" name="dealers" class="form-control hide"><span class="radio-style-1"></span>
                  <span class="m-l-10">{{item.name}}</span>
                </label>
              </div>
              <div class="item-cell">
                <div>
                  <p>{{item.address}}</p>
                </div>
                <div>{{item.work_time}}</div>
              </div>
              <div class="item-cell">
                <div class="align-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="mr-2"><circle cx="10" cy="10" r="8.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M12.185 6.779c-1.259-1.757 2.215-2.474 2.234-3.374l1.425.751 1.237 1.108.588 2.057.532 2.318-.532 2.111-.805 1.611c-1.082.037-1.191-.623-1.61-1.208-.525-.732.473-2.596-3.07-5.374z" fill="currentColor"></path><path d="M3.97 6.03L6.73 2.877c-.015.33-.039.685-.075 1.018-.036.335-.081.63-.136.852a1.662 1.662 0 01-.08.255 7.665 7.665 0 01-.936.825c-.395.282-.737.423-1.002.423a.805.805 0 01-.53-.22zM8.135 13.001h0v0V13v0-.117l-.036-.112-.577-1.8-.053-.165-.12-.126c-.372-.386-.894-.62-1.215-.764l-.097-.043c-.099-.045-.17-.08-.222-.108a20.153 20.153 0 00-.02-.244c-.006-.067-.012-.133-.016-.194a7.376 7.376 0 01-.026-.829c.011-.285.048-.51.106-.663a.758.758 0 01.018-.044L9 8.255c.008.052.017.106.028.162.08.415.258 1.043.7 1.503.356.37.855.71 1.226.941.106.067.207.127.296.18v1.055a77.344 77.344 0 01-1.572 1.563 26.905 26.905 0 01-1.412 1.276 8.189 8.189 0 01-.063-.507 15.912 15.912 0 01-.068-1.399v-.028zm-.348 2.278a.06.06 0 01.002-.001h-.002z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path></svg>
                  <a :href="item.site" target="_blank" class="m-l-10">{{item.site}}</a>
                </div>
                <div class="align-center m-t-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="mr-2"><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z" stroke="currentColor" stroke-width="1.5"></path></svg>
                  <a :href="'tel:'+item.phone" class="m-l-10">{{item.phone}}</a>
                </div>
              </div>
              <div class="item-cell dealers-services" toggle-class-wrapper="">
                <div v-for="(serviceId, key) in item.services_id" :key="key">
                  <div v-for="(service, key) in page.services" :key="key" v-if="serviceId == service.id">
                    {{service.name}}
                  </div>
                </div>
                <a href="javascript:;" toggle-class="opened"><span class="text-opened">Показать всё</span><span class="text-close">Скрыть</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    <!-- Yandex map -->
	  <script src="js/points.js"></script>
	  <script type="text/javascript" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=f06d738e-1a2e-4ca2-91cc-d23a3bbb9e09"></script>
	  <script src="js/map.panel.js"></script>
  
</div>

</template>



	



<script>

import mainjs from '@/static/js/main'

export default {
  head() {
    return {
      //title: this.page.seo.title,
      meta: [
        {
          //content: this.page.seo.description
        }
      ],
    }
  },
  async asyncData(context){
    try{
      const path = context.route.path
      const page = await context.store.dispatch("models/fetchPageData", {
        path
      })
      return {page: page.content}
    }catch(e){
      context.error(e);
    }
  },
  data(){
    return {
      breadcrumpItems: [
        {title: 'Главная',link: '/'},
        {title: 'Официальный дилер KIA в г. Ташкент',link: '/'},
      ],
    }
  },
  mounted(){
    mainjs();
    console.log(this.page)
    var dealerships = this.page.dealerships;
		/*Карта*/
		ymaps.ready(['Panel']).then(function () {
			console.log(dealerships, 'Tut Page');
			window.myMap = new ymaps.Map('map', {
					center: [41.3017329, 69.2101797],
					controls: [],
					zoom: 14
				}, {
					searchControlProvider: 'yandex#search'
				})
			var MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div class="map-cluster">$[properties.geoObjects.length]</div>');
			window.clusterer = new ymaps.Clusterer({
					clusterHideIconOnBalloonOpen: false,
					geoObjectHideIconOnBalloonOpen: false,
					zoom: 13,
					clusterIcons: [
						{
							html: "",
							//href: 'https://www.kia.ru/images/map/map_pin.svg',
							size: [40, 40],
							offset: [-20, -20]
						}
					],
					clusterIconContentLayout: MyIconContentLayout,
				});

			//myMap.controls.add('zoomControl');


   		var panel = new ymaps.Panel();
	    myMap.controls.add(panel, {
	        float: 'left'
	    });

	




				window.geoObjects = [];

				var iconDefHtml = 
				'<div class="de-marker">'+
					'<figure><img src="https://www.kia.ru/images/map/map_pin.svg"></figure>'+
					'<div class="de-marker-desc"><span>$[properties.iconCaption]</span></div>'+
				'</div>';
				var iconDefHtmlActive = 
				'<div class="de-marker">'+
					'<figure><img src="https://www.kia.ru/images/map/map_pin_active.svg"></figure>'+
					'<div class="de-marker-desc"><span>$[properties.iconCaption]</span></div>'+
				'</div>';

				var iconDef = ymaps.templateLayoutFactory.createClass(iconDefHtml);
				var iconDefActive = ymaps.templateLayoutFactory.createClass(iconDefHtmlActive);
				

				for(var i = 0; i < dealerships.length; i++) {
					console.log(dealerships[i]);
					var html = 
						'<div class="info-content">'+
							'<p><b>'+dealerships[i].name+'</b></p>'+
							'<p>'+dealerships[i].address+'</p>'+
							'<p>'+dealerships[i].work_time+'</p>'+
							'<p><a href="'+dealerships[i].site+'">'+dealerships[i].site+'</a></p>'+
							'<p><a href="'+dealerships[i].phone+'">'+dealerships[i].phone+'</a></p>'+
							'<div class="btn-content">'+
								'<div class="btn-def">'+
									'<a href="javascript:;">Выбрать</a>'+
								'</div>'+
							'</div>'+
						'</div>';

					geoObjects[i] = new ymaps.Placemark([dealerships[i].lng, dealerships[i].lat], {
						//balloonContent: html,
						iconHtml: html,
						iconCaption: dealerships[i].name,
						
						//clusterCaption: 'метка <strong>' + i + '</strong>',
					},{
						iconLayout: iconDef,
						//cursor: "pointer",
						//iconLayout: 'default#image',
						//iconImageSize: [30, 32],
						//iconImageOffset: [240, 240],
						//iconImageHref: 'https://www.kia.ru/images/map/map_pin.svg',
						//iconContentOffset: [300, 320],
						//iconContentLayout: iconDef,
						iconOffset: [-15, 0],
        		iconShape: {
        		    type: 'Rectangle',
        		    coordinates: [
        		    	[0, 0], [30, 32]
        		    ],
        		},
					})
					geoObjects[i].events.add('click', function (e) {
						//console.log(e);
	        	window.target = e.get('target');
						target.options.set({
							//iconOffset: [0, 0]
						})
						//console.log(target);
	        	panel.setContent(target.properties.get('iconHtml'));
	        	myMap.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
		    	});
		    	geoObjects[i].balloon.events.add('close', function (e) {
		    		//console.log("close");
		    	});
				}


				clusterer.add(geoObjects);
				myMap.geoObjects.add(clusterer).events.fire("click");
				

				myMap.setBounds(clusterer.getBounds(), {
					checkZoomRange: true,
					zoom: 13,
				});
				setTimeout(function(){
					myMap.setZoom(13);
					geoObjects[0].events.fire("click");
				}, 2000)
				
		});
  }
}
</script>