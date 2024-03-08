import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    horrorMovies: null,
    popularMovies: null,
    actionMovies: null,
    fictionMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addActionMovies: (state, action) => {
      state.actionMovies = action.payload;
    },
    addFictionMovies: (state, action) => {
      state.fictionMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addActionMovies,
  addFictionMovies,
  addHorrorMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
