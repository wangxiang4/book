import { defineConfig, presetWind3, presetIcons, presetAttributify  } from 'unocss'

export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons()],
  content: {
    pipeline: {
      include: [`./**/*`],
      exclude: [`./node_modules/**/*`, `./.vitepress/cache/**/*`],
    },
  },
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    colors: {
      primary: {
        DEFAULT: '#409eff',
        deep: '#2597ff',
      },
    },
  },
})
