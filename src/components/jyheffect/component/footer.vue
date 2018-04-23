<template>
  <div class="footer-wrap" @viewappear="onShow">
      <div class="mainContent">
        <div class="song-wrap">
            <image class="image" :src="songInfo.albumImg"></image>
            <text class="text songName">{{songInfo.name}}</text>
        </div>
        <div class="play-wrap" @click="videoEvent">
            <text class="iconfont" v-if="pause">&#xe625;</text>
            <text class="iconfont" v-else>&#xe629;</text>
        </div>
      </div>
      <video class="video" 
        ref="video"         
        :play-status="pause?'pause':'play'"
        :src="songInfo.src"
        @pause="onpause"
        @start="onstart"
        @finish="onfinish" 
        @fail="onfail"
      ></video>
  </div>
</template>

<script>
const storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');

export default {
  name: 'footer',
  props:{
    songList:{
      type:Array,
      default:[],
      required:true
    }
  },
  data(){
      return {
        pause:true,
        index:-1,
        songInfo:{}
      }
  },
  beforeCreate () {
    const domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_623452_bz2dxfqhmur6n7b9.ttf')"
    })
  },
  methods: {
      videoEvent(){
        this.pause=!this.pause;
      },    
      onShow () {
        storage.getItem('songInfo', (e) => {
          if (e.result === 'success') {
            this.songInfo = JSON.parse(e.data)
          } else {
            this.songInfo = {
              albumImg:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000006K1vU1Wc4lM.jpg?max_age=2592000",
              name:"navigation",
              src:"http://www.jyheffect.cn/video/1-10%20Navigation.mp3"
            };
          }
        })
      },
      change(song,index){
        this.index=index;
        this.pause=true;
        this.songInfo=song;
        this.$nextTick(()=>{
          this.pause=false;
        });     
      },
      onpause(event){
        console.log("暂停");
      },
      onstart(event){
        console.log("开始");
      },
      onfail(event){
        console.log("出错");
        this.pause=true;
        modal.toast({
            message: '音频资源出错！',
            duration: 0.3
        })
      },
      onfinish(event){
        console.log("结束");
        this.pause=true;
        if( this.index > -1 && this.index<this.songList.length-1){
          this.$emit("changeSong",this.songList[this.index+1],this.index+1);
        }
      }
  },
  created () {
    if (weex.config.env.platform === 'Web') {
      this.onShow()
    }
  },
}
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
  color: #ffffff;
  font-size: 50px;
}
.footer-wrap {
    position: absolute;
    bottom: 0;
    width: 750px;
    height: 100px;
    color: #ffffff;
    background-color: rgba(23,42,56,1);
    padding-left: 20px;
    padding-right: 20px;
}
.mainContent{
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.song-wrap{
    flex-direction: row;
    align-items: center;
}
.image{
    width:70px;
    height:70px;
    border-radius: 70px;
}
.text{
    color: #ffffff;
}
.songName{
    font-size: 30px;
    font-weight: lighter;
    margin-left: 10px;
}
.video{
    width: 0px;
    height: 0px;
}
</style>


