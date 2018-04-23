<template>
  <wxc-tab-bar :tab-titles="tabIconFontTitles"
               :tab-styles="tabIconFontStyles"
               title-type="iconFont"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle">
      <div class="detailBox">
        <text>歌手简介</text>
        <text>中文名：郑容和</text>
        <text>国籍：韩国</text>
        <text>出生地：韩国首尔</text>
        <text>职业：歌手、演员、音乐制作人、主持人</text>
        <text>代表作：《One Fine Day》、《In My Head》、《你为我着迷》、《原来是美男》、《Can't Stop》、《I'm Sorry》、《三剑客》</text>
      </div>
    </div>
    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle">
      <text @click="gotoAlbum">专辑</text>
    </div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle">
      <image class="sliderImage" resize="contain" :src="src"></image>
    </div>

    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle">
      <video class="video" :src="video" autoplay controls></video>
    </div>
  </wxc-tab-bar>
</template>
<script>
  import { WxcTabBar, Utils } from 'weex-ui';
  import { getEntryUrl } from '../../utils';
  const navigator = weex.requireModule('navigator');
  export default {
    components: { WxcTabBar },
    data: () => ({
      tabIconFontTitles: [
        {
          title: '详情',
          codePoint: '\ue623'
        },
        {
          title: '单曲',
          codePoint: '\ue608'
        },
        {
          title: '图片',
          codePoint: '\ue752',
        },
        {
          title: 'MV',
          codePoint: '\ue601',
        }
      ],
      tabIconFontStyles: {
        bgColor: "#1d283a",
        titleColor: '#ffffff',
        activeTitleColor: '#31c27c',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 40,
        iconFontMarginBottom: 8,
        iconFontColor: '#ffffff',
        activeIconFontColor: '#31c27c',
        iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf',
      },
      src:"https://wx4.sinaimg.cn/mw690/005Caw48ly1fqh74z8oeej315o224khh.jpg",
      video:"http://www.jyheffect.cn/video/FeelTheFive.mov"
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabIconFontStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabIconFontStyles.height) + 'px' };
    },
    methods: {
      gotoAlbum(){
        navigator.push({
          url:getEntryUrl('jyheffect/index',true),
          animated: "true"
        })
      },
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      }
    }
  };
</script>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .sliderImage{
    width: 750px;
    height: 1340px;
  }
  .video{
    width: 750px;
    height: 600px;
  }
  .detailBox{
    justify-content: flex-start;
  }
</style>