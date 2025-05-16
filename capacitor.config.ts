import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Quimagro',
  webDir: 'www',
  server: {
    cleartext: true,
    allowNavigation: ['https://www.google.com/*'], // Solo necesario si usas imágenes desde http:// (no https://)
  },
};

export default config;
