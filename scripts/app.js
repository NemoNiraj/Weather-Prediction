// const cityForm = document.querySelector('form');
// const card = document.querySelector('.card');
// const details = document.querySelector('.details');
// const time = document.querySelector('img.time');
// const icon = document.querySelector('.icon img');

// const updateUI = (data) => {
//   // const cityDets = data.cityDets;
//   // const weather = data.weather;

//   //destr
//   const { cityDets, weather } = data;

//   //update details
//   details.innerHTML = `
//      <h5 class="my-3">${cityDets.EnglishName}</h5>
//      <div class="my-3">${weather.WeatherText}</div>
//      <div class="display-4 my-4">
//         <span>${weather.Temperature.Metric.Value}</span>
//         <span>&deg;C</span>
//     </div>`;

//   //update day/night
//   const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
//   icon.setAttribute('src', iconSrc);

//   let timeSrc = null;
//   if (weather.IsDayTime) {
//     timeSrc = 'img/day.svg';
//   } else {
//     timeSrc = 'img/night.svg';
//   }
//   time.setAttribute('src', timeSrc);

//   //remove d-none
// if (card.classList.contains('d-none')) {
//   card.classList.remove('d-none');
// }
// };

// const updateCity = async (city) => {
//   const cityDets = await getcity(city);
//   const weather = await getweather(cityDets.Key);

//   return { cityDets, weather };
// };

// cityForm.addEventListener('submit', (e) => {
//   // def action
//   e.preventDefault();

//   const city = cityForm.city.value.trim();
//   cityForm.reset();

//   //update ui
//   updateCity(city)
//     .then((data) => updateUI(data))
//     .catch((err) => console.log(err));
// });

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');

const updateUI = (data) => {
  const cityDets = data.cityDets;
  const weather = data.weather;

  //update
  details.innerHTML = `
  
    <h5 class="my-3">${cityDets.EnglishName}</h5>
                    <div > <h6>Day 1 ${weather.DailyForecasts[0].Day.IconPhrase} </h6></div>
                    <div > <h6>Day 2 ${weather.DailyForecasts[1].Day.IconPhrase} </h6></div>
                    <div > <h6>Day 3 ${weather.DailyForecasts[2].Day.IconPhrase} </h6></div>
                    <div > <h6>Day 4 ${weather.DailyForecasts[3].Day.IconPhrase} </h6></div>
                    <div > <h6>Day 5 ${weather.DailyForecasts[4].Day.IconPhrase} </h6></div>
                    <div class="display-4 my-4">
                    </div>
  `;

  // let theTime = 'img/download.jpg';
  // time.setAttribute('img/download.jpg');

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

const updateCity = async (city) => {
  const cityDets = await getcity(city);
  const weather = await getweather(cityDets.Key);

  return {
    cityDets,
    weather,
  };
};

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
