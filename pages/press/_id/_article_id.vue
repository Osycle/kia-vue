<template>
  <div class="main-body offset-header">
			<div class="news-article">
				<div class="container-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos reprehenderit odit dolorum, aut cumque natus quaerat numquam atque dolore dicta sint earum obcaecati, dolores ut aspernatur sed blanditiis enim. Ipsum.
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
    var url = 'https://www.kia.ru/ajax/page/mediacenter/'+context.params.id+"/"+context.params.article_id;
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