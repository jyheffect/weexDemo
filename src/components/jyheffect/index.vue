<template>
    <div class="wrap">
      <componentName :is="currentView" 
        ref="viewWrap"
        @changeCurSong="changeCurSong" 
        @setSongList="setSongList"
        @changeCurView="changeCurView">
      </componentName>
      <footer-wrap ref="footerwrap" 
        :songList="songList" 
        @changeSong="changeSong">
      </footer-wrap>
    </div>
</template>

<script>
import footer from './component/footer.vue';
import main from './component/main.vue';
import album from './component/album.vue';

export default {
  name: 'Index',
  components: {
    main:main,
    album:album,
    footerWrap:footer
  },
  data () {
    return {
      currentView:"main",
      songList:[]
     }
  },
  methods: {
    setSongList(songList){
      this.songList=songList;
    },
    changeCurView(_value,_data){
      this.currentView=_value?_value:"main";
    },
    changeCurSong(song,index){
      this.$refs.footerwrap.change(song,index);
    },
    changeSong(song,index){
      this.$refs.viewWrap.changeSong(song,index);
    }
  }
}
</script>

<style scoped>

</style>
