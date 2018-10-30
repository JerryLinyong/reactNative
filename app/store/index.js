import { createStore } from 'redux';

let initState = {
    count: 10,
    isLogin: false
}

function counter(state = initState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state.count + 1;
  case 'DECREMENT':
    return {
      count: state.count-1
    };
  case 'LOGIN':
  return {
    ...state,
    isLogin: true
  };
  default:
    return state;
  }
}
let store = createStore(counter);

export default store