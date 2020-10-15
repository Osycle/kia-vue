<template>
  <div>
    <div class="card-bnr relative">
      <div class="bg-video-content cover">
        <video :src="pageData.content.banners[1].video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <div class="img-xs absolute" style="background-image: url('img/other/k5-card-bnr-xs.jpg');"></div>
      </div>
      <div class="container-p relative">
        <Breadcrump :breadcrumpTitle="breadcrumpTitle"/>
        <div class="wrapper-content">
          <div class="desc-content justify-c-end hidden-xs hidden-sm">
            <span class="text align-center"><span>от {{pageData.content.model.min_price | spaceBetweenNum}} сум</span> <a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
            <span class="p-h-5">·</span>
            <span class="btn-def style-2 m-l-20"><a href="feedback.html">Связаться с нами</a></span>
          </div>
          <div class="card-bnr-bottom">
            <div class="flex-adaptive align-center justify-c-between">
              <div class="card-bnr-name">
                <div class="text-n1 m-b-15">{{pageData.content.banners[1].logo.label}}</div>
                <img :src="pageData.content.banners[1].logo.image">
                <div class="font-size-nm m-t-10">{{pageData.content.banners[1].logo.signature}}</div>
              </div>
              <div class="desc-content hidden-md hidden-lg">
                <span class="text align-center"><span>от {{pageData.content.model.min_price | spaceBetweenNum}} сум</span><a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
                <div class="btn-opacity"><a href="feedback.html">Связаться с нами</a></div>
              </div>
              <div class="card-bnr-advantages box-md-5 flex row">
                <div class="item p-h-15" v-for="(teaser, key) in pageData.content.banners[1].teasers" :key="key">
                  <div class="img-content">
                    <img :src="teaser.icon">
                  </div>
                  <p><small>{{teaser.description}}</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="card-media bg-color-gray-6 color-white">
      <div class="card-media-intro card-media-v">
        <div class="container-p-2 relative">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-6 p-h-15">
              <h4 class="color-2 text-n1">{{infographics[0].title}}</h4>
              <div class="h1 text-x5">{{infographics[0].name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
              <p>{{infographics[0].description}}</p>
            </div>
          </div>
          <br class="hidden-sm hidden-xs">
          <div class="video-content m-t-30 relative">
            <div class="bg-video-content-2">
              <a :href="infographics[0].video.link" data-fancybox>
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="infographics[0].video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[1].title}}</h4>
              <div class="h1 text-x5">{{infographics[1].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[1].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[1].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-1-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-1-'+[key+1]" v-for="(preview, key) in infographics[1].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2 relative">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-6 p-h-15">
              <h4 class="color-2 text-n1">{{infographics[2].title}}</h4>
              <div class="h1 text-x5">{{infographics[2].name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
              <p>{{infographics[2].description}}</p>
            </div>
          </div>
          <br class="hidden-sm hidden-xs">
          <div class="video-content m-t-30 relative">
            <div class="bg-video-content-2">
              <a :href="infographics[2].video.link" data-fancybox>
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="infographics[2].video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[3].title}}</h4>
              <div class="h1 text-x5">{{infographics[3].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[3].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[3].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-4-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-4-'+[key+1]" v-for="(preview, key) in infographics[3].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2 relative">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-6 p-h-15">
              <h4 class="color-2 text-n1">{{infographics[5].title}}</h4>
              <div class="h1 text-x5">{{infographics[5].name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
              <p>{{infographics[5].description}}</p>
            </div>
          </div>
          <br class="hidden-sm hidden-xs">
          <div class="video-content m-t-30 relative">
            <div class="bg-video-content-2">
              <a :href="infographics[5].video.link" data-fancybox>
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="infographics[5].video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[6].title}}</h4>
              <div class="h1 text-x5">{{infographics[6].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[6].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[6].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-6-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-6-'+[key+1]" v-for="(preview, key) in infographics[6].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive r-reverse">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[7].title}}</h4>
              <div class="h1 text-x5">{{infographics[7].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[7].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[7].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-7-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-7-'+[key+1]" v-for="(preview, key) in infographics[7].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2 relative">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-6 p-h-15">
              <h4 class="color-2 text-n1">{{infographics[8].title}}</h4>
              <div class="h1 text-x5">{{infographics[8].name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
              <p>{{infographics[8].description}}</p>
            </div>
          </div>
          <br class="hidden-sm hidden-xs">
          <div class="video-content m-t-30 relative">
            <div class="bg-video-content-2">
              <a :href="infographics[8].video.link" data-fancybox>
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="infographics[8].video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[9].title}}</h4>
              <div class="h1 text-x5">{{infographics[9].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[9].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[9].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-9-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-9-'+[key+1]" v-for="(preview, key) in infographics[9].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-video">
      <div class="container-p p-v-80">
        <div class="entry-header text-center">
          <h4 class="color-2 text-n1">ОБЗОРЫ</h4>
          <h2>Видео о модели</h2>
          <div class="short-models-nav m-v-30">
            <ul class="list flex-adaptive justify-c-center li-m-v-15">
              <li class="active"><a href="../#card-video-1-1" data-toggle="tab">Промо-ролики (5)</a></li>
              <li><a href="../#card-video-1-2" data-toggle="tab">Мнения (5)</a></li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade in active" id="card-video-1-1">
            <div class="card-video-items boxes-4 owl-carousel owl-btn-2">
              <figure>
                <a href="https://youtu.be/sDwqwFJts38" data-fancybox="card-video-1-1">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-1.jpeg');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Новый Kia K5 | Сверхчеловеческие возможности</b></p>
                    </div>
                  </div>
                </a>
              </figure>
              <figure>
                <a href="https://youtu.be/pSUC_debwtI" data-fancybox="card-video-1-1">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-2.jpeg');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Kia K5: Испытания в России</b></p>
                    </div>
                  </div>
                </a>
              </figure>
              <figure>
                <a href="https://youtu.be/Ee2cYiq8ib0" data-fancybox="card-video-1-1">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-3.jpeg');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Kia K5: Красота</b></p>
                    </div>
                  </div>
                </a>
              </figure>
              <figure>
                <a href="https://youtu.be/qKO4eGDGFjs" data-fancybox="card-video-1-1">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-4.jpeg');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Kia K5: Качество</b></p>
                    </div>
                  </div>
                </a>
              </figure>
              <figure>
                <a href="https://youtu.be/Ibd4oiDDrvY" data-fancybox="card-video-1-1">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-5.jpeg');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Kia K5: Комфорт</b></p>
                    </div>
                  </div>
                </a>
              </figure>
            </div>
          </div>
          <div class="tab-pane fade" id="card-video-1-2">
            <div class="card-video-items boxes-4 owl-carousel owl-btn-2">
              <figure>
                <a href="https://youtu.be/ge5uzcI2Y60" data-fancybox="card-video-1-2">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-6.png');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Clickoncar</b></p>
                    </div>
                  </div>
                </a>
              </figure>
              <figure>
                <a href="https://youtu.be/fZuAL_61wSM" data-fancybox="card-video-1-2">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-7.png');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Лиса Рулит</b></p>
                    </div>
                  </div>
                </a>
              </figure>
              <figure>
                <a href="https://youtu.be/3caA2Qs6yqg" data-fancybox="card-video-1-2">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-8.png');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Игорь Бурцев</b></p>
                    </div>
                  </div>
                </a>
              </figure>
              <figure>
                <a href="https://youtu.be/Yzct5epKsH0" data-fancybox="card-video-1-2">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-9.png');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Autonews</b></p>
                    </div>
                  </div>
                </a>
              </figure>
              <figure>
                <a href="https://youtu.be/yLgRftDqKSA" data-fancybox="card-video-1-2">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" style="background-image: url('../img/other/k5-card-video-10.jpeg');"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>Kia K5: Онлайн-премьера с Wylsacom</b></p>
                    </div>
                  </div>
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Breadcrump from '@/components/Breadcrump'
export default {
  components: {
    Breadcrump
  },
  async asyncData({store, error}){
    try{
      const pageData = await store.dispatch("models/fetchPageData", {path: "model"})
      const videoGroup = await store.dispatch("models/fetchVideo", {
        model: pageData.content.model.model_line_id,
      })
      console.log(pageData, videoGroup);
      return {
        pageData,
        infographics: pageData.content.infographics
      }
    }catch(e){
      error(e);
    }
  },
  data(){
    return {
      breadcrumpTitle: "K5",
      infographics: []
    }
  },
  mounted() {

      
    
  },
  filters: {
    spaceBetweenNum (price) {
      price += "";
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(price))
        price = price.replace(pattern, "$1 $2");
      return price;
    },
  },
  head() {
    return {
      title: this.pageData.content.seo.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.pageData.content.seo.description
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .card-bnr{
    .breadcrumb-container{
      .container-p{
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
</style>