import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CURRENCY} from "../../Constants/Base";

export const currencySlice = createSlice({
  name: "currencies",
  initialState: {
    loading: true,
    currencies: [],
  },
  reducers: {
    getcurrencies: (state, action) => {
      state.currencies = [...action.payload.currencies];
      state.loading = false;
    },
    getcurrenciesLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { getcurrencies, getcurrenciesLoading } = currencySlice.actions;

export const fetchCurData = () => {
  return async (dispatch) => {
    dispatch(getcurrenciesLoading({ loading: true }));
    try {
      const {data: {data: {currencies}}} = await axios.get(CURRENCY);
      dispatch(getcurrencies({ currencies }));
    } catch (error) {
      console.log(error);
    }
  };
};

export default currencySlice.reducer;
