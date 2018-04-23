<template>
    <list class="list">
        <header-wrap :showBg="true" @changeView="changeView" :showBack="true" :titleText="title" :showGoto="false"></header-wrap>
        <cell class="basicWrap">
            <image class="bgImage" resize="cover" :src="album.img"></image>
            <div class="bgCover"></div>
            <div class="basicInfo">
                <div class="imageBox">
                    <image class="albumimage" resize="cover" :src="album.img"></image>
                </div>
                <div class="otherInfo">
                    <text class="text albumName">{{album.name}}</text>
                    <div class="authorInfo">
                        <image class="authorImage" resize="cover" :src="album.authorFace"></image>
                        <text class="text authorName">{{album.author}}</text>
                    </div>
                    <text class="text description">简介:{{album.description}}</text>
                </div>
            </div>
        </cell>
        <cell v-for="(song,index) in album.songList" @click="changeSong(song,index)">
            <div class="songList">
                <div :class="['index',index==curIndex?'checkindex':'']">
                  <text :class="['text',index==curIndex?'current':'']">{{index+1}}</text>
                </div>
                <div class="songInfo">
                    <text :class="['name',index==curIndex?'current':'']">{{song.name}}</text>
                    <text :class="['author',index==curIndex?'current':'']">{{song.author}}</text>
                </div>
            </div>
        </cell>
    </list>
</template>

<script>
import header from './header.vue';
const storage = weex.requireModule('storage')

export default {
  name: 'Album',
  components: {
      headerWrap:header
  },
  data () {
    return {
      title:"专辑",
      curIndex:"",
      album:{
        img:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000006K1vU1Wc4lM.jpg?max_age=2592000",
        name:"Summer Calling",
        author:"정용화 (郑容和)",
        authorFace:"https://wx1.sinaimg.cn/mw690/005PtzOXgy1fp13icx5naj30qo0zi14e.jpg",
        time:"2017-08-09",
        description:'ジョン・ヨンファ(from CNBLUE)待望のJAPAN 2nd ソロアルバム「Summer Calling」が発売決定! !2015年3月に1stソロアルバムを発売してから約2年振りとなる今作のソロアルバムには最新曲 "Summer Dream"を含め、CNBLUEでのジョン・ヨンファとはまた一味違う魅力的な楽曲を収録!さらに、「Summer Calling」を引っ提げて、〝JUNG YONG HWA JAPAN CONCERT 2017 "Summer Calling"も決定! !"',
        songList:[
          {
              name:"Summer Dream",
              src:"http://www.jyheffect.cn/video/1-02%20Summer%20Dream.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"Password",
              src:"http://www.jyheffect.cn/video/1-03%20Password.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"Cruel Memories",
              src:"http://www.jyheffect.cn/video/1-08%20Cruel%20Memories.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"Navigation",
              src:"http://www.jyheffect.cn/video/1-10%20Navigation.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"粉雪",
              src:"http://www.jyheffect.cn/video/1-13%20%E7%B2%89%E9%9B%AA.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"Driver's High",
              src:"http://www.jyheffect.cn/video/1-14%20Driver's%20High.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"君を好きになってよかった",
              src:"http://www.jyheffect.cn/video/2-03%20%E5%90%9B%E3%82%92%E5%A5%BD%E3%81%8D%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"Closer",
              src:"http://www.jyheffect.cn/video/2-07%20Closer.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"因为想念",
              src:"http://www.jyheffect.cn/video/2-11%20Because%20I%20Miss%20You.mp3",
              author:"정용화 (郑容和)"
          },
          {
              name:"美好的一天",
              src:"http://www.jyheffect.cn/video/2-12%20One%20Fine%20Day.mp3",
              author:"정용화 (郑容和)"
          }
        ]
      }
    }
  },
  methods: {
    changeSong(song,index) {
      this.curIndex=index;
      this.$emit("changeCurSong",song,index);
      storage.setItem('songInfo', JSON.stringify(song));
    },
    changeView(){
      this.$emit("changeCurView","main")
    },
    setIndex(index){
      this.curIndex=index;
    },
    compare(obj1,obj2){   
      var state = true;
      for (var key in obj1) {   
          if (typeof (obj2[key]) === 'undefined') {   
              state = false;   
          } else {   
              if (typeof (obj1[key]) === 'object') {   
                  compare(obj1[key],obj2[key]);   
              } else {   
                  if (obj1[key] !== obj2[key]) {   
                  state = false;   
                  }   
              }   
          }   
      }   
      return state;   
    },
    onShow(){
      var self=this;
      storage.getItem('songInfo', (e) => {
        var songInfo=null;
        if (e.result === 'success') {
         songInfo = JSON.parse(e.data);
        }
        for(var i=0;i<self.album.songList.length;i++){
          if(this.compare(self.album.songList[i],songInfo)){
            if(i > -1){
              self.setIndex(i);
            }
          }
        }
      })
    }
  },
  mounted() {
    for(var i=0;i<this.album.songList.length;i++){
      this.album.songList[i].albumImg=this.album.img;
    }
    this.$emit("setSongList",this.album.songList);
    this.onShow();
  },
  beforeCreate () {
    const domModule = weex.requireModule('dom')
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont",
        'src': "url('http://at.alicdn.com/t/font_623452_bz2dxfqhmur6n7b9.ttf')"
      })
  }
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
.basicWrap{
    position: relative;
    overflow: hidden;
}
.bgImage{
    position: absolute;
    top: 0;
    left:0;
    right:0;
    bottom: 0;
    width: 750px;
    filter: blur(40px);
}
.bgCover{
  position: absolute;
  top: 0;
  left:0;
  right:0;
  bottom: 0;
  width: 750px;
  background-color: rgba(0,0,0,0.5);
}
.basicInfo{
    flex-direction: row;
    align-items: center;
    padding-top: 40px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 40px;
}
.imageBox{
    width:220px;
    height: 220px;
}
.albumimage{
    width: 220px;
    height: 220px;
}
.text{
    color: #ffffff;
}
.otherInfo{
    width: 490px;
    height: 220px;
    margin-left: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.albumName{
    font-weight: lighter;
}
.authorInfo{
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
}
.authorImage{
    width: 60px;
    height: 60px;
    border-radius: 60px;
}
.authorName{
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    margin-left: 10px;
}
.description{
    margin-top: 40px;
    font-size: 20px;
    lines:1;
    text-overflow: ellipsis;
}
.songList{
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.index{
  width: 100px;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-left-width: 0px;
  border-left-color: rgba(23,42,56,0.9);
}
.checkindex{
  border-left-width: 8px;
  border-left-color: rgba(49,194,124,1);
}
.songInfo{
    width: 670px;
    height: 120px;
    border-bottom-width: 2px;
    border-color: #4c5862;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
}
.name{
    width: 570px;
    lines:1;
    text-overflow:ellipsis;
    color: #ffffff;
    font-weight: lighter;
}
.author{
    margin-top: 10px;
    font-size: 20px;
    color: #969fa6;
}
.current{
  color: #31c27c;
}
</style>
