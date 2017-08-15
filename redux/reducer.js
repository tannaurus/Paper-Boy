import { TO_TESTING, SET_STORIES } from "./actions";

const initialState = {
  testing: true,
  stories: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TO_TESTING:
      return Object.assign({}, state, { testing: false });
    case SET_STORIES:
      return Object.assign({}, state, { stories: action.stories });
    default:
      return state;
  }
};
