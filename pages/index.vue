<template>
  <div class="w-100">

    <!-- <section class="row">
      <div class="col-12">
        <h1>Inicio</h1>
        <h2><nuxt-link to="/rutas">Rutas</nuxt-link></h2>
      </div>
    </section> -->

    <!-- <div class="w-100"> -->
      <section class="row no-gutters">
        <carousel
          :perPage="1"
          :paginationSize="12"
          :paginationColor="`rgba(255,255,255,.3)`"
          :paginationActiveColor="`rgba(255,255,255,1)`"
          :navigationEnabled="true"
          :navigationPrevLabel='`<i class="fas fa-arrow-left"></i>`'
          :navigationNextLabel='`<i class="fas fa-arrow-right"></i>`'
          class="col-12 home-pagination">
          <slide v-for="(item, index) in data.items" :key="item.sys.id">
            <figure
              class="find-them-all p-0 m-0 w-100 bg-primary position-relative"
              itemprop="associatedMedia"
              itemscope
              itemtype="http://schema.org/ImageObject"
              v-if="item.fields.imgmain">
              <!-- :style="'background: url('+ img.fields.file.url +') no-repeat center center; background-size: cover;'" -->
              <a
                class="d-block h-100 w-100 position-relative"
                v-for="(img, index) in data.includes.Asset"
                v-if="item.fields.imgmain.sys.id === img.sys.id"
                :href="img.fields.file.url"
                itemprop="contentUrl"
                :data-size="img.fields.file.details.image.width + 'x' + img.fields.file.details.image.height">
                <img class="w-100 h-100" style="object-fit:cover;" :src="img.fields.file.url" itemprop="thumbnail" :alt="img.fields.title" />
              </a>
              <figcaption itemprop="caption" class="py-4 py-md-5 px-2 px-md-5 text-white">
                <p class="m-0 pl-md-4"><i class="dripicons-location"></i> Arica</p>
                <!-- <i class="dripicons-location"></i> -->
                <h1 class="display-4 my-2 pl-0 pl-md-4 font-weight-bold">{{ item.fields.nombre }}</h1>
                <p class="h6 h5-md m-0 pl-0 pl-md-4 font-weight-light">{{ item.fields.extracto }}</p>
              </figcaption>
            </figure>
          </slide>
        </carousel>
      </section>
    <!-- </div> -->

    <div class="container-fluid py-5 home-grid">
      <section class="row no-gutters py-5">

        <div class="col-12" v-for="(item, index) in data.items" :key="item.sys.id">
          <div class="row py-5 my-3 align-items-center">
            <div class="col-12 col-md-5">
              <!-- <p class="h5 m-0 pb-2 text-uppercase font-weight-light"><i class="text-primary fas fa-map-marker-alt"></i> Arica</p> -->
              <h2 class="display-4 d-inline font-weight-bold m-0 p-0 underline">{{ item.fields.nombre }}</h2>
              <p class="h5 m-0 pt-5 font-weight-light">{{ item.fields.extracto }}</p>
              <a :href="'/rutas/' + item.fields.categoria + '/' + item.fields.slug" class="btn btn-lg btn-outline-dark btn-rounded m-0 mt-5 px-5">Ver detalles</a>
            </div>
            <div class="col-12 col-md-7">
              <div class="w-100 position-relative img-container" v-if="item.fields.imgmain">
                <img
                  v-for="(img, index) in data.includes.Asset"
                  v-if="item.fields.imgmain.sys.id === img.sys.id"
                  class="img-fluid"
                  :src="img.fields.file.url"
                  :alt="item.fields.nombre">
              </div>
            </div>
          </div>
        </div>

        <hr>

        <!-- <div class="col-12">
          <div class="row py-5 align-items-center">
            <div class="col-12 col-md-5">
              <p class="h5 m-0 pb-2 text-uppercase font-weight-light"><i class="text-primary fas fa-map-marker-alt"></i> Arica</p>
              <h2 class="display-4 d-inline font-weight-bold m-0 p-0">Chug Chug</h2>
              <p class="h5 m-0 pt-5">Contenido resumen de la sección del sitio</p>
            </div>
            <div class="col-12 col-md-7">
              <img class="img-fluid" src="http://images.ctfassets.net/t72z2lh7n4xf/rVWNf1kBR64c2e6SuioGe/2ab32edf502ea5f63e9adcb79782fbe7/img_2_test.jpg?fm=jpg&q=30&w=871&h=500" alt="">
            </div>
          </div>
        </div> -->

        <hr>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
        <h3 class="w-100">Más contenidos</h3>
      </section>
    </div>

    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

      <!-- Background of PhotoSwipe.
           It's a separate element as animating opacity is faster than rgba(). -->
      <div class="pswp__bg"></div>

      <!-- Slides wrapper with overflow:hidden. -->
      <div class="pswp__scroll-wrap">

        <!-- Container that holds slides.
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <!--  Controls are self-explanatory. Order can be changed. -->
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
            <!-- element will get class pswp__preloader--active when preloader is running -->
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>

          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
          </button>

          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
          </button>

          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<style>
  /* Slider */
  .find-them-all { height: 100vh; }
  .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .VueCarousel-dot-button:focus { outline: 0!important; }
  .VueCarousel-navigation-button { color: white!important; }
  .VueCarousel-navigation-prev { left: 37px!important; }
  .VueCarousel-navigation-next { right: 37px!important; }
  figcaption {
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 100px;
  }
  figure:after {
    content: '';
    position: absolute;
    z-index: 0;
    display: block;
    bottom: 0;
    width: 100%;
    height: 60%;
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#000000',GradientType=0 );
  }

  /* Content */
  .home-grid .img-container img {
    /* -webkit-clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%); */
    -webkit-clip-path: polygon(17% 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(17% 0, 100% 0, 100% 100%, 0 100%);
  }

  /* .home-grid .img-container:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 130px 130px 0 0;
    border-color: #FFF transparent transparent transparent;
  }

  .home-grid .align-items-center:hover .img-container:after {
    border-width: 500px 130px 0 0;
  } */
</style>

<script>
  import axios from 'axios';

  export default {
    asyncData ({ params, error }) {
      return axios.get(process.env.contentful.apiUrl + process.env.contentful.apiId +`/entries?content_type=place&fields.categoria=arqueologia&access_token=`+ process.env.contentful.accessToken +`&limit=10&order=-sys.updatedAt`)
      .then((response) => {
        return {
          data: response.data
        }
      })
      .catch((e) => {
        console.log(error);
        console.log(e);
        error({
          statusCode: 404,
          message: 'Posts no encontrados.'
        });
      });
    },
    methods: {
      photoswipeInit() {
        var initPhotoSwipeFromDOM = function(gallerySelector) {

          // parse slide data (url, title, size ...) from DOM elements
          // (children of gallerySelector)
          var parseThumbnailElements = function(el) {
            //var thumbElements = el.childNodes,

            //var thumbElements = el.querySelectorAll('.VueCarousel-slide figure'),
            var thumbElements = Array.prototype.slice.call(document.querySelectorAll('.find-them-all')),
            //var thumbElements = el.querySelectorAll('.find-them-all'),
              numNodes = thumbElements.length,
              items = [],
              figureEl,
              linkEl,
              size,
              item;

              console.log(thumbElements);

            for (var i = 0; i < numNodes; i++) {

              figureEl = thumbElements[i]; // <figure> element

              // include only element nodes
              if (figureEl.nodeType !== 1) {
                continue;
              }

              linkEl = figureEl.children[0]; // <a> element

              console.log(figureEl);

              size = linkEl.getAttribute('data-size').split('x');

              // create slide object
              item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
              };


              if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
              }

              if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
              }

              item.el = figureEl; // save link to element for getThumbBoundsFn
              items.push(item);
            }

            return items;
          };

          // find nearest parent element
          var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
          };

          // triggers when user clicks on thumbnail
          var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
              return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if (!clickedListItem) {
              return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute

            //var clickedGallery = clickedListItem.parentNode,
            //  childNodes = clickedListItem.parentNode.childNodes,
            var clickedGallery = document.querySelectorAll('.VueCarousel-inner')[0],
              childNodes = Array.prototype.slice.call(document.querySelectorAll('.find-them-all')),
              numChildNodes = childNodes.length,
              nodeIndex = 0,
              index;

              console.log(clickedGallery);

            for (var i = 0; i < numChildNodes; i++) {
              if (childNodes[i].nodeType !== 1) {
                continue;
              }

              if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
              }
              nodeIndex++;
            }

            if (index >= 0) {
              // open PhotoSwipe if valid index found
              openPhotoSwipe(index, clickedGallery);
            }
            return false;
          };

          // parse picture index and gallery index from URL (#&pid=1&gid=2)
          // var photoswipeParseHash = function() {
          //     var hash = window.location.hash.substring(1),
          //     params = {};
          //
          //     if(hash.length < 5) {
          //         return params;
          //     }
          //
          //     var vars = hash.split('&');
          //     for (var i = 0; i < vars.length; i++) {
          //         if(!vars[i]) {
          //             continue;
          //         }
          //         var pair = vars[i].split('=');
          //         if(pair.length < 2) {
          //             continue;
          //         }
          //         params[pair[0]] = pair[1];
          //     }
          //
          //     if(params.gid) {
          //         params.gid = parseInt(params.gid, 10);
          //     }
          //
          //     return params;
          // };

          var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
              gallery,
              options,
              items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {
              history: false,
              // define gallery index (for URL)
              galleryUID: galleryElement.getAttribute('data-pswp-uid'),

              getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                  pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect();

                return {
                  x: rect.left,
                  y: rect.top + pageYScroll,
                  w: rect.width
                };
              }

            };

            // PhotoSwipe opened from URL
            if (fromURL) {
              if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                  if (items[j].pid == index) {
                    options.index = j;
                    break;
                  }
                }
              } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
              }
            } else {
              options.index = parseInt(index, 10);
            }

            // exit if index not found
            if (isNaN(options.index)) {
              return;
            }

            if (disableAnimation) {
              options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
          };

          // loop through all gallery elements and bind events
          var galleryElements = document.querySelectorAll(gallerySelector);

          for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
          }

          // Parse URL and open gallery if it contains #&pid=3&gid=1
          // var hashData = photoswipeParseHash();
          // if(hashData.pid && hashData.gid) {
          //     openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
          // }
        };
        // execute above function
        //initPhotoSwipeFromDOM('.my-gallery');
        initPhotoSwipeFromDOM('.VueCarousel-inner');
      }
      // pushPhoto(){
      //   var content = this.data;
      //   content.items.forEach(function(key) {
      //     console.log(key.fields.nombre);
      //     console.log('------------------------');
      //     if(key.fields.imgmain){
      //       content.includes.Asset.forEach(function(imgid) {
      //         if(key.fields.imgmain.sys.id == imgid.sys.id){
      //           console.log('Imagen!');
      //         }
      //       });
      //     }
      //   });

        //console.log(JSON.stringify(content));
      //}
    },
    mounted() {
      console.log('--- mounted() ----');
      //this.pushPhoto();
      this.photoswipeInit();
      //console.log(JSON.stringify(this.data));
    }
  }
</script>
