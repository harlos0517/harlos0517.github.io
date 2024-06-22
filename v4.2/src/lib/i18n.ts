import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'

import en from '$lib/locale/en.json'
import zhTw from '$lib/locale/zh-TW.json'

addMessages('zh-TW', zhTw)
addMessages('en', en)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})
