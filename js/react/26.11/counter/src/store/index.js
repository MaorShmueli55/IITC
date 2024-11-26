import { createStore } from 'redux';
import counterReducer from './reducer/CounterReducer';


export const store = createStore(counterReducer);