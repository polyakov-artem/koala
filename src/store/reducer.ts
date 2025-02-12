import { combineReducers } from 'redux';
import { api } from './api';

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export default reducer;
