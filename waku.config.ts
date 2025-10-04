import { defineConfig } from 'waku/config';
import tailwindcss from '@tailwindcss/vite';

//@ts-ignore
import path from 'path';

//@ts-ignore
const root = path.resolve('.','./src')

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": root
      }
    }
  },
});
