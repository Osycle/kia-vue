<template>
  <div class="main-body offset-header" header-opacity>
    <div class="dealer">
      <div class="kiaworld-bnr color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="/about/">Мир Kia</nuxt-link></li>
              <li><nuxt-link to="">Стать дилером</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header" v-html="page_data.header.text"></div>
        </div>
      </div>
      <div class="block-content">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="flex-adaptive justify-c-between inline-ul">
            <div v-html="page_data.header.under"></div>
          </div>
        </div>
      </div>

      <div class="block-content bg-color-gray-1">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="entry-header">
            <div class="text-x4 mb-6 desktop1440:mb-6">{{page_data.blocks[0].name}}</div>
            <div v-html="page_data.blocks[0].text"></div>
          </div>
          <div class="flex-adaptive">
            <div class="item-link mv-4 desktop:mv-8 desktop:mr-4" v-for="(item, key) in page_data.blocks[0].files" :key="key">
              <a :href="item.url" target="_blank" download="" class="file-download align-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__icon"><path d="M2.75.75h9.94l4.56 4.56v13.94H2.75V.75z" stroke="currentColor" stroke-width="1.5"></path><path d="M12.5 1v5h4" stroke="currentColor" stroke-width="1.5"></path></svg> 
                <span class="flex fw-6 m-l-15">
                  {{item.name}}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__arrow"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
              </a>
            </div>
          </div>
          <div v-html="page_data.blocks[0].under"></div>
        </div>
      </div>
      
      <div class="block-content">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="text-x4 mb-6 desktop1440:mb-6">{{page_data.blocks[1].name}}</div>
          <div class="text-content" v-html="page_data.blocks[1].text"></div>
        </div>
      </div>

      <div class="block-content bg-color-gray-1">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="text-x4 mb-6 desktop1440:mb-6">{{page_data.blocks[2].name}}</div>
            <div class="text-content" v-html="page_data.blocks[2].text"></div>
        </div>
      </div>
      
      <div class="block-content dealer-steps">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="text-x4 mb-6 desktop1440:mb-6">{{page_data.blocks[3].name}}</div>
          <div class="list-content">
            <div class="item" v-for="(item, key) in page_data.blocks[3].content" :key="key">
              <div class="item-header flex flexbasis-md-3 text-s1-b">
                <div class="num">{{item.number}}</div>
                <div>
                  <b>{{item.name}}</b>
                </div>
              </div>
              <div class="item-text">
                <div v-html="item.content"></div>
                <div class="mt-6" v-if="item.files">
                  <a :href="item.files.url" target="_blank" download="" class="file-download align-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__icon"><path d="M2.75.75h9.94l4.56 4.56v13.94H2.75V.75z" stroke="currentColor" stroke-width="1.5"></path><path d="M12.5 1v5h4" stroke="currentColor" stroke-width="1.5"></path></svg> 
                    <span class="flex fw-6 m-l-15">
                      {{item.files.name}}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__arrow"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mv-6">
            <div class="text-x4 mb-6 desktop1440:mb-6">Дополнительно</div>
            <div class="text-item" v-html="page_data.blocks[3].under"></div>
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
}

</script>

