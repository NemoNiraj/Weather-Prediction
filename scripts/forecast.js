const key = 'xtafwtofhQK8eUdsekJQm4Wa7xYsUka1';
//349727  329260

//Get weather
// const getTime = async (id) => {
//   const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//   const query = `${id}?apikey=${key}`;

//   const response = await fetch(base + query);
//   const data = await response.json();

//   return data[0];
// };

const getweather = async (id) => {
  const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  // console.log(data);
  return data;
};

//Get city
const getcity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  // console.log(data[0]);
  return data[0];
};

//getweather('329260');
//getcity('manchester');

getcity('manchester')
  .then((data) => {
    return getweather(data.Key);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
