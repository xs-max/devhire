import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { CURRENCY} from "../../Constants/Base";

export const currencySlice = createSlice({
  name: "currencies",
  initialState: {
    loading: true,
    currencies: [],
    netConversions: [],
    currentCurrency: null,
    rate: null,
  },
  reducers: {
    getcurrencies: (state, action) => {
      state.currencies = [...action.payload.currencies];
      state.netConversions = [...action.payload.net_conversions];
      state.currentCurrency = action.payload.currencies[0];
      state.loading = false;
    },
    getcurrenciesLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    changeCurrency: (state, action) => {
      state.currentCurrency = action.payload.currency;
      const divider = current(state.netConversions).find(item => item.buying_currency_id === action.payload.id && item.currency_id === 1).net_rate;
      state.rate = divider;
    }
  },
});

export const { getcurrencies, getcurrenciesLoading, changeCurrency } = currencySlice.actions;

export const fetchCurData = () => {
  return async (dispatch) => {
    dispatch(getcurrenciesLoading({ loading: true }));
    try {
      const {data: {data: {currencies, net_conversions}}} = await axios.get(CURRENCY);
      dispatch(getcurrencies({ currencies, net_conversions }));
    } catch (error) {
      console.log(error);
    }
  };
};

export default currencySlice.reducer;
