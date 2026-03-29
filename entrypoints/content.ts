import { getSettings } from "@/assets/getSettings";
import { setupZoomer } from "@/assets/Zoomer";
import { trackElements } from "@/assets/Zoomer/trackElements";

export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  main: async () => {
    const settings = await getSettings();
    console.log("script loaded");
    trackElements(".html5-video-player", (root) => {

      const video = root.querySelector("video");
      if (!root || !video) return;
      setupZoomer({ root, video, settings })
    })
  },
});
