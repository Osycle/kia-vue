<template>
  <div class="main-body offset-header">
			<div class="press">
				<div class="container-p">
					<div class="entry-header m-v-30">
						<h1 class="	text-x5">Медиа-центр</h1>
					</div>
					<div class="short-models-nav m-v-30">
						<ul class="list flex-adaptive li-m-v-15">
							<li v-for="(item, key) in page.media_center_groups" :key="key" :class="{'active': item.code == $route.params.id}">
								<nuxt-link :to="'/press/'+item.code">{{item.name}}</nuxt-link>
							</li>
						</ul>
					</div>
					<hr>
					<div class="tab-content m-v-20">
						<div class="tab-pane fade in active" id="news-1-1">
							<div class="short-news-items boxes-4 figure-m-v-15">
								<figure v-for="(item, key) in page.media_center[$route.params.id]" :key="key">
									<nuxt-link :to="'/press/news/'+item.code">
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
							<div class="btn-opacity reverse m-v-30">
								<a href="">Показать ещё</a>
							</div>
							<br>
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
      title: "Как стать официальным дилером KIA",
      meta: [
        {
          content: "Как стать официальным дилером KIA"
        }
      ],
    }
  },
  async asyncData(context){
    var url = 'https://www.kia.ru/ajax/page/mediacenter/'+context.params.id;
    try{
      const page = await context.$axios.$get(url, {
        params:{
          limit: 24,
          page: 1
        }
      })
      return {page: page.content}
    }catch(error){
      console.error(error);
    }
  },
}

</script>