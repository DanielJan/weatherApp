import { Provider } from './provider'
import { connect } from './connect'
import { combineReducers } from './combineReducers'

const createStore = rootReducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = rootReducer(state, action);
    console.log('Listeners: ', listeners)
    listeners.forEach(listener => listener(state));
  }

  const subscribe = listener => {
    listeners.push(listener);
  }

  dispatch({}) //Initializing state for the very first time 
  
  return { getState, dispatch, subscribe };
}

export { createStore, combineReducers, connect, Provider };
