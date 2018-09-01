import Cookies from 'universal-cookie'

class Settings {
  constructor() {
    this.cookies = new Cookies()
  }

  getCurrLang() {
    return this.cookies.get('currLang')
  }

  setCurrLang(lang) {
    this.cookies.set('currLang', lang)
  }
}

export const settings = new Settings()
