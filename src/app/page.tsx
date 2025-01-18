'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

//endpoint = 'https://api.openweathermap.org/data/2.5/weather?q=Palmas,BR&appid=SUA_API_KEY&units=metric'
//Modularização e organização das interfaces TypeScript para representar os dados da API do OpenWeatherMap

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number; // Propriedade opcional
    grnd_level?: number; // Propriedade opcional
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number; // Opcional
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number; // Opcional
    id?: number; // Opcional
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default function Home() {

  const { isPending, error, data } = useQuery<WeatherData>({
    queryKey: ['repoData'],
    queryFn: async () => {
      // implementação com fetch
      /* return fetch('https://api.openweathermap.org/data/2.5/weather?q=Palmas,BR&appid=.env.local&units=metric').then((res) =>
        res.json());*/

      //nova implementação com Axios
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Palmas,BR&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
      );

      return response.data;
    }
  })

  console.log('Data', data);

  if (isPending) return (
    <div className="flex items-center min-h-screen justify-center">
      <p className="animate-bounce">Carregando meu chapa...</p>
    </div>
  )

  return (
    <div>
      <main>
        {/* dados de hoje */}
        <section>
          <div>
            <h2>
              <p></p>
            </h2>
            <div></div>
          </div>
        </section>
        {/* dados dos próximos 5 dias */}
        <section></section>
      </main>
    </div>
  );
}