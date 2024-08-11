import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type typeInitialState = {
    selectVersionGptCurrent: string | null;
    allVersionGpt: string[] | [];
    isLoading: boolean;
    isError: boolean;
};

const initialState: typeInitialState = {
    selectVersionGptCurrent: null,
    allVersionGpt: [],
    isLoading: false,
    isError: false,
};

export const globalVersionGptSlice = createSlice({
  name: 'globalVersionGptSlice',
  initialState,
  reducers: {
    setSelectVersionGptLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSelectVersionGptSuccess: (state, action: PayloadAction<string>) => {
      state.selectVersionGptCurrent = action.payload;
    },
    setSelectVersionGptError: (state, action) => {
        state.isError = action.payload;
    },
    getAllVersionGpt: (state, action) => {
      state.allVersionGpt = action.payload;
    },
  },
});

export default globalVersionGptSlice.reducer;

export const { 
    setSelectVersionGptSuccess, 
    setSelectVersionGptError, 
    getAllVersionGpt, 
    setSelectVersionGptLoading
 } = globalVersionGptSlice.actions;
