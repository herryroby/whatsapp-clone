import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userData } from '../../data/mocks';
import { AppThunk } from '../store';

export interface User {
  id: number;
  email: string;
  username: string;
  avatar: string;
}

export interface UserState {
  loading: boolean;
  error: string | null;
  data: User;
}

const initialState: UserState = {
  loading: false,
  error: null,
  data: {
    id: 0,
    email: '',
    username: '',
    avatar: 'https://cracku.in/static/img/no-avatar.png',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setData: (state, { payload }: PayloadAction<User>) => {
      state.data = payload;
    },
  },
});

export const { setLoading, setError, setData } = userSlice.actions;

export default userSlice.reducer;

export const fetchUser = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    dispatch(setData(userData));
  } catch (err) {
    dispatch(setError(err.message));
  }
  dispatch(setLoading(false));
};
