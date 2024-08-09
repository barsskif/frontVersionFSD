import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type typeInitialState = {
  selectVersionGpt: string | null;
  isLoading: boolean;
  isError: boolean;
};

const initialState: typeInitialState = {
    selectVersionGpt: null,
    isLoading: false,
    isError: false,
};

export const selectVersionGptSlice = createSlice({
  name: 'selectVersionGptSlice',
  initialState,
  reducers: {
    setSelectVersionGptSuccess: (state, action: PayloadAction<string>) => {
      state.selectVersionGpt = action.payload;
    },
    setSelectVersionGptError: (state, action) => {
        state.isError = action.payload;
    },
  },
});

export default selectVersionGptSlice.reducer;

export const { setSelectVersionGptSuccess, setSelectVersionGptError} = selectVersionGptSlice.actions;
