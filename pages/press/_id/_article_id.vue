<template>
  <div class="main-body offset-header">
			<div class="news-article">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link :to="'/press/'+$route.params.id">Новости</nuxt-link></li>
              <li><nuxt-link to="">{{page[$route.params.id].name}}</nuxt-link></li>
            </ol>
          </div>
        </div>
				<div class="container-p">
					<div class="entry-header text-center mv-6 desktop:pb-4 box-lg-8 m-auto">
            <div class="date-content text-center mb-3">
              <p>{{ new Date(page[$route.params.id].date*1000) | dateFormat('D MMMM YYYY')}}</p>
            </div>
						<h2>{{page[$route.params.id].name}}</h2>
					</div>
					<div class="entry-content box-lg-8 m-auto mv-6 text-item desktop:pb-4">
						<div class="box-lg-7 m-auto">
              <div v-html="page[$route.params.id].detail_text"></div>
						</div>
					</div>
				</div>
        <div class="container-p hide">
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
      title: this.page.seo.title,
      meta: [
        {
          content: this.page.seo.content
        }
      ],
    }
  },
  async asyncData(context){

    var page;
    try{
      //console.log(context.params.article_id);
      if(!context.params.article_id.match("news")){
        var url = 'https://www.kia.ru/ajax/page/mediacenter/'+context.params.id+"/"+context.params.article_id;  
        page = await context.$axios.$get(url, {
          params:{
            limit: 24,
            page: 1
          }
        })
      }else{
        var url = context.params.id+"/"+context.params.article_id;
        page = await context.$axios.$get("requireJson.php", {
          params:{
            path: url+".json"
          }
        }, {});
      }


      console.log(page.content);
      return {page: page.content}
    }catch(error){
      console.error(error);
    }
  },
}

</script>