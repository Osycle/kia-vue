<template>
  <div class="main-body offset-header" header-opacity>
    <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/about/">Мир Kia</nuxt-link></li>
            <li><nuxt-link to="">Технологии</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header" v-html="page_data.header.text"></div>
      </div>
    </div>
    <div class="block-content">
      <div class="container-p">
        <div class="wrapper p-v-md-50 flex-adaptive p-h-md-110 list-check justify-c-center">
          <div class="box-md-5 box-lg-8 m-v-30 p-h-15 text-item intext" v-html="page_data.header.text_two"></div>
        </div>
      </div>
    </div>
    <div class="block-content">
      <div class="container-p">
        <hr>
        <div class="wrapper pv-5">
          <div class="select-def mb-6" v-if="false">
            <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">
            <multiselect   
              v-model="modelsSelectValue" 
              :options="modelsSelectOptions"
              track-by="name"
              deselect-label=""
              selectLabel=""
              selectedLabel=""
              placeholder="Выберите"
              label="name">
              <template slot-scope="{ option }">
                <span>{{ option.name }}</span>
              </template>
            </multiselect>
          </div>
          <div class="short-models-nav mv-4 row">
            <ul class="list flex-adaptive justify-c-start li-m-v-15">
              <!-- <li :class="{'active': !currentGroup.id}">
                <a href="#" data-toggle="tab">Все технологии</a>
              </li> -->
              <li v-for="(item, key) in page_data.content" :key="key" :class="{'active in': key == 0}">
                <a :href="'#news-tab-'+key" data-toggle="tab">{{item.name}}</a>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div v-for="(content, keyParent) in page_data.content" 
              class="tab-pane fade" :class="{'active in': keyParent == 0}"
              :id="'news-tab-'+keyParent"
              :key="keyParent">
              <div class="short-news-items boxes-4 boxes-ex-6 figure-m-v-15">
                <template v-for="(item, key) in content.articles">
                  <figure :key="key">
                    <nuxt-link :to="'/about/technologies/'+item.id">
                      <div class="fig-wrapper">
                        <div class="img-content">
                          <div class="img" :style="'background-image: url('+item.image+');'"></div>
                        </div>
                        <div class="desc-content">
                          <h4>{{item.name}}</h4>
                          <div class="color-gray-4 mv-3">{{content.name}}</div>
                        </div>
                      </div>
                    </nuxt-link>
                  </figure>
                </template>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <KiaworldOther :kiaworld-other-items="page_data.footer" />

  </div>
</template>


<script>


import KiaworldOther from "@/components/kiaworld/KiaworldOther";
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
  components:{
    KiaworldOther,
  },
  data(){
    return {
      modelsSelectValue: null,
      modelsSelectOptions: [],
      currentGroup: {},
    }
  },
  created(){ 
    //page.technology_groups
    //this.modelsSelectOptions = this.page.model_lines;
  },
  mounted(){
    
  },
  methods: {

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



<style lang="scss" scoped>
  .select-def{
    width: 310px;
  }
</style>