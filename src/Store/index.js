import { configureStore } from "@reduxjs/toolkit";
import developerReducer from './slices/developersSlice';

export default configureStore({
  reducer: {developer: developerReducer},
});
