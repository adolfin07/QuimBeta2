import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Quimagro',
  webDir: 'www',
  server: {
    cleartext: true,
    allowNavigation: ['https://www.google.com/*'],
  },
  plugins: {
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true,
    },
    SplashScreen: {
      launchShowDuration: 0,
      autoHide: true,
      showSplashScreen: false,
    },
  },
};

export default config;
