import { createStore } from 'redux';
import reducers from './reducers/reducers';
import add_reducer from './reducers/add.reducer'
import initialState from './initialState';

const store = createStore(add_reducer, initialState);

export default store;

//store.subscribe(() => console.info(store.getState()));