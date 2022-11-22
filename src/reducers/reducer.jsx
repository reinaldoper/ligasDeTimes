import {
  NAMEINPUT,
  NEWNAME,
} from '../actions/action';

const INICIAL_STATE = {
  books: [],
  newPok: [],
};

const reducerFetch = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case NAMEINPUT: return ({ ...state, books: action.payload });
  case NEWNAME: return ({ ...state, newPok: action.payload });
  default: return state;
  }
};

export default reducerFetch;
