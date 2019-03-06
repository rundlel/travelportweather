import axios from 'axios';

export const getCurrentWeather = async (city) =>{
    return new Promise((resolve, reject)=>{
        axios({
          url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bd8326266ffeb1b662cf75fadf5dee2a&units=metric`,
              method: "GET",
        }).then(result =>{
          resolve(result.data)
        })
        .catch(err => {
          reject(err);
        });
      })
}

export const parseWeatherData = (data) =>{
    const city = data.name;
    const temperature = data.main.temp;
    const icon = data.weather[0].icon;
    const weather = data.weather[0].main;
    return {city, icon, temperature, weather};
};

export const getWeatherForCity = (city)=>{
    return new Promise((resolve, reject)=>{
        axios({
          url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=bd8326266ffeb1b662cf75fadf5dee2a&units=metric`,
              method: "GET",
        }).then(result =>{
          resolve(result.data)
        })
        .catch(err => {
          reject(err);
        });
      })

}

