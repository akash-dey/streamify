import {Platform} from 'react-native';

export const genreList = [
  'Action',
  'Romance',
  'Comedy',
  'Horror',
  'Documentaries',
  'Top Rated',
];

export const genre = {
  ACTION: 'Action',
  ROMANCE: 'Romance',
  COMEDY: 'Comedy',
  HORROR: 'Horror',
  DOCUMENTARIES: 'Documentaries',
  TOP_RATED: 'Top Rated',
};

export const tabStyles = {
  tabHeight: Platform.OS === 'ios' ? 70 : 50,
};
