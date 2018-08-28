import { LangAction } from './LangConst'

import langEn from './LangEn'
import langCn from './LangCn'

const initialState = {
  ...langEn
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LangAction.SWITCH_LANGUAGE:
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
