<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/models/">Модели</nuxt-link></li>
          <li><nuxt-link :to="'/models/'+$route.params.id+'/desc'">{{page.model.name}}</nuxt-link></li>
          <li><nuxt-link :to="'/models/'+$route.params.id+'/callback'">Обратный звонок</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="feedback">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="	text-x5">Обратный звонок</h1>
        </div>
      </div>
      <div class="feedback-content">
        <div class="container-p">
          <div class="flex-wrapper">
            <div class="col-1 p-v-20">
              <h3>{{page.model.name}}</h3>
              <div class="img-content text-center">
                <img :src="'https://cdn.kia.ru/resize/300x200/'+page.model.image_side_view">
              </div>
              <div class="prive-content align-center justify-c-between m-v-20">
                <span>Стоимость авто</span>
                <big><b>от {{page.model.min_price | spaceBetweenNum}} сум</b></big>
              </div>
            </div>	
            <div class="col-2 p-v-20">
              <p>
                <b>Ваши контакты</b><br>
                <small class="color-gray">Поля, отмеченные *, обязательны для заполнения</small>
              </p>
              <div class="form-content box-md-6">
                <form action="https://cdn.kia-motors.uz/feedback.php" method="POST" formaj>
                  <input type="text" name="anti-bot-a" :value="new Date().getFullYear()" class="hide">
                  <input type="text" name="type" value="modelCallBack" class="hide">
                  <input type="text" :value="page.model.name" name="carName" class="hide">
                  <div class="input-content m-v-30">
                    <input type="text" name="name" placeholder="Имя *"  class="form-control" required>
                  </div>
                  <div class="input-content m-v-30">
                    <input value="+998" name="phone" type="text" class="form-control" v-facade="'+### (##) ###-##-##'" placeholder="+998 (__) ___−__−__" required>
                  </div>
                  <div class="input-content">
                    <div class="models-filter m-v-30">
                      <select class="js-select" name="question" required>
                        <option value="">Выберите тип вопроса</option>
                        <option>Наличие и процесс поставки автомобиля Kia</option>
                        <option>Наличие и стоимость запасных частей и аксессуаров Kia</option>
                        <option>Сервисное обслуживание (ТО, гарантия, эксплуатация)</option>
                        <option>Условия кредитования и страхования</option>
                        <option>Прохождение тест-драйва</option>
                        <option>Другое</option>
                        <option>Спецификация и стоимость автомобиля Kia</option>
                        <option>Условия для корпоративных клиентов</option>
                        <!-- <option v-for="(calltype, key) in page.call_types" :key="key" :value="calltype.code">{{calltype.name}}</option> -->
                      </select>
                    </div>
                  </div>
                  <div class="input-content">
                    <textarea name="comment" placeholder="Ваш комментарий или вопрос" class="form-control"></textarea>
                  </div>
                  <div class="iagree m-v-30">
                    <label class="flex" role="button">
                      <input type="checkbox" name="iagree" class="hide" required>
                      <span class="checkbox-style-1"></span>
                      <span class="p-l-20">{{page.agreement.text}}</span>
                    </label>
                  </div>
                  <span class="btn-def">
                    <button type="submit">Отправить заявку</button>
                  </span>
                </form>
                <div class="form-success-block">
                  <div class="form-success-block-wrapper pv-10">
                    <h3>Заявка успешно отправлена!</h3>
                    <br>
                    <p>Спасибо за заявку! Рассмотрение займет не больше одного рабочего дня, но обычно мы справляемся быстрее. Как только все будет готово, менеджер свяжется с вами.</p>
                    <span class="btn-def mv-8">
                      <nuxt-link :to="'/'" class="hover-aunderline"><b>Вернуться на главную</b></nuxt-link>
                    </span>
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
  mounted(){
    
  },
  head() {
    return {
      title: this.page.seo.title ? this.page.seo.title : 'Заявка на модель Kia',
      meta: [
        {
          content: this.page.seo.description ? this.page.seo.description : 'Заявка на модель Kia'
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  .breadcrumb-container{
    padding-top: 20px;
  }
</style>