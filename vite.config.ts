import { builtinModules } from 'node:module';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
// @ts-ignore
import babelPluginProposalDecorators from '@babel/plugin-proposal-decorators';

import { VitePluginNode } from 'vite-plugin-node';

const external = [...builtinModules, ...builtinModules.map((m) => `node:${m}`)];

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vueJsx({
      babelPlugins: [[babelPluginProposalDecorators, { version: 'legacy' }]],
    }),

    ...VitePluginNode({
      adapter: 'nest',
      appPath: './src/main.ts',
      exportName: 'VITE_PLUGIN_NODE',
      tsCompiler: 'swc',
      initAppOnBoot: true,
    }),
  ],

  server: {
    host: true,
  },

  build: {
    target: 'esnext',

    rollupOptions: {
      external,
      output: {
        format: 'cjs' as const,
        inlineDynamicImports: true,
      },
    },

    reportCompressedSize: false,
  },

  ssr: {
    noExternal: command === 'build' || undefined,
    external,
  },

  optimizeDeps: {
    esbuildOptions: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
  },
}));
