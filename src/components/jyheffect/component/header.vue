<template>
    <header>
        <div :class="['header-wrap',showBg?'headerBg':'']">
            <text class="iconfont" v-if="showBack" @click="goback">&#xe600;</text>
            <text class="iconfont" v-else></text>
            <text class="title text">{{titleText}}</text>
            <text class="iconfont" v-if="showGoto">&#xe601;</text>
            <text class="iconfont" v-else></text>
        </div>
    </header>
</template>
<script>
export default{
    props: {
        titleText:{
            type:String,
            default:"音乐馆"
        },
        showBg:{
            type:Boolean,
            default:true
        },
        showBack:{
            type:Boolean,
            required:true
        },
        showGoto:{
            type:Boolean,
            required:true
        }
    },
    methods: {
      goback() {
        this.$emit("changeView");
      }
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
.header-wrap {
    width: 750px;
    height: 100px;
    color: #ffffff;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
}
.headerBg{
    background-image: linear-gradient(to right, #1d283a, #394951);
}
.fixedHeader{
    position: fixed;
    top: 0;
    left: 0;
}
.title{
    color: #ffffff;
    font-size: 36px;
}
</style>

