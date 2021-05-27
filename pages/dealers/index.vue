<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="">Дилеры</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="dealers">
      <div class="container-p">					
        <div class="entry-header">
          <h2>Официальный дилер Kia в г. Ташкент</h2>
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
          <div class="map-content m-t-30 relative">
            <div id="ymap_ctrl_display" style="display: none; width: 100%; height: 100%; position: absolute; background-color: rgba(0, 0, 0, 0.5); z-index: 100; pointer-events: none;">
              <div style="position: relative; top: 50%; left: 0; right: 0; color: white; text-align: center; font-size: 1.8em; pointer-events: none;">Чтобы изменить масштаб, прокручивайте карту, удерживая клавишу Ctrl.</div>
            </div>
            <div id="map"></div>
          </div>
        </div>
        <div class="tab-pane fade" id="map-styleitem-2">
          <div class="container-p">
            <div class="dealers-list-search hide">
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
              <div class="item" v-for="(item, key) in this.page_data.content" :key="key">
                <div class="item-cell">
                  <label class="align-center">
                    <input type="radio" name="dealers" class="form-control hide"><span class="radio-style-1"></span>
                    <span class="m-l-10">{{item.name}}</span>
                  </label>
                </div>
                <div class="item-cell" v-html="item.text"></div>
                <div class="item-cell">
                  <div class="align-center m-t-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="mr-2"><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z" stroke="currentColor" stroke-width="1.5"></path></svg>
                    <a :href="'tel:'+item.number" class="m-l-10">{{item.number}}</a>
                  </div>
                </div>
                <div class="item-cell dealers-services" toggle-class-wrapper="">
                  <div></div>
                  <a href="javascript:;" toggle-class="opened"><span class="text-opened">Показать всё</span><span class="text-close">Скрыть</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



	



<script>


export default {
  head() {
    return {
      title: this.page_data.seo.title,
      meta: [
        {
          content: this.page_data.seo.description
        }
      ],

    }
  },
  async asyncData(context){
    try{
      const page_data = await context.store.dispatch("other/fetchPath", {
        path: context.route.path
      });
      return {
        page_data
      }
    }catch(e){
      context.error(e);
    }
  },
  data(){
    return {
      dealerships: []
    }
  },
  mounted(){
    var v = this;
    this.dealerships = this.page_data.content
    var dealerships = this.dealerships;
    /*Карта*/
    ymaps.ready(['Panel']).then(function () {
      window.myMap = new ymaps.Map('map', {
        center: [41.234893, 69.207893],
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
      //for(var i = 0; i < dealerships.length; i++) {

      for(var i = 0; i < 1; i++) {

        var html = '<div class="info-content"><p><b>'+dealerships[i].name+'</b></p>'+dealerships[i].text+'</div>';

        geoObjects[i] = new ymaps.Placemark([dealerships[i].coords[0]*1, dealerships[i].coords[1]*1], {
          //balloonContent: html,
          iconHtml: html,
          iconCaption: dealerships[i].name,
        },{
          iconLayout: iconDef,
          iconOffset: [-15, 0],
          iconShape: {
              type: 'Rectangle',
              coordinates: [
                [0, 0], [30, 32]
              ],
          },
        })
        geoObjects[i].events.add('click', function (e) {
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
        zoom: 16,
      });
      setTimeout(function(){
        myMap.setZoom(19);
        geoObjects[0].events.fire("click");
      }, 1000)


      myMap.behaviors.disable('scrollZoom');

      var ctrlKey = false;
      var ctrlMessVisible = false;
      var timer;

      // Отслеживаем скролл мыши на карте, чтобы показывать уведомление
      myMap.events.add(['wheel', 'mousedown'], function(e) {
          if (e.get('type') == 'wheel') {
              if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
                  $('#ymap_ctrl_display').fadeIn(300);
                  ctrlMessVisible = true;
                  clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
                  timer = setTimeout(function() {
                      $('#ymap_ctrl_display').fadeOut(300);
                      ctrlMessVisible = false;
                  }, 1500);
              }
              else { // Ctrl нажат, скрываем сообщение
                  $('#ymap_ctrl_display').fadeOut(100);
              }
          }
          if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
              $('#ymap_ctrl_display').fadeOut(100);
          }
      });

      // Обрабатываем нажатие на Ctrl
      $(document).keydown(function(e) {
          if (e.which === 17 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
              ctrlKey = true;
              myMap.behaviors.enable('scrollZoom');
          }
      });
      $(document).keyup(function(e) { // Ctrl не нажат: выключаем масштабирование мышью
          if (e.which === 17) {
              ctrlKey = false;
              myMap.behaviors.disable('scrollZoom');
          }
      });
    });



  }
}
</script>