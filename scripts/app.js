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
