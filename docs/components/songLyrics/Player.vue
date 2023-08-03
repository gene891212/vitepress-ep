<template>
  <h1>{{ youtube.title }}</h1>
  <youtube-iframe
    :video-id="youtube.videoId"
    ref="ytPlayer"
    class="video-container"
    @ready="onPlayerReady"
  ></youtube-iframe>
  <Lyrics
    :lyrics="youtube.lyrics"
    :time="currentTime"
    @seek-to="seekPlayerTo"
    @toggle-status="togglePlayerStatus"
  />
</template>

<script setup>
import { reactive, ref } from "vue";
// import { YoutubeIframe } from '@vue-youtube/component';
import Lyrics from "./Lyrics.vue";

const ytPlayer = ref(null);
const currentTime = ref(0);
const youtube = reactive({
  title: "「悪魔の子 - ヒグチアイ」進擊的巨人最終季Part2 完整版ED【中日歌詞】",
  videoId: "yFPmQsDOe40",
  lyrics: `[00:12.00]ずっと濡れた空
[00:17.75]どこにも行けないまま
[00:23.85]そっと傘を差す
[00:29.01]君は隣にもういない
[00:34.28]いつか時間がすべて
[00:40.48]洗い流してくなら
[00:46.18]世界はなんて優しくて
[00:51.81]悲しいんだろう
[00:58.18]忘れない　忘れない
[01:00.96]君にどう伝えよう
[01:03.77]「ありがとう」「さようなら」
[01:09.78]予報も　予想も
[01:12.58]あてにならないまま
[01:15.49]それでも　いつしか　それでも
[01:20.48]雨は上がっていく
[01:33.96]そっと重ねた手
[01:39.33]壁みたい　皮膚と皮膚
[01:45.88]きっと分かり合えない
[01:50.79]だから僕らは分かち合う
[01:56.50]一人きりじゃわからない
[02:02.29]自分の形でさえ
[02:08.16]触れて　傷つけて
[02:11.44]少しずつ気づいていく
[02:20.14]体で　心で
[02:23.09]声で　網膜で
[02:25.76]それでも足りない
[02:28.76]すべて愛してた
[02:31.61]消えない傷跡
[02:37.53]君がくれたもの
[02:43.44]今でも少しだけ疼くよ
[02:46.08]鳥が羽ばたくように
[02:48.92]魚が泳ぐように
[02:51.83]僕に君がいた
[02:55.70]君に僕がいた
[02:57.86]落ちた鳥は
[03:00.72]溺れた魚は
[03:03.57]歩くしかないよね　ひとりでも
[03:09.95]忘れない　忘れない
[03:12.54]ここにいない君へ
[03:15.49]届かない　分かってる
[03:18.35]それでも届けたい
[03:21.28]そぼ降る　時雨れる
[03:24.31]空の向こうまで
[03:27.23]唄うよ　届くように　唄うよ
[03:33.14]忘れない　忘れない
[03:36.12]君にどう伝えよう
[03:38.97]「ありがとう」「さようなら」
[03:41.85]どんな言葉も違う
[03:44.96]予報も　予想も
[03:47.83]あてにならないまま
[03:50.65]それでも　いつしか　それでも
[03:55.70]雨は上がっていく`,
});

let player = null;

function onPlayerReady() {
  player = ytPlayer.value;
  setInterval(() => {
    currentTime.value = player.getCurrentTime();
  }, 100);
  // player.playVideo();
}

function seekPlayerTo(time) {
  if (player !== null) {
    player.seekTo(time);
    if (player.getPlayerState() === YT.PlayerState.PAUSED) {
      player.playVideo();
    }
  }
}

function togglePlayerStatus() {
  const stat = player.getPlayerState();
  if (stat === YT.PlayerState.PAUSED || stat === YT.PlayerState.CUED) {
    player.playVideo();
  } else if (stat === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    console.log(stat);
  }
}

</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>