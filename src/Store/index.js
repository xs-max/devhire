import { configureStore } from "@reduxjs/toolkit";
import developerReducer from './slices/developersSlice';
import currencyReducer from "./slices/currencySlice";

export default configureStore({
  reducer: {developer: developerReducer, currency: currencyReducer},
});
