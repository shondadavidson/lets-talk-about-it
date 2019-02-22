const initState = {
  background: false
};

const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

export default function reducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return Object.assign({}, state, { background: !state.background });
    default:
      return state;
  }
}

export function toggle() {
  return {
    type: TOGGLE_SETTINGS
  };
}
