<template>
      <list class="list">
          <header-wrap :showBack="false" :showGoto="false"></header-wrap>
          <cell>
              <slider class="slider" interval="3000" auto-play="true">
                <div class="frame" v-for="img in imageList" @click="targetWeexUi">
                  <image class="sliderImage" resize="cover" :src="img.src"></image>
                </div>
                <indicator class="indicator"></indicator>
              </slider>
          </cell>
          <cell class="albumList" v-for="album in albumList" @click="gotoAlbum(album)">
              <div class="albumInfo">
                  <div class="imageInfo">
                      <image class="albumimage" resize="cover" :src="album.img"></image>
                  </div>
                  <div class="panel">
                      <div class="">
                          <text class="name">{{album.name}}</text>
                          <div class="otherInfo">
                              <text class="author">{{album.author}}</text>
                              <text class="time">{{album.time}}</text>
                          </div>
                      </div>
                      <text class="iconfont albumArrow">&#xe601;</text>
                  </div>
              </div>
          </cell>
      </list>
</template>

<script>
import header from './header.vue';
import { getEntryUrl } from '../../../utils';
const navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');

export default {
  name: 'Index',
  components: {
      headerWrap:header
  },
  data () {
    return {
        imageList:[
          {src:"https://wx1.sinaimg.cn/mw1024/005PtzOXgy1fhhi8mhsluj30qo0qoq6z.jpg"},
          {src:"https://wx1.sinaimg.cn/mw1024/005PtzOXgy1fm0h2qic69j30v80ngn59.jpg"},
          {src:"https://ww1.sinaimg.cn/mw1024/005PtzOXgw1fb80j8bebrj30qo0qon4e.jpg"},
        ],
        albumList:[
            {
                img:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000006K1vU1Wc4lM.jpg?max_age=2592000",
                name:"Summer Calling",
                author:"정용화 (郑容和)",
                time:"2017-08-09",
            },
            {
                img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000000Ikn053ABww3.jpg?max_age=2592000",
                name:"JUNG YONG HWA 1ST MINI ALBUM DO DISTURB",
                author:"정용화 (郑容和)",
                time:"2017-07-19"
            },
            {
                img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002CohM03xLQKC.jpg?max_age=2592000",
                name:"교감 (交感)",
                author:"정용화 (郑容和)",
                time:"2016-01-15"
            },
            {
                img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004duD260QXuXY.jpg?max_age=2592000",
                name:"JUNG YONG HWA 1st CONCERT in JAPAN “One Fine Day” Live at",
                author:"정용화 (郑容和)",
                time:"2016-06-24"
            },
            {
                img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004T4NPI1ASIYb.jpg?max_age=2592000",
                name:"ある素敵な日 ~Japan Special Edition~ (美好的一天 ~日本特别版)",
                author:"정용화 (郑容和)",
                time:"2015-03-04"
            },
            {
                img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000003bSMFR0DY71W.jpg?max_age=2592000",
                name:"어느 멋진 날 (美好的一天)",
                author:"정용화 (郑容和)",
                time:"2015-01-20"
            },
            {
                img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000003SO0Ip4OHb3w.jpg?max_age=2592000",
                name:"별, 그대 (星星, 你)",
                author:"정용화 (郑容和)",
                time:"2014-12-23"
            }
        ]
     }
  },
  methods: {
    targetWeexUi(){
      modal.alert({
        message:getEntryUrl('weexui/index',true),
        duration: 10000
      },function(){
        navigator.push({
          url:getEntryUrl('weexui/index',true),
          animated: "true"
        })
      });
    },
    gotoAlbum(album) {
      this.$emit("changeCurView","album",album)
    }
  }, 
  beforeCreate () {
    const domModule = weex.requireModule('dom')
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont",
        'src': "url('http://at.alicdn.com/t/font_623452_bz2dxfqhmur6n7b9.ttf')"
      })
  },
}
</script>

<style scoped>
.iconfont{
    font-family: iconfont;
    color: #ffffff;
}
.list{
    position: absolute;
    top: 0;
    bottom: 100px;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #1d283a, #394951);
}
.slider{
    width: 750px;
    height: 400px;
}
.sliderImage{
    width: 750px;
    height: 400px;
}
.indicator{
    width: 750px;
    height: 400px;
    item-color: #8f8f8f;
    item-selected-color: #fff;
    item-size: 16px;
    position: absolute;
    top: 160px;
    left: 0px;
}
.albumInfo{
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.imageInfo{
    width: 120px;
    height: 120px;
    flex-direction: row;
    align-items: center;
}
.albumimage{
    width: 118px;
    height: 118px;
}
.panel{
    width: 610px;
    height: 120px;
    border-bottom-width: 2px;
    border-color: #4c5862;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.name{
    width: 570px;
    lines:1;
    text-overflow:ellipsis;
    color: #ffffff;
    font-weight: lighter;
}
.otherInfo{
    width: 570px;
    margin-top: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.author{
    font-size: 20px;
    color: #969fa6;
}
.time{
    font-size: 20px;
    color: #969fa6;
    margin-left: 20px;
}
.albumArrow{
    width: 40px;
}
</style>
