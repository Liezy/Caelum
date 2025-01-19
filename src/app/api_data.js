require('dotenv').config();

const apikey = process.env.API_KEY;
const cidade = "Palmas";
const link = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=metric`;


fetch(link)
.then((response) => {
    if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
.then((dados) => {
  //Dados da cidade
  const city_name = dados.name;
  const cod_city = dados.cod;
  const country = dados.sys.country;
  const coords = [dados.coord.lon, dados.coord.lat];
  //Dados do nascer do sol, e por do sol
  const sunrise = (new Date(dados.sys.sunrise * 1000)).toLocaleString();
  const sunset = (new Date(dados.sys.sunset * 1000)).toLocaleString();
  //Dados de temperatura
  const temp = dados.main.temp;
  const temp_min = dados.main.temp_min;
  const temp_max = dados.main.temp_max;
  const feels_like = dados.main.feels_like;
  //Dados do tempo
  const weather = dados.weather[0].main;
  const weather_desc = dados.weather[0].description;
  const humidity = dados.main.humidity;
  const wind_speed = dados.wind.speed;
  //Imprimindo os dados na tela
  console.log("Nome da cidade:", city_name);
  console.log("Código da cidade:", cod_city);
  console.log("País:", country);
  console.log("Coordenadas (longitude, latitude):", coords[0], coords[1]);
  console.log("Nascer do sol:", sunrise);
  console.log("Pôr do sol:", sunset);
  console.log("Temperatura atual:", temp, "°C");
  console.log("Temperatura mínima:", temp_min, "°C");
  console.log("Temperatura máxima:", temp_max, "°C");
  console.log("Sensação térmica:", feels_like, "°C");
  console.log("Condições climáticas:", weather);
  console.log("Descrição das condições:", weather_desc);
  console.log("Umidade:", humidity, "%");
  console.log("Velocidade do vento:", wind_speed, "m/s");
  })
.catch((erro) => {
    console.error("Ocorreu um erro:", erro.message);
  });
/*
  {
    coord: { lon: -48.3603, lat: -10.2128 },
    weather: [
      { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }
    ],
    base: 'stations',
    main: {
      temp: 29.93,
      feels_like: 32.32,
      temp_min: 29.93,
      temp_max: 29.93,
      pressure: 1012,
      humidity: 58,
      sea_level: 1012,
      grnd_level: 977
    },
    visibility: 10000,
    wind: { speed: 3.09, deg: 270 },
    clouds: { all: 20 },
    dt: 1737302883,
    sys: {
      type: 1,
      id: 8419,
      country: 'BR',
      sunrise: 1737277510,
      sunset: 1737322974
    },
    timezone: -10800,
    id: 3474574,
    name: 'Palmas',
    cod: 200
  }*/