import path from 'path'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import UnoCSS from 'unocss/vite'

import type { UserConfig } from 'vitepress'
type ViteConfig = Required<UserConfig>['vite']


export const getViteConfig = ({ mode }: { mode: string }): ViteConfig => {
  return {
    resolve: {
      alias: [
        {
          find: '~/',
          replacement: `${path.resolve(__dirname, '../vitepress')}/`,
        }
      ]
    },
    server: {
      port: 4001,
      host: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    build: {
      // Set single chunk size to 8 MB
      chunkSizeWarningLimit: 8192,
    },
    plugins: [
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
        ],

        // allow auto import and register components used in Markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      Icons({
        autoInstall: true,
      }),

      UnoCSS({
        inspector: false,
      }),
    ]
  }
}
