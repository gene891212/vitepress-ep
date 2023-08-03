import {
  I,
  L,
  R,
  T,
  W,
  _,
  u
} from "./chunk-L3A6WEOU.js";
import {
  defineComponent,
  h,
  ref,
  toRefs
} from "./chunk-254DOEZA.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/@vue-youtube+component@0.0.4_vue@3.3.4/node_modules/@vue-youtube/component/dist/index.js
var P = defineComponent({
  name: "YoutubeIframe",
  props: {
    width: {
      type: [String, Number],
      default: 1280
    },
    height: {
      type: [String, Number],
      default: 720
    },
    playerVars: {
      type: Object,
      default: () => ({
        autoplay: 0,
        time: 0,
        mute: 0
      })
    },
    videoId: {
      type: String,
      default: ""
    },
    cookie: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    "playback-quality-change",
    "playback-rate-change",
    "state-change",
    "api-change",
    "error",
    "ready"
  ],
  setup(t, { emit: a, expose: o }) {
    const { videoId: n } = toRefs(t), r = ref(), {
      instance: c,
      togglePlay: g,
      toggleMute: l,
      onPlaybackQualityChange: y,
      onPlaybackRateChange: h2,
      onStateChange: i,
      onApiChange: u2,
      onError: d,
      onReady: p
    } = W(n, r, {
      playerVars: t.playerVars,
      height: t.height,
      cookie: t.cookie,
      width: t.width
    });
    return y((e) => {
      a("playback-quality-change", e);
    }), h2((e) => {
      a("playback-rate-change", e);
    }), i((e) => {
      a("state-change", e);
    }), u2((e) => {
      a("api-change", e);
    }), d((e) => {
      a("error", e);
    }), p((e) => {
      a("ready", e);
    }), o({
      instance: c,
      togglePlay: g,
      toggleMute: l
    }), () => h("div", { ref: r });
  }
});
export {
  R as HOST_COOKIE,
  T as HOST_NO_COOKIE,
  L as PROVIDE_KEY,
  _ as PlayerError,
  I as PlayerState,
  P as YoutubeIframe,
  u as unrefElement
};
//# sourceMappingURL=@vue-youtube_component.js.map
