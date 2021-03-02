export const TOGGLE_FAV = 'Toggle favourite';
export const SET_FILTERS = 'Set filters';

export const toggleFav = id => {
  return { type: TOGGLE_FAV, id: id };
}

export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings };
}