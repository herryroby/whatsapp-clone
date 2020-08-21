import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { callsData } from './../../data/mocks';

export interface Call {
  id: number;
  contactName: string;
  contactAvatar: string;
  timestamp: string;
}

export interface CallsState {
  loading: boolean;
  error: string | null;
  data: Call[];
}

const initialState: CallsState = {
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

const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setData: (state, { payload }: PayloadAction<Call[]>) => {
      state.data = payload;
    },
  },
});

export const { setLoading, setError, setData } = callsSlice.actions;

export default callsSlice.reducer;

export const fetchCalls = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    dispatch(setData(callsData));
  } catch (err) {
    dispatch(setError(err.message));
  }
  dispatch(setLoading(false));
};
