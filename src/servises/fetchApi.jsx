const ApiKey = '6b8f2b0a17abe30be4120c1993396bbf';

export const fetchTrends = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`;
  const resp = await fetch(url);
  return await resp.json();
};

export const fetchSearch = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
  const resp = await fetch(url);
  return await resp.json();
};

export const fetchDetails = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`;
  const resp = await fetch(url);
  return await resp.json();
};

export const fetchCredit = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`;
  const resp = await fetch(url);
  return await resp.json();
};
export const fetchReviews = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${ApiKey}&language=en-US&page=1`;
  const resp = await fetch(url);
  return await resp.json();
};