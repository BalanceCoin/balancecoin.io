import { LangAction } from './LangConst'

import langEn from './LangEn'
import langCn from './LangCn'
import { settings } from './settings'

function getInitialState() {
  let currLang = settings.getCurrLang()
  if (typeof currLang === 'undefined') {
    currLang = 'EN'
  }
  switch (currLang) {
    case 'EN':
      return {
        ...langEn
      }
    case 'CN':
      return {
        ...langCn
      }
    default:
      return {
        ...langEn
      }
  }
}

const initialState = getInitialState()

export default (state = initialState, action) => {
  switch (action.type) {
    case LangAction.SWITCH_LANGUAGE:
      settings.setCurrLang(action.toLang)
      if (action.toLang === 'CN') {
        return {
          ...state,
          ...langCn
        }
      } else if (action.toLang === 'EN') {
        return {
          ...state,
          ...langEn
        }
      }
      break
    default:
      return state
  }
}
