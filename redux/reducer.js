import { TO_TESTING } from "./actions";

const initialState = {
  testing: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TO_TESTING:
      return Object.assign({}, state, { testing: false });
    default:
      return state;
  }
};
