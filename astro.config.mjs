// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },

  //Deploy normal project
  base: '/repo-137/',
  site: 'https://mySuperCoolProjects.github.io/repo-137/',

  //Deploy 20 Projects
  // base: '/20-projects-with-css/',
  // site: 'https://mySuperCoolProjects.github.io/20-projects-with-css/'

  //Localhost
  // site: 'http://localhost:4321/',

  vite: {
    plugins: [tailwindcss()]
  }
});