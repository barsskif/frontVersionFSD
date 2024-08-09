import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type typeInitialState = {
  selectVersionGptCurent: string | null;
  allVersionGpt: string[] | [];
  isLoading: boolean;
  isError: boolean;
};

const initialState: typeInitialState = {
  selectVersionGptCurent: null,
  allVersionGpt: [],
  isLoading: false,
  isError: false,
};

export const selectVersionGptSlice = createSlice({
  name: 'selectVersionGptSlice',
  initialState,
  reducers: {
    setSelectVersionGptSuccess: (state, action: PayloadAction<string>) => {
      state.selectVersionGptCurent = action.payload;
    },
    setSelectVersionGptError: (state, action) => {
        state.isError = action.payload;
    },
    getAllVersionGpt: (state, action) => {
      state.allVersionGpt = action.payload;
    },
  },
});

export default selectVersionGptSlice.reducer;

export const { setSelectVersionGptSuccess, setSelectVersionGptError, getAllVersionGpt } = selectVersionGptSlice.actions;
