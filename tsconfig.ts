/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        files: [
            './src/App.vue',
            './src/components/**/*.{js,vue,ts}',
            './src/layouts/**/*.vue',
            './src/pages/**/*.vue',
            './src/plugins/**/*.{js,ts}',
            './index.html',
        ],
    },
    theme: {
        extend: {
            screens: {
                '2xl': '1440px',
            },
            colors: {
                primary: {
                    DEFAULT: '#636ED2',
                    hover: '#636ED2',
                    light: '#EFF0FB',
                },

                error: {
                    DEFAULT: '#E93F3F',
                    hover: '#E93F3F',
                },
            },

            height: {
                field: '40px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('tailwind-children'),
        require('@vueform/slider/tailwind'),
    ],
};
