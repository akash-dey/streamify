export const selectHome = state => state.homeReducer;

export const selectActionMoviesRequesting = state =>
  selectHome(state).actionMoviesRequesting;

export const selectActionMovies = state => selectHome(state).actionMovies;

export const selectActionMoviesError = state =>
  selectHome(state).actionMoviesError;

export const selectRomanceMoviesRequesting = state =>
  selectHome(state).romanceMoviesRequesting;

export const selectRomanceMovies = state => selectHome(state).romanceMovies;

export const selectRomanceMoviesError = state =>
  selectHome(state).romanceMoviesError;

export const selectHorrorMoviesRequesting = state =>
  selectHome(state).horrorMoviesRequesting;

export const selectHorrorMovies = state => selectHome(state).horrorMovies;

export const selectHorrorMoviesError = state =>
  selectHome(state).horrorMoviesError;

export const selectTrendingMoviesRequesting = state =>
  selectHome(state).trendingMoviesRequesting;

export const selectTrendingMovies = state => selectHome(state).trendingMovies;

export const selectTrendingMoviesError = state =>
  selectHome(state).trendingMoviesError;

export const selectGenreList = state => selectHome(state).genreList;

export const selectMovieListRequesting = state =>
  selectHome(state).movieListRequesting;

export const selectMovies = state => selectHome(state).movieList;

export const selectMovieListError = state => selectHome(state).movieListError;

export const selectMovieTrailerUrlRequesting = state =>
  selectHome(state).movieTrailerUrlRequesting;

export const selectMovieTrailerUrl = state => selectHome(state).movieTrailerUrl;

export const selectMovieTrailerUrlError = state =>
  selectHome(state).movieTrailerUrlError;
