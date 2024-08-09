import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { selectVersionGptSlice } from '@src/features/Settings/model/servsionGptState/slices/versionGptSlice';


const rootReducer = combineReducers({
  selectVersionGpt: selectVersionGptSlice.reducer
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