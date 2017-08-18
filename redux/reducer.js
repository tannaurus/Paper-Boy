import {
  SET_STORIES,
  SET_HEADLINES,
  SET_PUBLICATIONS,
  HANDLE_LOADING,
  HANDLE_REFRESH
} from "./actions";

const initialState = {
  loading: false,
  refresh: false,
  headlines: [],
  stories: [],
  publications: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORIES:
      return Object.assign({}, state, {
        stories: action.stories,
        loading: false
      });
    case HANDLE_REFRESH:
      return Object.assign({}, state, { refresh: !state.refresh });
    case HANDLE_LOADING:
      return Object.assign({}, state, { loading: true });
    case SET_HEADLINES:
      return Object.assign({}, state, { headlines: action.headlines });
    case SET_PUBLICATIONS:
      return Object.assign({}, state, {
        publications: action.publications,
        loading: false
      });
    default:
      return state;
  }
};
