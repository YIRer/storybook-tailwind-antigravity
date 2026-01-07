import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/stroybook-lib.es.js',
        format: 'esm',
        sourcemap: true,
        banner: '"use client";',
      },
      {
        file: 'dist/stroybook-lib.umd.js',
        format: 'umd',
        name: 'StroybookLib',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.stories.tsx'],
        noEmit: false
      }),
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
      }),
      postcss({
        extensions: ['.css'],
        extract: 'index.css',
        minimize: true,
        config: {
          path: './postcss.config.js'
        }
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
      }),
      dts()
    ],
    external: [/\.css$/],
  },
];
