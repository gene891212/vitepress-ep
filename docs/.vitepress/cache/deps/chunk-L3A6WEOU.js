import {
  inject,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  unref,
  watch
} from "./chunk-254DOEZA.js";

// node_modules/.pnpm/@vue-youtube+shared@0.0.4_vue@3.3.4/node_modules/@vue-youtube/shared/dist/index.js
var T = "https://www.youtube-nocookie.com";
var R = "https://www.youtube.com";
var L = "vue-youtube";
var _ = ((O) => (O[O.INVALID_PARAMETER = 2] = "INVALID_PARAMETER", O[O.HTML5_ERROR = 5] = "HTML5_ERROR", O[O.NOT_FOUND = 100] = "NOT_FOUND", O[O.NOT_ALLOWED = 101] = "NOT_ALLOWED", O[O.NOT_ALLOWED_DISGUISE = 150] = "NOT_ALLOWED_DISGUISE", O))(_ || {});
var I = ((O) => (O[O.UNSTARTED = -1] = "UNSTARTED", O[O.ENDED = 0] = "ENDED", O[O.PLAYING = 1] = "PLAYING", O[O.PAUSED = 2] = "PAUSED", O[O.BUFFERING = 3] = "BUFFERING", O[O.VIDEO_CUED = 5] = "VIDEO_CUED", O))(I || {});
function u(O) {
  var E;
  const D = unref(O);
  return (E = D == null ? void 0 : D.$el) != null ? E : D;
}

// node_modules/.pnpm/@vue-youtube+core@0.0.4_vue@3.3.4/node_modules/@vue-youtube/core/dist/index.js
var $ = () => {
  const i = inject(L);
  if (!i)
    throw new Error("You may forget to apply app.use(manager). See https://vue-youtube.github.io/docs/usage/manager.html for more information");
  return i;
};
var J = () => {
  const f = {
    install(r) {
      r.provide(L, f), this._insert();
    },
    register(r, l) {
      const n = r.id || `vue-youtube-${this.state.counter++}`, s = this.state.players.get(n);
      if (s !== void 0) {
        s({
          factory: this.state.factory,
          id: n
        });
        return;
      }
      if (this.state.factory !== void 0) {
        l({
          factory: this.state.factory,
          id: n
        });
        return;
      }
      this.state.backlog.set(n, l);
    },
    _insert() {
      var n;
      const r = document.createElement("script");
      r.src = "https://www.youtube.com/player_api";
      const l = document.querySelectorAll("script")[0];
      (n = l.parentNode) == null || n.insertBefore(r, l), window.onYouTubeIframeAPIReady = () => {
        this.state.factory = window.YT;
        for (const [s, y] of this.state.backlog.entries())
          this.state.backlog.delete(s), this.state.players.set(s, y), y({
            factory: this.state.factory,
            id: s
          });
      };
    },
    state: {
      backlog: /* @__PURE__ */ new Map(),
      players: /* @__PURE__ */ new Map(),
      factory: void 0,
      counter: 1
    }
  };
  return f;
};
var W = (i, f, r = {}) => {
  const {
    playerVars: l = {},
    cookie: n = true,
    width: s = 1280,
    height: y = 720
  } = r, S = n ? R : T, A = $(), d = new Array(), v = new Array(), b = new Array(), m = new Array(), w = new Array(), C = new Array(), a = shallowRef(), k = ref(i), g = ref(false), h = ref(false), u2 = (e, t) => {
    for (const c of t)
      c(e);
  }, I2 = (...e) => {
    d.push(...e);
  }, E = (...e) => {
    v.push(...e);
  }, M = (...e) => {
    b.push(...e);
  }, O = (...e) => {
    m.push(...e);
  }, R2 = (...e) => {
    w.push(...e);
  }, _2 = (...e) => {
    C.push(...e);
  }, T2 = () => {
    var t, c, o;
    const e = (t = a.value) == null ? void 0 : t.getPlayerState();
    if (e && e === I.PLAYING) {
      (c = a.value) == null || c.pauseVideo();
      return;
    }
    (o = a.value) == null || o.playVideo();
  }, V = () => {
    var e, t;
    if ((e = a.value) != null && e.isMuted()) {
      a.value.unMute();
      return;
    }
    (t = a.value) == null || t.mute();
  }, Y = () => {
    var e, t;
    if (g.value) {
      (e = a.value) == null || e.setShuffle(false), g.value = false;
      return;
    }
    (t = a.value) == null || t.setShuffle(true), g.value = true;
  }, L2 = () => {
    var e, t;
    if (h.value) {
      (e = a.value) == null || e.setLoop(false), h.value = false;
      return;
    }
    (t = a.value) == null || t.setLoop(true), h.value = true;
  }, K = watch(k, (e) => {
    var t;
    (t = a.value) == null || t.loadVideoById(e);
  });
  return onMounted(() => {
    const e = u(f);
    !e || A.register(e, ({ factory: t, id: c }) => {
      e.id = c, a.value = new t.Player(c, {
        videoId: unref(k),
        playerVars: l,
        height: y,
        width: s,
        host: S,
        events: {
          onPlaybackQualityChange: (o) => {
            u2(o, d);
          },
          onPlaybackRateChange: (o) => {
            u2(o, v);
          },
          onStateChange: (o) => {
            u2(o, b);
          },
          onApiChange: (o) => {
            u2(o, m);
          },
          onError: (o) => {
            u2(o, w);
          },
          onReady: (o) => {
            u2(o, C);
          }
        }
      });
    });
  }), onUnmounted(() => {
    var e;
    (e = a.value) == null || e.destroy(), K();
  }), {
    instance: a,
    togglePlay: T2,
    toggleMute: V,
    toggleLoop: L2,
    toggleShuffle: Y,
    onPlaybackQualityChange: I2,
    onPlaybackRateChange: E,
    onStateChange: M,
    onApiChange: O,
    onError: R2,
    onReady: _2
  };
};

export {
  T,
  R,
  L,
  _,
  I,
  u,
  $,
  J,
  W
};
//# sourceMappingURL=chunk-L3A6WEOU.js.map
