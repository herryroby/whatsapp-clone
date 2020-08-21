import { combineReducers } from '@reduxjs/toolkit';
import callsReducer from './reducers/callsSlice';
import chatsReducer from './reducers/chatsSlice';
import statusReducer from './reducers/statusSlice';
import userReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  calls: callsReducer,
  chats: chatsReducer,
  status: statusReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
