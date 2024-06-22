import colors from 'tailwindcss/colors'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      youtube: '#FF0000',
      twitch: '#9147ff',
      musescore: '#2E68C0',
      twitter: '#1DA1F2',
      facebook: '#0866FF',
      discord: '#5865F2',
      kofi: '#1AC0FF',
      ecpay: '#3C651C',
      opay: '#227BBB',
      plurk: '#FF574D',
      marshmallow: '#F3969A',
      instagram: '#C13584',
      ...colors,
    },
  },
  plugins: [daisyui],
}

