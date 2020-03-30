import * as axios from 'axios';

import { API } from './config';

const getMovie = async function (searchTitle) {
  try {
    var searches = new Array();
    var searchSuccess = new Array();
    if (localStorage['searches']) {
      searches = JSON.parse(localStorage.getItem('searches'));
      searchSuccess = JSON.parse(localStorage.getItem('searchSuccess'));
    }
    searches.push(searchTitle);
    var JSONReadySearches = JSON.stringify(searches);
    localStorage.setItem('searches', JSONReadySearches);
    console.log(localStorage.getItem('searches'));
    const response = await axios.get(API + searchTitle);
    let result = parseList(response);
    console.log(result);
    if (result.Response == 'False') {
      searchSuccess.push('not found')
    }
    else {
      searchSuccess.push('found');
    }
    var JSONReadySearcheSuccess = JSON.stringify(searchSuccess);
    localStorage.setItem('searchSuccess', JSONReadySearcheSuccess);
    console.log(localStorage.getItem('searchSuccess'));
    return result;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const dataService = {
  getMovie,
};
