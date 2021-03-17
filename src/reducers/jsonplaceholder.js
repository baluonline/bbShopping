import * as actions from '../actions';
export const jsonPlaceHolderInitialState = {
  jsonUsers: [],
  pageNumber: 1,
  contactName: '',
  contactEmail: '',
  contactSubject: '',
  contactMessage: ''

};

export const jsonPlaceHolder = (state = jsonPlaceHolderInitialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_JSON:
      return {
        ...state,
        jsonUsers: action.payload
      };
      break;
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
    case actions.CONTACT_DETAILS:
      const name = action.name;
      return {
        ...state,
        [name]: action.payload
      };
    default:
      return state;
  }
};
