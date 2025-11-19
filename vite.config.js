import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        imagetools({
            // 이미지 최적화 설정
            defaultDirectives: (url) => {
                // 쿼리 파라미터가 이미 있으면 그대로 사용
                if (url.searchParams.toString()) {
                    return url.searchParams
                }
                // 쿼리 파라미터가 없으면 기본 최적화 적용
                const ext = url.pathname.split('.').pop()?.toLowerCase()
                if (['png', 'jpg', 'jpeg'].includes(ext || '')) {
                    return new URLSearchParams({
                        format: 'webp',
                        quality: '75',
                    })
                }
                return new URLSearchParams()
            }
        })
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    // React 관련 라이브러리
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'react-vendor';
                        }
                        if (id.includes('swiper')) {
                            return 'swiper-vendor';
                        }
                        // 나머지 node_modules는 별도 청크로 분리
                        return 'vendor';
                    }
                },
                // 청크 파일명 최적화
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
            // Tree shaking 강화
            treeshake: {
                preset: 'recommended',
                moduleSideEffects: false,
            },
        },
        // 자바스크립트 축소 최적화
        minify: 'esbuild',
        // esbuild 최적화 옵션
        esbuild: {
            legalComments: 'none', // 라이선스 주석 제거
            minifyIdentifiers: true,
            minifySyntax: true,
            minifyWhitespace: true,
            treeShaking: true,
        },
        cssCodeSplit: true,
        sourcemap: false,
        // 이미지 최적화를 위한 설정
        assetsInlineLimit: 4096, // 4KB 이하 이미지는 인라인으로 처리
        // 청크 크기 경고 제한
        chunkSizeWarningLimit: 1000,
        // 압축된 크기 보고
        reportCompressedSize: true,
        // 타겟 브라우저 설정으로 번들 크기 최적화
        target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'swiper'],
    },
})
