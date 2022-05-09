import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import navigation from './navigation';

const reducer = combineReducers({
  navigation
});

const middleware = [thunk];

export default configureStore({ reducer, middleware });
