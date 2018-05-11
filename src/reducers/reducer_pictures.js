import { FETCH_PICTURES } from '../actions/index';

const INITIAL_STATE = [];

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PICTURES:
      return [...INITIAL_STATE, ...action.payload];
    default:
      return state;
  }
}
