<template>
  <div class="main-body accessories">
    <div class="options-bnr relative card-top">
      <div class="container-p relative">
        <div class="flex-adaptive align-center justify-c-between">
					<div class="breadcrumb-container">
						<ol class="breadcrumb">
							<li><nuxt-link to="/">Главная</nuxt-link></li>
							<li><nuxt-link to="">Аксессуары</nuxt-link></li>
              <li><nuxt-link to="">Каталог новых автомобилей</nuxt-link></li>
						</ol>
					</div>
        </div>
        <div class="entry-intro">
          <div class="relative">
            <h2>Аксессуары</h2>
          </div>
        </div>
      </div>
    </div>
		<div class="options-header">
			<div class="options-header-content">
				<div class="container-p">
          <div class="bar-width">
            <select class="js-select" name="question" required>
              <option value="">Выберите тип вопроса</option>
              <option>K5</option>
              <option>Seltos</option>
              <option>Stinger</option>
              <option>Sorento</option>
              <option>Soul</option>
              <option>Carnival</option>
            </select>
          </div>
				</div>
			</div>
		</div>
		<div class="options-entry scrolled-down">
			<div class="container-p relative">
				<div class="config-sidebar">	
					<div class="config-filter">
            <div>
              <h4>Фильтры</h4>
            </div>
						<div class="config-filter-items">
              <div class="collapse-content">
                <fieldset>
                  <a data-toggle="collapse" :href="'#prc-1'" aria-expanded="true">
                    <span>Колёса</span><i class="fa fa-angle-down"></i>
                  </a>
                  <ul :id="'prc-1'" class="panel-collapse collapse in" role="tabpanel">
                    <li>
                      <label role="button" class="align-center m-v-15">
                        <input type="checkbox" name="options" class="none" value="">
                        <span class="checkbox-style-1"></span>
                        <span class="m-l-10">Колесные диски</span>
                      </label>
                    </li>
                    <li>
                      <label role="button" class="align-center m-v-15">
                        <input type="checkbox" name="options" class="none" value="">
                        <span class="checkbox-style-1"></span>
                        <span class="m-l-10">Колёсные гайки и датчики</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <a data-toggle="collapse" :href="'#prc-2'" aria-expanded="true">
                    <span>Экстерьер</span><i class="fa fa-angle-down"></i>
                  </a>
                  <ul :id="'prc-2'" class="panel-collapse collapse in" role="tabpanel">
                    <li>
                      <label role="button" class="align-center m-v-15">
                        <input type="checkbox" name="options" class="none" value="">
                        <span class="checkbox-style-1"></span>
                        <span class="m-l-10">Комфорт</span>
                      </label>
                    </li>
                    <li>
                      <label role="button" class="align-center m-v-15">
                        <input type="checkbox" name="options" class="none" value="">
                        <span class="checkbox-style-1"></span>
                        <span class="m-l-10">Стиль</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
              </div>
						</div>
					</div>
				</div>
				<div class="config-details">
					<div class="wrapper">
						<div class="config-content">
              <div class="accessories-items">
                <div class="carstock-items">
                  <div class="item">
                    <div class="img-content">
                      <figure>
                        <img src="https://cdn.kia.ru/resize/445x337/aftersale-data/images/accessories/ae8b4f47-ef19-4011-85d6-55c910930384.jpeg" alt="">
                      </figure>
                    </div>
                    <div class="desc-content">
                      <a href="">Мелки восковые, 6 цветов</a>
                      <p class="color-gray">R8480AC1048K</p>
                      <span class="price">182 сум</span>
                    </div>
                  </div>
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
      title: "Акссесуары",
      meta: [
        {
          content: "Акссесуары"
        }
      ],
    }
  },
  // async asyncData(context){
  //   try{
  //     const page_data = await context.store.dispatch("other/fetchPath", {
  //       path: context.route.path
  //     });
  //     return {
  //       page_data
  //     }
  //   }catch(e){
  //     context.error(e);
  //   }
  // },
  data(){
    return{

    }
  },
  created(){

	},
  mounted() {
		var v = this;
		$('.config-sidebar').theiaStickySidebar({
			//additionalMarginBottom: -300,
			additionalMarginTop: 60,
			defaultPosition: "absolute"
		});

		$('[style="transform: none;"]').removeAttr("style")
  },
}
</script>
