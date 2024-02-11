import fs from 'fs'
import { I18n } from 'i18n'
import pug from 'pug'
import sass from 'sass'

import { types, works } from './collection'

const pugPages = ['index', 'commission', 'collection']
const sassStyles = ['layout', 'index', 'commission', 'commission.en', 'commission.zh', 'collection']
const staticFolders = ['images']

const sourceDir = 'src'
const destDir = '../docs'

const enableLocale = false
const locales = ['en', 'zh-TW']
const defaultLocale = 'en'

const i18n = new I18n({
  locales,
  directory: 'locale',
  updateFiles: false,
})

const buildLocale = (locale: string, dir: string) => {
  try {
    if (!fs.existsSync(`${dir}`)) fs.mkdirSync(`${dir}`, { recursive: true })
    staticFolders.forEach(folder => {
      if (!fs.existsSync(`${dir}/${folder}`))
        fs.mkdirSync(`${dir}/${folder}`, { recursive: true })
      fs.cpSync(`${sourceDir}/${folder}`, `${dir}/${folder}`, { recursive: true })
    })

    pugPages.forEach(async name => {
      try {
        const html = pug.renderFile(`${sourceDir}/${name}.pug`, {
          basedir: `${sourceDir}/`,
          filters: {
            t: (text: string, options: { lang: string }) =>
              i18n.__({ phrase: text, locale: options.lang }),
          },
          lang: locale,
          collectionTypes: types,
          collections: works,
          t: (text: string, lang: string) =>
            i18n.__({ phrase: text, locale: lang }),
        })
        await fs.writeFileSync(`${dir}/${name}.html`, html)
      } catch (e) {
        console.error(e)
      }
    })

    sassStyles.forEach(async name => {
      try {
        const result = await sass.compileAsync(`${sourceDir}/${name}.sass`)
        await fs.writeFileSync(`${dir}/${name}.css`, result.css)
      } catch (e) {
        console.error(e)
      }
    })
  } catch (e) {
    console.error(e)
  }
}

try {
  fs.rmSync(destDir, { recursive: true, force: true })
  fs.mkdirSync(destDir)
  buildLocale(defaultLocale, destDir)
  if (enableLocale)
    locales.forEach(locale => { buildLocale(locale, `${destDir}/${locale}`) })
} catch (e) {
  console.error(e)
}
