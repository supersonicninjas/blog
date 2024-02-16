import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    darkMode: ['class'],
    content:[
        './components/**/**.vue',
        './content/**/**.{yml,md}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                red: {
                    '50': '#fff0f0',
                    '100': '#ffdddd',
                    '200': '#ffc0c0',
                    '300': '#ff9494',
                    '400': '#ff5757',
                    '500': '#A81C27',
                    '600': '#fe0000',
                    '700': '#d70000',
                    '800': '#b10303',
                    '900': '#920a0a',
                    '950': '#500000',
                },

                blue: {
                    '50': '#f0fdfc',
                    '100': '#cafdf9',
                    '200': '#96f9f3',
                    '300': '#4deeea',
                    '400': '#27d8da',
                    '500': '#0ebabe',
                    '600': '#089399',
                    '700': '#0b747a',
                    '800': '#0e5c61',
                    '900': '#114c50',
                    '950': '#022c31',
                },

                yellow: {
                    '50': '#f4ffe5',
                    '100': '#eaffc2',
                    '200': '#e0ff85',
                    '300': '#e6ff42',
                    '400': '#f7ff0f',
                    '500': '#ffe500',
                    '600': '#d19d00',
                    '700': '#a76502',
                    '800': '#8a480a',
                    '900': '#75330f',
                    '950': '#431504',
                },
            },
            backgroundImage: {
                bars: 'url(\'/images/bars.svg\')',
                triangles: 'url(\'/images/triangles.svg\')',
            },
        },
    },
}
