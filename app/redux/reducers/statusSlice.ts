import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { statusData } from './../../data/mocks';

export interface Status {
  id: number;
  contactName: string;
  contactAvatar: string;
  timestamp: string;
}

export interface StatusState {
  loading: boolean;
  error: string | null;
  data: Status[];
}

const initialState: StatusState = {
  loading: false,
  error: null,
  data: [
    {
      id: 0,
      contactName: '',
      contactAvatar: '',
      timestamp: '',
    },
  ],
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setData: (state, { payload }: PayloadAction<Status[]>) => {
      state.data = payload;
    },
  },
});

export const { setLoading, setError, setData } = statusSlice.actions;

export default statusSlice.reducer;

export const fetchStatus = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    dispatch(setData(statusData));
  } catch (err) {
    dispatch(setError(err.message));
  }
  dispatch(setLoading(false));
};
