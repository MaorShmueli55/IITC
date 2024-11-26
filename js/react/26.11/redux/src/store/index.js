import { createStore } from 'redux';
import todoReducer from './reducers/TodoReducer';

export const store = createStore(todoReducer);