import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { DEV } from "../../Constants/Base";

export const developersSlice = createSlice({
  name: "developers",
  initialState: {
    loading: true,
    developers: [],
    favorites: [],
  },
  reducers: {
    getDevelopers: (state, action) => {
      state.developers = [...action.payload.data];
      const favorites = localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : [];
      state.favorites = [...favorites];
      state.loading = false;
    },
    getDevelopersLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    makeDevFavorite: (state, action) => {
      const favoriteDev = current(state.developers).find(
        (item) => item.profile_id === action.payload.dev
      );
      if (current(state.favorites).includes(favoriteDev.profile_id)) {
          const indexToRemove = current(state.favorites).findIndex(item => item === favoriteDev.profile_id);
          const fav = JSON.parse(localStorage.getItem("favorites"));
          fav.splice(indexToRemove, 1);
          localStorage.setItem("favorites", JSON.stringify(fav));
          state.favorites = fav;
      } else {
        state.favorites.push(favoriteDev.profile_id);
        if (localStorage.getItem("favorites")) {
          const favorites = JSON.parse(localStorage.getItem("favorites"));
          favorites.push(favoriteDev.profile_id);
          localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
          localStorage.setItem(
            "favorites",
            JSON.stringify([favoriteDev.profile_id])
          );
        }
      }
    },
  },
});

export const { getDevelopers, getDevelopersLoading, makeDevFavorite } =
  developersSlice.actions;

export const fetchDevData = () => {
  return async (dispatch) => {
    dispatch(getDevelopersLoading({ loading: true }));
    try {
      const {
        data: {
          data: {
            service_search_results: { hits },
          },
        },
      } = await axios.get(DEV);
      const data = hits.map((item) => item._source);
      dispatch(getDevelopers({ data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export default developersSlice.reducer;
