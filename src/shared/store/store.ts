import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { globalVersionGptSlice } from '@src/features/Global/model/globalVervsionGptState/slices/versionGptSlice';
import { selectVersionGptSlice } from '@src/features/Settings/model/vervsionGptState/slices/versionGptSlice';


const rootReducer = combineReducers({
  selectVersionGpt: selectVersionGptSlice.reducer,
  globalVersionGptSlice: globalVersionGptSlice.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];