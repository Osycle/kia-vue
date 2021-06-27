<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.header.title}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <h1 class="box-md-5">{{page_data.header.title}}</h1>
        </div>
      </div>
    </div>
    <div class="special-info">
      <div class="container-p">
        <div class="warranty-block wrapper p-v-md-50 p-h-md-110 list-check">
          <div class="box-lg-8 m-auto m-v-30 p-h-15">
            <div class="text-item mv-10" >
              <div class="entry-header">
                <div class="text-n1 color-1 mb-2">{{page_data.content[0].alias}}</div>
                <div class="fw-6 text-x5 mb-4 desktop:mb-6">{{page_data.content[0].title}}</div>
              </div>
              <div class="text-s2i" v-html="page_data.content[0].content[0].text"></div>
              <div class="img-first mv-15">
                <div class="mb-6 flex-adaptive align-center" >
                  <div class="img" v-html="page_data.content[0].content[1].left">
                  </div> 
                  <div class="text-x3 mt-4 desktop:ml-10 fw-7" v-html="page_data.content[0].content[1].right"></div>
                </div>
              </div>
              <div class="text-s2i" v-html="page_data.content[0].content[2].text"></div>
            </div>
            <hr>
            <div class="text-item mv-10">
              <div class="entry-header">
                <div class="fw-6 text-x4 mb-4 desktop:mb-6">{{page_data.content[1].title}}</div>
              </div>
              <div class="text-s2i" v-html="page_data.content[1].content[0].text"></div>
              <div class="img-first mv-10">
                <div class="mb-6 flex-adaptive align-center">
                  <div class="img" v-html="page_data.content[1].content[1].left"></div>
                  <div class="text-x3 mt-4 desktop:ml-20 desktop:pl-10 fw-7" v-html="page_data.content[1].content[1].right"></div>
                </div>
              </div>
              <div class="text-s2i" v-html="page_data.content[1].content[2].text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wa-advantages bg-color-gray-1">
      <div class="container-p pv-13">
        <div class="entry-header text-center mb-10">
          <div class="text-x5 fw-7">{{page_data.features.title}}</div>
        </div>
        <div class="wa-advantages-items boxes-3">
          <div class="cell desktop:mv-6" v-for="(cell, key) in page_data.features.content" :key="key">
            <div class="flex desktop:fd-columm">
              <div class="img-content mv-4" v-html="cell.icon"></div>
              <div class="desc-content mv-4 mobile:ml-5 box-md-8 box-lg-6">
                <div class="text-s2i" v-html="cell.text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-p">
      <div class="wrapper p-v-md-50 p-h-md-110">
        <div class="box-lg-8 m-auto m-v-30 p-h-15">
          <div class="acc-def mv-3 text-item">
            <div class="acc-item" v-for="(item, key) in page_data.accordion" :key="key">
              <a href=".acc-item" class="title-click" tc tc-closest>{{item.title}}<i class="fa fa-angle-up"></i></a>
              <div class="acc-body">
                <div class="acc-body-wrapper" v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-content relative mv-15">
        <div class="bg-video-content-2 text-center">
          <a :href="page_data.video.url" data-fancybox="">
            <div class="btn-play">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
            </div>
          </a>
          <div class="img-content">
            <img :src="page_data.video.image" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-p">
      <div class="entry-header">
        <div class="text-x4 fw-7">Может быть полезным</div>
      </div>
      <div class="services-items boxes-4 serried figure-m-v-15 mv-4 pb-8 desktop:mb-12">
        <div class="cell">
          <nuxt-link to="/dealers">
            <div class="item-wrapper align-center desktop:jc-center">
              <div class="icon-content">
                <svg  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path  d="M6 14v29h38V14M32 8h14v6H33m-16 0H4V8h14" stroke="currentColor" stroke-width="2"></path><path  d="M34 11.5c0 1.345-.84 2.695-2.474 3.758C29.901 16.314 27.596 17 25 17c-2.596 0-4.901-.686-6.526-1.742C16.839 14.195 16 12.845 16 11.5c0-1.345.84-2.695 2.474-3.758C20.099 6.686 22.404 6 25 6c2.596 0 4.901.686 6.526 1.742C33.161 8.805 34 10.155 34 11.5zM17 28h16v15H17zM25 28v15" stroke="currentColor" stroke-width="2"></path><path  fill="currentColor" d="M16 22h18v2H16z"></path></svg>
              </div>
              <div class="desc-content ml-2">
                <span class="mv-4 fw-6 text-s1 align-center">
                  <span class="this-btn">Поиск дилера</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="cell">
          <nuxt-link to="/service/booking">
            <div class="item-wrapper align-center desktop:jc-center">
              <div class="icon-content">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 4H4v39h7v-2H6V6h24v4h2V4z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33 19H16v-2h17v2zM33 24H16v-2h17v2zM27 29H16v-2h11v2zM27 34H16v-2h11v2z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 12h25v13.678l2-2V10H10v37h29V32.163l-2 2V45H12V12z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.183 21.324l1.414 1.414-11.704 11.704-1.414-1.415 11.704-11.703zm0-2.829l4.242 4.243L33.894 37.27l-4.242-4.243 14.532-14.532zM33 38l-4-4v4h4zM27 39H16v-2h11v2z" fill="currentColor"></path></svg>
              </div>
              <div class="desc-content ml-2">
                <span class="mv-4 fw-6 text-s1 align-center">
                  <span class="this-btn">Запись на сервис</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="cell">
          <nuxt-link to="/service/spares/">
            <div class="item-wrapper align-center desktop:jc-center">
              <div class="icon-content">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><path d="M49.446 22.226A22.655 22.655 0 0039.42 7.938 22.793 22.793 0 0028.91 4.444a4.426 4.426 0 00-.235-1.089A4.325 4.325 0 0025.02.475L20.886.042a7.514 7.514 0 00-6.122 2.168L2.211 14.764a7.514 7.514 0 00-2.17 6.122l.434 4.133a4.325 4.325 0 002.88 3.656c.36.127.725.205 1.09.238a22.8 22.8 0 0010.507 17.52 22.664 22.664 0 0012.196 3.553c7.549 0 14.945-3.738 19.285-10.567a22.658 22.658 0 003.013-17.193zM9.891 25.65l5.1-5.099a1.032 1.032 0 001.354-.357h-.002a1.04 1.04 0 00.047-1.043l3.284-3.284a1.044 1.044 0 001.157.092 1.04 1.04 0 00.302-1.55l4.518-4.519c3.834-.345 7.577.565 10.847 2.642 8.078 5.135 10.474 15.886 5.34 23.965a17.247 17.247 0 01-10.877 7.633 17.247 17.247 0 01-13.088-2.294 17.304 17.304 0 01-6.397-7.258 17.418 17.418 0 01-1.585-8.928zm-7.349-.848l-.433-4.134a5.443 5.443 0 011.571-4.435L16.234 3.68a5.443 5.443 0 014.435-1.571l4.134.433a2.235 2.235 0 011.913 1.507c.3.85.1 1.738-.538 2.375L6.424 26.178a2.235 2.235 0 01-2.375.537 2.235 2.235 0 01-1.507-1.912zM44.68 38.304c-3.945 6.207-10.666 9.604-17.527 9.604a20.605 20.605 0 01-11.085-3.229 20.726 20.726 0 01-9.562-16.091c.45-.192.873-.462 1.249-.806a19.508 19.508 0 001.84 7.68 19.38 19.38 0 007.164 8.13 19.306 19.306 0 0010.39 3.04c1.418 0 2.848-.157 4.265-.472a19.313 19.313 0 0012.18-8.547c5.748-9.046 3.066-21.084-5.98-26.834a19.513 19.513 0 00-9.836-3.023c.347-.377.618-.8.81-1.253a20.71 20.71 0 019.717 3.19 20.59 20.59 0 019.113 12.985 20.594 20.594 0 01-2.738 15.626z" fill="currentColor" ></path><path d="M21.589 35.991a10.364 10.364 0 007.866 1.379 10.365 10.365 0 006.537-4.588 10.366 10.366 0 001.378-7.866 10.365 10.365 0 00-4.587-6.537c-4.856-3.086-11.317-1.646-14.404 3.21-3.086 4.855-1.646 11.316 3.21 14.402zm-1.455-13.288a8.357 8.357 0 017.065-3.871c1.532 0 3.082.42 4.469 1.301a8.301 8.301 0 013.673 5.235 8.3 8.3 0 01-1.104 6.3 8.3 8.3 0 01-5.234 3.673 8.302 8.302 0 01-6.3-1.104c-3.888-2.471-5.04-7.645-2.57-11.534zM40.025 32.705a1.038 1.038 0 10.679-1.964 1.04 1.04 0 10-.68 1.964zM38.41 19.956a1.041 1.041 0 00.837-1.656 1.04 1.04 0 10-.836 1.656zM40.965 26.118a1.038 1.038 0 10.003-2.076 1.038 1.038 0 00-.003 2.076zM24.491 39.803a1.038 1.038 0 10-.438 2.03 1.038 1.038 0 00.438-2.03zM30.658 39.607a1.04 1.04 0 10.56 2.002 1.04 1.04 0 00-.56-2.002zM36.036 36.572a1.041 1.041 0 00.714 1.796 1.038 1.038 0 10-.714-1.796zM18.934 37.104a1.04 1.04 0 10-1.328 1.602 1.04 1.04 0 001.328-1.602zM32.81 15.578l.016.008h.001a1.04 1.04 0 00.909-1.87c-.004 0-.007-.003-.01-.004s-.004-.001-.005-.003a1.04 1.04 0 00-.911 1.869zM13.918 31.575a1.04 1.04 0 10.797 1.92 1.04 1.04 0 00-.797-1.92zM13.208 26.976a1.04 1.04 0 10.185-2.07 1.04 1.04 0 00-.185 2.07zM26.742 14.291h.034a1.038 1.038 0 10-.067-2.078 1.038 1.038 0 00-1.004 1.073c.017.562.479 1.005 1.037 1.005z" fill="currentColor" ></path><path d="M23.353 33.215a7.097 7.097 0 005.386.944 7.099 7.099 0 004.476-3.141 7.099 7.099 0 00.944-5.387 7.099 7.099 0 00-3.14-4.476h-.001c-3.325-2.113-7.75-1.127-9.863 2.198-2.113 3.325-1.127 7.75 2.198 9.862zm-.444-8.747a5.067 5.067 0 016.994-1.559 5.032 5.032 0 012.228 3.175 5.032 5.032 0 01-.67 3.819 5.033 5.033 0 01-3.174 2.228 5.033 5.033 0 01-3.82-.67 5.072 5.072 0 01-1.557-6.993zM7.773 21.173a2.67 2.67 0 001.9-.787 2.67 2.67 0 00.787-1.9 2.67 2.67 0 00-.787-1.9 2.67 2.67 0 00-1.9-.787 2.67 2.67 0 00-1.9.787 2.67 2.67 0 00-.787 1.9c0 .717.28 1.392.787 1.9a2.67 2.67 0 001.9.787zm-.43-3.118a.605.605 0 011.039.43.605.605 0 01-.61.61.605.605 0 01-.608-.61c0-.162.063-.315.179-.43zM18.488 10.46a2.67 2.67 0 001.9-.787 2.67 2.67 0 00.787-1.9 2.67 2.67 0 00-.787-1.9 2.67 2.67 0 00-1.9-.788 2.67 2.67 0 00-1.9.787 2.67 2.67 0 00-.787 1.9c0 .718.28 1.393.787 1.9a2.67 2.67 0 001.9.788zm-.43-3.118a.605.605 0 01.86 0 .605.605 0 010 .861.605.605 0 01-.86 0 .605.605 0 010-.86z" fill="currentColor" ></path></svg>
              </div>
              <div class="desc-content ml-2">
                <span class="mv-4 fw-6 text-s1 align-center">
                  <span class="this-btn">Запчасти</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="cell hide">
          <nuxt-link to="/buy/accessories/">
            <div class="item-wrapper align-center desktop:jc-center">
              <div class="icon-content">
                <svg  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path  d="M31.801 4.49c1.75-.364 3.53-.451 5.156-.525l-6.745 6.744-.292.293v.414c0 .245.006 1.075.405 2.283.187.653.426 1.37.72 2.03.29.652.665 1.325 1.155 1.815s1.162.865 1.814 1.155c.667.296 1.393.537 2.051.725l.055.016.055.009c.525.087.963.175 1.301.243l.009.001c.162.033.311.063.431.084.093.017.261.047.411.047h.414l.293-.293 6.935-6.935-.002.057c-.076 1.729-.157 3.57-.534 5.38-.427 2.05-1.22 3.97-2.754 5.504-1.992 1.992-4.114 2.799-6.235 2.962h-.007c-2.008.168-4.051-.165-5.977-.69l-.573-.157-.411.429-17.518 18.24c-.293.29-.664.41-1.188.582l-.221.073c-.117.039-.456.027-.784-.3L5.25 40.159l-.07-.07-.083-.055c-.075-.05-.243-.267-.126-.732l.03-.12v-.123c0-.328.138-.626.603-1.092l18.24-17.518.429-.412-.157-.573c-.522-1.914-.854-3.945-.693-5.942.334-2.128 1.322-4.29 3.006-6.319 1.432-1.5 3.327-2.286 5.373-2.712zm6.075-.558l-.006-.002.006.002z" stroke="currentColor" stroke-width="2"></path></svg>
              </div>
              <div class="desc-content ml-2">
                <span class="mv-4 fw-6 text-s1 align-center">
                  <span class="this-btn">Аксессуары</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  head() {
    return {
      title: this.page_data.seo.title ? this.page_data.seo.title : "Гарантия на автомобили Kia",
      meta: [
        {
          content: this.page_data.seo.description ? this.page_data.seo.description : "Гарантия на автомобили Kia",
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

<style lang="scss" scoped>
  .warranty-block{
    .img-first{
      .img{
        flex-shrink: 0;
        img{
          @media (min-width: 991px){
            width: 400px;
          }
        }
      }
    }
  }
  .services-items{
    @media (min-width: 992px){
      .cell{
        border-right: 1px solid white;
        &:nth-last-child(1){
          border-right: none;
        }
      }
    }
  }
</style>