<template>
  <div class="main-body offset-header" header-opacity>
    <div class="dealer">
      <div class="kiaworld-bnr color-white bg-shadow-none" style="background-image: url('https://cdn.kia.ru/media-data/landing/dealer/1920.jpg');">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="/about">Мир KIA</nuxt-link></li>
              <li><nuxt-link to="">Стать дилером</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header">
            <h1>Стать дилером</h1>
          </div>
        </div>
      </div>
      <div class="block-content">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="flex-adaptive justify-c-between inline-ul">
            <div v-html="page.description"></div>
          </div>
        </div>
      </div>
      <div class="block-content bg-color-gray-1">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="entry-header">
            <div class="text-x4 mb-6 desktop1440:mb-6">Список документов для кандидатов в дилеры</div>
            <p>Обращаем Ваше внимание на то, что выбор дилера в каждом регионе проводится на конкурсной основе и в соответствии с приоритетными направлениями развития бизнеса. Для более плодотворного сотрудничества кандидат в дилеры предоставляет специалисту по развитию дилерской сети следующие документы:</p>
          </div>
          <div class="flex-adaptive">
            <div class="item-link mv-4 desktop:mv-8 desktop:mr-4">
              <a href="https://cdn.kia.ru/media-data/landing/dealer/Regulations_on_the_procedure_for_obtaining_the_status_of_the_dealer_KMR.pdf" target="_blank" download="" class="file-download align-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__icon"><path d="M2.75.75h9.94l4.56 4.56v13.94H2.75V.75z" stroke="currentColor" stroke-width="1.5"></path><path d="M12.5 1v5h4" stroke="currentColor" stroke-width="1.5"></path></svg> 
                <span class="flex fw-6 m-l-15">
                  Порядок получения статуса дилера
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__arrow"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
              </a>
            </div>
            <div class="item-link mv-4 desktop:mv-8 desktop:mr-4">
              <a href="https://cdn.kia.ru/media-data/landing/dealer/KIA_dealership_application_template.rar" target="_blank" download="" class="file-download align-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__icon"><path d="M2.75.75h9.94l4.56 4.56v13.94H2.75V.75z" stroke="currentColor" stroke-width="1.5"></path><path d="M12.5 1v5h4" stroke="currentColor" stroke-width="1.5"></path></svg> 
                <span class="flex fw-6 m-l-15">
                  Анкета кандидата
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__arrow"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
              </a>
            </div>
          </div>
          <div>
            <p>Заполненные документы необходимо отправить по электронной почте:</p>
            <div><a href="mailto:contact@kia.ru" class="hover-aunderline"><b>contact@kia.ru</b></a></div>
          </div>
        </div>
      </div>
      <div class="block-content">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="text-x4 mb-6 desktop1440:mb-6">Преимущества</div>
          <div class="text-content">
            <ul class="ul-common">
              <li>KIA в России – бренд № 1 по продажам новых автомобилей среди иностранных брендов по данным АЕВ с 2014 года. </li>
              <li>В 2017-2018 году KIA получила целый ряд престижных наград в области качества и надежности от авторитетного агентства J.D. Power. </li>
              <li>Дилерская сеть имеет широкое географическое покрытие и насчитывает около 200 современных, хорошо оснащенных и комфортных для клиентов дилерских центров. </li>
              <li>В 2019 году обновлены корпоративные стандарты, подчеркивающие динамичное развитие и инновационные технологии бренда. </li>
              <li>Модельный ряд KIA - один из самых широких на российском рынке, и постоянно обновляется, что делает его сбалансированным и востребованным. </li>
              <li>Дистрибьютор проводит взвешенную ценовую политику и масштабные коммуникации. </li>
              <li>Специальные программы для клиентов: 5-летняя гарантия на автомобили (или 150 000 км пробега), программа помощи на дорогах – KIA Road Assistance. </li>
              <li>Программы автокредитования KIA Finance и фирменная программа продаж автомобилей с пробегом «КИА Уверен». </li>
              <li>KIA занимает лидирующие позиции по уровню узнаваемости бренда, удовлетворенности и лояльности клиентов. </li>
              <li>Более 70% дилеров КIA работают с нашим брендом уже более 5 лет, что говорит о долгосрочном успешном партнерстве. </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block-content bg-color-gray-1">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="text-x4 mb-6 desktop1440:mb-6">Наши ожидания от кандидатов в дилеры </div>
          <div class="text-content">
            <ul class="ul-common">
              <li>Опыт работы в автомобильном бизнесе (предпочтительно в качестве официального дилера иностранного бренда).</li>
              <li>Профессиональный коллектив.</li>
              <li>Эффективная управленческая команда.</li>
              <li>Стабильное финансовое положение.</li>
              <li>Инвестиционный потенциал для строительства дилерского центра согласно корпоративным стандартам KIA. Возможна реконструкция уже имеющихся помещений и доведение их до действующих стандартов.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block-content dealer-steps">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="text-x4 mb-6 desktop1440:mb-6">Как стать дилером</div>
          <div class="list-content">
            <div class="item">
              <div class="item-header flex flexbasis-md-3 text-s1">
                <div class="num">01</div>
                <div>
                  <b>Заполнить анкету</b>
                </div>
              </div>
              <div class="item-text">
                <p>Первым этапом сотрудничества является заполнение анкеты кандидата.</p>
                <div class="mt-6">
                  <a href="https://cdn.kia.ru/media-data/landing/dealer/KIA_dealership_application_template.rar" target="_blank" download="" class="file-download align-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__icon"><path d="M2.75.75h9.94l4.56 4.56v13.94H2.75V.75z" stroke="currentColor" stroke-width="1.5"></path><path d="M12.5 1v5h4" stroke="currentColor" stroke-width="1.5"></path></svg> 
                    <span class="flex fw-6 m-l-15">
                      Загрузить анкету
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="file-download__arrow"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header flex flexbasis-md-3 text-s1">
                <div class="num">02</div>
                <div>
                  <b>Отправить анкету</b>
                </div>
              </div>
              <div class="item-text flexbasis-md-9">
                <p>Заполненную анкету необходимо отправить по электронной почте</p>
                <div>
                  <a href="mailto:contact@kia.ru" class="hover-aunderline"><strong>contact@kia.ru</strong></a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header flex flexbasis-md-3 text-s1">
                <div class="num">03</div>
                <div>
                  <b>Предварительное одобрение анкеты</b>
                </div>
              </div>
              <div class="item-text flexbasis-md-9">
                <p>После получения заполненной с Вашей стороны анкеты и предварительного одобрения со стороны дистрибьютора Вам будет отправлена более подробная информация по условиям сотрудничества. На этом этапе мы поможем Вам определить, как построить дилерский центр в соответствии с архитектурными и строительными стандартами KIA, как наиболее эффективно организовать производственный процесс на уже существующем дилерском предприятии.</p>
              </div>
            </div>
            <div class="item">
              <div class="item-header flex flexbasis-md-3 text-s1">
                <div class="num">04</div>
                <div>
                  <b>Подпишите документы</b>
                </div>
              </div>
              <div class="item-text flexbasis-md-9">
                <p>При положительном решении со стороны КИА Моторс Россия и СНГ с кандидатом в дилеры подписывается «Протокол о намерениях» по реализации проекта открытия официального дилера в регионе, с описанием процедуры и сроков исполнения.</p>
              </div>
            </div>
          </div>
          <div class="mv-6">
            <div class="text-x4 mb-6 desktop1440:mb-6">Дополнительно</div>
            <div class="text-item">
              <p>На всех этапах реализации Протокола о намерениях кандидат предоставляет дистрибьютору подробную информацию о ходе реализации проекта. Дистрибьютор вправе осуществлять контроль за ходом реализации проекта. Несоблюдение принципиальных положений «Протокола о намерениях», наличие значительных выявленных отклонений от эскизного проекта или существенный срыв календарного графика являются для Дистрибьютора достаточным основанием для расторжения достигнутых договорённостей в одностороннем порядке на любом этапе реализации проекта.</p>
              <p>Мы приглашаем Вас к сотрудничеству и обязательно ответим на Ваши вопросы.</p>
              <p>С пожеланием успешного сотрудничества,</p>
              <p>Отдел развития дилерской сети.</p>
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
      title: "Как стать официальным дилером KIA",
      meta: [
        {
          content: "Как стать официальным дилером KIA"
        }
      ],
    }
  },
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
}

</script>

