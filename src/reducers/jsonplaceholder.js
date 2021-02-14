import * as actions from '../actions/index'

const initialState = {
  jsonUsers: []
}

export const jsonPlaceHolder = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_JSON:
      return {
        ...state,
        jsonUsers: action.data
      }
      break
      case actions.INCREMENT:
        return {
          ...state,
          pageNumber: state.pageNumber + 1,
          disabledLinks: state.pageNumber > 1
        }
      case actions.DECREMENT:
        return {
          ...state,
          pageNumber: state.pageNumber - 1,
          disabledPrevious: state.pageNumber < 1
        }
    default:
      return state
  }
}
