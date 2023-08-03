import DefaultTheme from 'vitepress/theme'
import { YoutubeIframe } from '@vue-youtube/component';
import { createManager } from '@vue-youtube/core';

const hi =  createManager()
export default {
  ...DefaultTheme,
  // YoutubeIframe,
  enhanceApp({ app, router, siteData }) {
    // app.component('youtube-iframe', YoutubeIframe)
  }
}