import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type typeInitialState = {
  isLoading: boolean;
  isError: boolean;
};

const initialState: typeInitialState = {
  isLoading: false,
  isError: false,
};

export const selectVersionGptSlice = createSlice({
  name: 'selectVersionGptSlice',
  initialState,
  reducers: {
    setSelectVersionGptLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSelectVersionGptError: (state, action) => {
        state.isError = action.payload;
    },
  },
});

export default selectVersionGptSlice.reducer;

export const { setSelectVersionGptError } = selectVersionGptSlice.actions;
