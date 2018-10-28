import { createStore } from 'redux';

let initState = {
    count: 10
}

function counter(state = initState, action) {
  console.log(action)
  console.log(state.count)
  switch (action.type) {
  case 'INCREMENT':
    return state.count + 1;
  case 'DECREMENT':
    return {
      count: state.count-1
    };
  default:
    return state;
  }
}

let store = createStore(counter);

export default store