import { Map } from 'immutable';

const initialState = Map({
  login: '',
  tracks: [],
});

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INIT_MAIN': {
      return state
              .set('tracks', action.data);
    }
    default: {
      return state;
    }
  }
}
