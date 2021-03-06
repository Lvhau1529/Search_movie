import axios from "axios";
import * as moment from "moment";

function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export const getDataMoviesHome = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=f379b750fd188bc3ec72f0760d768302&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};

export const getDataMoviesUpComing = async (page = 1) => {
  let date = new Date();
  let d = date.getDate();
  d = d < 10 ? `0${d}` : d;
  let m = date.getMonth() + 1;
  m = m < 10 ? `0${m}` : m;
  let y = date.getFullYear();
  let today = `${y}-${m}-${d}`;
  let nextTime = addDays(today, 30);

  nextTime = moment(nextTime).utc().format("YYYY-MM-DD");

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=f379b750fd188bc3ec72f0760d768302&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${today}&release_date.lte=${nextTime}&with_release_type=3|2`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};

export const getDataMoviesTrending = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=f379b750fd188bc3ec72f0760d768302`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};

export const getDataMoviesById = async (id = 0) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f379b750fd188bc3ec72f0760d768302&language=en-US&append_to_response=videos,images&include_image_language=en-US,null`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};

export const searchMovieByKeywords = async (keywords = "", page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${keywords}&api_key=f379b750fd188bc3ec72f0760d768302&page=${page}`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};
