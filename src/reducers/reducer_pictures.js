import { FETCH_PICTURES } from '../actions/index';

const INITIAL_STATE = [];

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PICTURES:
      console.log('reducer', action.payload);
      return [...state, action.payload];
  }
  return state;
}
