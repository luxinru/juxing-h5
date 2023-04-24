<template>
  <div class="page_root">
    <section class="header">
      <div class="tip1">
        分享
        <br />
        事迹
      </div>

      <div class="tip2">精彩活动</div>
    </section>

    <!-- vant轮播图 -->
    <van-swipe loop :autoplay="3000" class="swipe">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <div class="box">
          <video
            v-if="item.isVideo"
            :src="item.src"
            @click="onVideoClick($event)"
          ></video>
          <img v-else :src="item.src" @click="onImgClick(item.src)" />
        </div>

        <!-- <span class="name" v-if="item.name">
          {{ item.name }}
        </span> -->
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
// import img from "@/assets/images/juxingkaobei2.png";
import { showImagePreview } from "vant";

export default {
  name: "SharePage",

  data() {
    return {
      list: [
        {
          isVideo: true,
          name: "",
          src: "http://juxingtuan.com/resources/videos/video1.m4v",
        },
        {
          isVideo: true,
          name: "",
          src: "http://juxingtuan.com/resources/videos/video2.mp4",
        },
        {
          isVideo: true,
          name: "",
          src: "http://juxingtuan.com/resources/videos/video3.mp4",
        },
        {
          isVideo: true,
          name: "",
          src: "http://juxingtuan.com/resources/videos/video4.mp4",
        },
        {
          isVideo: true,
          name: "",
          src: "http://juxingtuan.com/resources/videos/video5.mp4",
        },
        {
          isVideo: true,
          name: "",
          src: "http://juxingtuan.com/resources/videos/video6.mp4",
        },
        {
          isVideo: true,
          name: "",
          src: "http://juxingtuan.com/resources/videos/11111.mp4",
        },
        {
          isVideo: true,
          name: "",
          src: "http://juxingtuan.com/resources/videos/22222.mp4",
        },
      ],
    };
  },

  mounted() {},

  beforeUnmount() {},

  methods: {
    onImgClick(src) {
      showImagePreview([src]);
    },

    // 自动播放并且全屏
    onVideoClick(e) {
      e.target.play();
      e.target.webkitEnterFullscreen();
    },
  },
};
</script>

<style lang="scss" scoped>
.page_root {
  .header {
    width: 100%;
    padding: 64px 32px 59px;
    background-color: rgba(241, 242, 243, 1);
    display: flex;
    flex-direction: column;
    align-items: center;

    .tip1 {
      font-size: 42px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #2c2b29;
    }

    .tip2 {
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #22211f;
      margin-top: 37px;
      text-align: center;
    }
  }

  .swipe {
    width: 100%;
    background-color: rgba(248, 248, 248, 1);
    height: max-content;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 20px;

    .box {
      width: 100%;
      height: 229px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #000;

      img {
        height: 100%;
      }

      video {
        height: 100%;
      }
    }

    .name {
      display: block;
      width: 100%;
      padding: 16px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #22211f;
      line-height: 28px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
