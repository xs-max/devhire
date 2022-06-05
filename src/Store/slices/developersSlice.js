import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {DEV} from '../../Constants/Base'

export const developersSlice = createSlice({
  name: "developers",
  initialState: {
    loading: true,
    developers: [],
  },
  reducers: {
    getDevelopers: (state, action) => {
      state.developers = [...action.payload.data];
      state.loading = false;
    },
    getDevelopersLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { getDevelopers, getDevelopersLoading } = developersSlice.actions

export const fetchDevData =  () => {
    return async (dispatch) => {
        dispatch(getDevelopersLoading({ loading: true }));
        try {
            const {data: {data: {service_search_results: {hits}}}} = await axios.get(DEV)
            const data = hits.map(item => item._source);
            dispatch(getDevelopers({ data }));
        }catch (error) {
            console.log(error);
        }

    }
}


export default developersSlice.reducer;
