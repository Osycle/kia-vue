<template>
  <div class="main-body offset-header">
			<div class="press">
				<div class="container-p">
					<div class="entry-header  desktop:pt-5 mv-4">
						<h1 class="text-x5">Медиа-центр</h1>
					</div>
					<div class="short-models-nav m-v-30">
						<ul class="list flex-adaptive li-m-v-15">
							<li :class="{'active': 'news' == $route.params.id}">
								<nuxt-link to="/press/news">Новости</nuxt-link>
							</li>
							<li :class="{'active': 'reviews' == $route.params.id}">
								<nuxt-link to="/press/reviews">Видео-обзоры</nuxt-link>
							</li>
						</ul>
					</div>
					<hr>
					<div class="press-content m-v-20" v-if="false">
						<div class="short-news-items boxes-4 figure-m-v-15">
							<figure v-for="(item, key) in page.media_center[$route.params.id]" :key="key" v-if="page.media_center[$route.params.id].length != 0">
								<nuxt-link :to="'/press/'+$route.params.id+'/'+item.code">
									<div class="fig-wrapper">
										<div class="img-content">
											<div class="img" v-if="item.direct_link" :style="'background-image: url('+item.image+');'"></div>
											<div class="img" v-else :style="'background-image: url(https://cdn.kia.ru/resize/410x277/'+item.image+');'"></div>
										</div>
										<div class="desc-content">
											<h4>{{item.name}}</h4>
											<p class="news-date">{{ new Date(item.date*1000) | dateFormat('D MMMM YYYY')}}</p>
										</div>
									</div>
								</nuxt-link>
							</figure>
							<template v-if="page.video_bank">
								<template v-for="(videogroup) in page.video_bank.groups">
									<figure v-for="(overview, key) in page.video_bank.list[videogroup.id]" :key="key">
										<div class="fig-wrapper">
											<div class="img-content">
												<a :href="[overview.video_link]" data-fancybox>
													<div class="btn-play">
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
													</div>
													<div class="img" :style="'background-image: url(https://cdn.kia.ru/resize/410x277/'+[overview.preview_image]+');'"></div>
												</a>
											</div>
											<div class="desc-content">
												<h4>{{overview.name}}</h4>
												<p>{{overview.author}}</p>
												<p class="news-date">{{ new Date(overview.date*1000) | dateFormat('D MMMM YYYY')}}</p>
											</div>
										</div>
									</figure>
								</template>
							</template>
						</div>
						<div class="btn-opacity reverse m-v-30 hide">
							<a href="" class="pv-2">Показать ещё</a>
						</div>
						<br><br>
					</div>
				</div>
			</div>
  </div>
</template>



<script>



export default {
  head() {
    return {
      title: 'Новости',
      meta: [
        {
          content: 'Новости'
        }
      ],
    }
  },
  async asyncData(context){
    //var url = 'https://www.kia.ru/ajax/page/mediacenter/'+context.params.id;
    try{
      const path = context.route.path
      const page_data = await context.store.dispatch("storedispatcher/newsFetch", {
        path
      })
      return {
				page_data
			}
    }catch(error){
      console.error(error);
    }
  },
	created(){

	}
}

</script>