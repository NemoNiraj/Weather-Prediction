const key = 'xtafwtofhQK8eUdsekJQm4Wa7xYsUka1';

const getweather = async (id) => {
  const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  
  return data;
};

//Get city
const getcity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  
  return data[0];
};

