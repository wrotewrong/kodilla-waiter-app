import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { initialState } from './initialState';
import { tablesReducer } from './tablesReducer';
import { statusReducer } from './requestStatusReducer';
import thunk from 'redux-thunk';

const subreducers = {
  tables: tablesReducer,
  tableRequestPending: statusReducer,
};

const reducer = combineReducers(subreducers);

export const store = legacy_createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
