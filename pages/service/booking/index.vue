<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="">Запись на сервис</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="feedback">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="	text-x5">Запись на сервис</h1>
        </div>
      </div>
      <div class="feedback-content">
        <div class="container-p">
          <div class="flex-wrapper">
            <div class="col-2 p-v-20">
              <div class="form-content box-md-5 m-auto">
                <form action="https://cdn.kia-motors.uz/feedback.php" method="POST" formaj>
                  <input type="text" :value="new Date().getFullYear()" name="anti-bot-a" class="hide">
                  <input type="text" value="serviceBooking" name="type" class="hide">
                  <div class="text-s1-b">Данные автомобиля</div>
                  <div class="input-content">
                    <div class="models-filter m-v-30">
                      <select class="js-select" name="carName" required>
                        <option value="">Модельный ряд</option>
                        <option>K5</option>
                        <option>Seltos</option>
                        <option>Stinger</option>
                        <option>Sorento</option>
                        <option>Soul</option>
                        <option>Carnival</option>
                      </select>
                    </div>
                  </div>
                  <div>Тип работы</div>
                  <div class="input-content">
                    <div class="models-filter m-v-30">
                      <select class="js-select" name="question" required>
                        <option value="">Выберите тип работы</option>
                        <option>ТО</option>
                        <option>Механический ремонт</option>
                        <option>Кузовной ремонт</option>
                        <option>Комплексная диагностика</option>
                        <option>Шиномонтаж</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-content m-v-30">
                    <input type="text" name="name" placeholder="Имя *"  class="form-control" required>
                  </div>
                  <div class="input-content m-v-30">
                    <input value="" name="phone" type="text" class="form-control" v-facade="'+### (##) ###-##-##'" placeholder="+998 (__) ___−__−__" required minlength="19">
                  </div>
                  <div class="input-content">
                    <textarea type="comment" placeholder="Ваш комментарий или вопрос" class="form-control"></textarea>
                  </div>
                  <div class="iagree m-v-30">
                    <label class="flex" role="button">
                      <input type="checkbox" name="" class="hide" required>
                      <span class="checkbox-style-1"></span>
                      <span class="p-l-20">
                        Отправляя сообщение, я выражаю свое согласие и разрешаю ООО 'Roodell', а также, по их поручению, третьим лицам осуществлять обработку моих персональных данных (фамилия, имя, отчество, год, месяц, дата и место рождения; адрес, номер паспорта и сведения о дате выдачи паспорта и выдавшем его органе; образование, профессия, место работы и должность; домашний, рабочий и мобильный телефоны; адрес электронной почты и другие данные, требуемые для отправки сообщения), включая сбор, систематизацию, накопление, хранение, уточнение, использование, распространение (в том числе трансграничную передачу), обезличивание, уничтожение персональных данных), в целях связанных с возможностью предоставления информации о товарах и услугах, которые потенциально могут представлять интерес, а также в целях сбора и обработки статистической информации и проведения маркетинговых исследований. Согласие на обработку персональных данных в соответствии с указанными выше условиями я предоставляю на 10 (десять) лет. Я уведомлен и согласен с тем, что указанное согласие может быть мной отозвано посредством направления письменного заявления заказным почтовым отправлением с описью вложения, либо вручено лично под подпись.
                      </span>
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
  head() {
    return {
      title: "Запись на сервис",
      meta: [
        {
          content: "Запись на сервис Kia"
        }
      ],
    }
  },
}
</script>
