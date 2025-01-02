import { defineConfig } from 'tsup'

export default defineConfig({
    entryPoints: ['src/index.ts'],
    outDir: 'dist',
    format: ['cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: true,
    external: ['fs', 'path'],
    tsconfig: 'tsconfig.json',
})
