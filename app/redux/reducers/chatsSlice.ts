import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { chatData } from './../../data/mocks';

export interface Chat {
  convId: number;
  user: string;
  message: string;
  timestamp: string;
}

export interface ChatRoom {
  chatRoomId: number;
  contactName: string;
  contactAvatar: string;
  snippet: string;
  latestUpdateTime: string;
  conversations: Chat[];
}

export interface ChatRoomState {
  loading: boolean;
  error: string | null;
  data: ChatRoom[];
}

const initialState: ChatRoomState = {
  loading: false,
  error: null,
  data: [
    {
      chatRoomId: 0,
      contactName: '',
      contactAvatar: '',
      snippet: '',
      latestUpdateTime: '',
      conversations: [
        {
          convId: 0,
          user: '',
          message: '',
          timestamp: '',
        },
      ],
    },
  ],
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setData: (state, { payload }: PayloadAction<ChatRoom[]>) => {
      state.data = payload;
    },
  },
});

export const { setLoading, setError, setData } = chatsSlice.actions;

export default chatsSlice.reducer;

export const fetchChats = (chat = chatData): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    dispatch(setData(chat));
  } catch (err) {
    dispatch(setError(err.message));
  }
  dispatch(setLoading(false));
};
