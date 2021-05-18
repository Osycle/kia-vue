<template>
  <div class="main-body offset-header">
			<div class="news-article">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link :to="'/press/'+$route.params.id">Новости</nuxt-link></li>
            </ol>
          </div>
        </div>
				<div class="container-p">
					<div class="entry-header text-center mv-6 desktop:pb-4 box-lg-8 m-auto">
            <div class="date-content text-center mb-3">
              <p>{{ new Date(page_data.date*1000) | dateFormat('D MMMM YYYY')}}</p>
            </div>
						<h2>{{page_data.title}}</h2>
					</div>
					<div class="entry-content box-lg-8 m-auto mv-6 text-item desktop:pb-4">
						<div class="box-lg-7 m-auto">
              <img :src="page_data.image" :alt="page_data.title">
              <div v-html="page_data.content"></div>
						</div>
					</div>
				</div>
        <div class="container-p" v-if="false">
          <div class="m-auto box-md-8 box-lg-7 mv-6 desktop:pb-3">
            <h2>Будьте вкурсе</h2>
						<div class="short-news-items boxes-3 mt-3 figure-m-v-15">
							<figure v-for="(item, key) in page.featured" :key="key">
								<nuxt-link :to="'/press/'+$route.params.id+'/'+item.code">
									<div class="fig-wrapper">
										<div class="img-content">
											<div class="img" :style="'background-image: url(https://cdn.kia.ru/resize/410x277/'+item.image+');'"></div>
										</div>
										<div class="desc-content">
											<h4>{{item.name}}</h4>
											<p class="news-date">{{ new Date(item.date*1000) | dateFormat('D MMMM YYYY')}}</p>
										</div>
									</div>
								</nuxt-link>
							</figure>
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
      title: this.page_data.seo ? this.page_data.seo.meta_title : 'Новость KIA',
      meta: [
        {
          content: this.page_data.seo ? this.page_data.seo.meta_description : 'Новость KIA',
        }
      ],
    }
  },
  async asyncData(context){

    var page;
    try{
      //var url = "press/news/"+context.params.article_id;
      const page_data = await context.store.dispatch("other/fetchPath", {
        path: context.route.path
      });
      return {
        page_data
      }
    }catch(error){
      console.error(error);
    }
  },
}

</script>