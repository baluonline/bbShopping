import { useReducer } from 'react';
import { combineReducers } from 'redux';

import * as actions from '../actions';
// import { FETCH_USERS_JSON } from '../actions/index'

import { jsonPlaceHolder } from './jsonplaceholder';

const initialState = {
  userName: '',
  userPic: null,
  pageNumber: 0,
  itemsCount: 10,
  users: [],
  disabledLinks: false,
  disabledPrevious: false,
  jsonUsers: []
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        disabledLinks: state.pageNumber > 1
      };
    case actions.DECREMENT:
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
        disabledPrevious: state.pageNumber < 1
      };
    case actions.FETCH_USERS:
      return {
        ...state,
        users: action.data,
        disabledPrevious: state.pageNumber < 1
      };
    case actions.DISABLED_LINK:
      console.log(state.disabledLinks);
      return {
        ...state,
        disabledLinks: state.pageNumber < 1
      };
    default:
      return state;
  }
};

const shoppingCardsReducers = combineReducers({
  counterReducer,
  jsonPlaceHolder
});

export default shoppingCardsReducers;
