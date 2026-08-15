export const WEATHER_CONDITIONS = {
  "thunderstorm with light rain": "thunderstorms-rain",
  "thunderstorm with rain": "thunderstorms-overcast-rain",
  "thunderstorm with heavy rain": "thunderstorms-extreme-rain",
  "light thunderstorm": "thunderstorms",
  thunderstorm: "thunderstorms-overcast",
  "heavy thunderstorm": "thunderstorms-extreme",
  "ragged thunderstorm": "extreme-thunderstorms-extreme",
  "thunderstorm with light drizzle": "thunderstorms-drizzle",
  "thunderstorm with drizzle": "thunderstorms-overcast-drizzle",
  "thunderstorm with heavy drizzle": "thunderstorms-extreme-drizzle",
  "light intensity drizzle": "drizzle",
  drizzle: "overcast-day-drizzle",
  "heavy intensity drizzle": "extreme-drizzle",
  "light intensity drizzle rain": "drizzle",
  "drizzle rain": "overcast-day-drizzle",
  "heavy intensity drizzle rain": "extreme-drizzle",
  "shower rain and drizzle": "drizzle",
  "heavy shower rain and drizzle": "extreme-drizzle",
  "shower drizzle": "drizzle",
  "light rain": "rain",
  "moderate rain": "rain",
  "heavy intensity rain": "overcast-rain",
  "very heavy rain": "extreme-rain",
  "extreme rain": "extreme-rain",
  "freezing rain": "sleet",
  "light intensity shower rain": "rain",
  "shower rain": "rain",
  "heavy intensity shower rain": "extreme-rain",
  "ragged shower rain": "rain",
  "light snow": "snow",
  snow: "overcast-snow",
  "heavy snow": "extreme-snow",
  sleet: "overcast-sleet",
  "light shower sleet": "sleet",
  "shower sleet": "sleet",
  "light rain and snow": "sleet",
  "rain and snow": "overcast-sleet",
  "light shower snow": "snow",
  "shower snow": "overcast-snow",
  "heavy shower snow": "extreme-snow",
  mist: "mist",
  smoke: "smoke",
  haze: "haze",
  "sand/dust whirls": "dust",
  fog: "fog",
  sand: "dust",
  dust: "dust",
  "volcanic ash": "volcano",
  squalls: "waterspout",
  tornado: "tornado",
  "clear sky": "clear-day",
  "few clouds": "mostly-clear-day",
  "scattered clouds": "cloudy",
  "broken clouds": "overcast",
  "overcast clouds": "extreme",
};

export const BEAUFORT_WIND_SCALE = [
  { description: "Calm", slug: "wind-beaufort-0" },
  { description: "Light air", slug: "wind-beaufort-1" },
  { description: "Light breeze", slug: "wind-beaufort-2" },
  { description: "Gentle breeze", slug: "wind-beaufort-3" },
  { description: "Moderate breeze", slug: "wind-beaufort-4" },
  { description: "Fresh breeze", slug: "wind-beaufort-5" },
  { description: "Strong breeze", slug: "wind-beaufort-6" },
  {
    description: "High wind, moderate gale, near gale",
    slug: "wind-beaufort-7",
  },
  { description: "Gale, fresh gale", slug: "wind-beaufort-8" },
  { description: "Strong/severe gale", slug: "wind-beaufort-9" },
  { description: "Storm, whole gale", slug: "wind-beaufort-10" },
  { description: "Violent storm", slug: "wind-beaufort-11" },
  { description: "Huriccane force", slug: "wind-beaufort-12" },
];

export const FORECAST_DATA = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1786136400,
            "main": {
                "temp": 25.78,
                "feels_like": 26.27,
                "temp_min": 25.78,
                "temp_max": 25.82,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1009,
                "humidity": 71,
                "temp_kf": -0.04,
                "dew_point": 20.12
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 2.22,
                "deg": 48,
                "gust": 3.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-07 21:00:00"
        },
        {
            "dt": 1786147200,
            "main": {
                "temp": 24.76,
                "feels_like": 25.3,
                "temp_min": 24.26,
                "temp_max": 24.76,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1008,
                "humidity": 77,
                "temp_kf": 0.5,
                "dew_point": 20.46
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 28
            },
            "wind": {
                "speed": 3.3,
                "deg": 13,
                "gust": 5.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-08 00:00:00"
        },
        {
            "dt": 1786158000,
            "main": {
                "temp": 23.29,
                "feels_like": 23.79,
                "temp_min": 23.29,
                "temp_max": 23.29,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1006,
                "humidity": 81,
                "temp_kf": 0,
                "dew_point": 19.67
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.69,
                "deg": 28,
                "gust": 3.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-08 03:00:00"
        },
        {
            "dt": 1786168800,
            "main": {
                "temp": 24.16,
                "feels_like": 24.67,
                "temp_min": 24.16,
                "temp_max": 24.16,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1006,
                "humidity": 78,
                "temp_kf": 0,
                "dew_point": 19.07
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 0.73,
                "deg": 14,
                "gust": 0.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-08 06:00:00"
        },
        {
            "dt": 1786179600,
            "main": {
                "temp": 27.11,
                "feels_like": 28.78,
                "temp_min": 27.11,
                "temp_max": 27.11,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 67,
                "temp_kf": 0,
                "dew_point": 18.88
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 3.47,
                "deg": 337,
                "gust": 3.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-08 09:00:00"
        },
        {
            "dt": 1786190400,
            "main": {
                "temp": 30.77,
                "feels_like": 34.13,
                "temp_min": 30.77,
                "temp_max": 30.77,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 59,
                "temp_kf": 0,
                "dew_point": 18.82
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 3.52,
                "deg": 333,
                "gust": 3.68
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-08 12:00:00"
        },
        {
            "dt": 1786201200,
            "main": {
                "temp": 30.12,
                "feels_like": 33.92,
                "temp_min": 30.12,
                "temp_max": 30.12,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 64,
                "temp_kf": 0,
                "dew_point": 19.83
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 4.41,
                "deg": 348,
                "gust": 5.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-08 15:00:00"
        },
        {
            "dt": 1786212000,
            "main": {
                "temp": 27.36,
                "feels_like": 28.81,
                "temp_min": 27.36,
                "temp_max": 27.36,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1006,
                "humidity": 63,
                "temp_kf": 0,
                "dew_point": 18.28
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 29
            },
            "wind": {
                "speed": 3.84,
                "deg": 6,
                "gust": 6.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-08 18:00:00"
        },
        {
            "dt": 1786222800,
            "main": {
                "temp": 25.12,
                "feels_like": 25.67,
                "temp_min": 25.12,
                "temp_max": 25.12,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1009,
                "humidity": 76,
                "temp_kf": 0,
                "dew_point": 19.56
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 1.62,
                "deg": 9,
                "gust": 3.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-08 21:00:00"
        },
        {
            "dt": 1786233600,
            "main": {
                "temp": 24.37,
                "feels_like": 24.95,
                "temp_min": 24.37,
                "temp_max": 24.37,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1008,
                "humidity": 80,
                "temp_kf": 0,
                "dew_point": 20
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 47
            },
            "wind": {
                "speed": 2.25,
                "deg": 354,
                "gust": 3.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-09 00:00:00"
        },
        {
            "dt": 1786244400,
            "main": {
                "temp": 23.33,
                "feels_like": 23.99,
                "temp_min": 23.33,
                "temp_max": 23.33,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 87,
                "temp_kf": 0,
                "dew_point": 20.56
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 3.75,
                "deg": 18,
                "gust": 6.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-09 03:00:00"
        },
        {
            "dt": 1786255200,
            "main": {
                "temp": 23.47,
                "feels_like": 24.22,
                "temp_min": 23.47,
                "temp_max": 23.47,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 90,
                "temp_kf": 0,
                "dew_point": 21
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 22
            },
            "wind": {
                "speed": 4.25,
                "deg": 24,
                "gust": 7.02
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-09 06:00:00"
        },
        {
            "dt": 1786266000,
            "main": {
                "temp": 24.98,
                "feels_like": 25.52,
                "temp_min": 24.98,
                "temp_max": 24.98,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1007,
                "humidity": 76,
                "temp_kf": 0,
                "dew_point": 20.05
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 16
            },
            "wind": {
                "speed": 3.94,
                "deg": 14,
                "gust": 5.09
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-09 09:00:00"
        },
        {
            "dt": 1786276800,
            "main": {
                "temp": 26.49,
                "feels_like": 26.49,
                "temp_min": 26.49,
                "temp_max": 26.49,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1007,
                "humidity": 70,
                "temp_kf": 0,
                "dew_point": 20.02
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 4.8,
                "deg": 2,
                "gust": 5.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-09 12:00:00"
        },
        {
            "dt": 1786287600,
            "main": {
                "temp": 26.45,
                "feels_like": 26.45,
                "temp_min": 26.45,
                "temp_max": 26.45,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 69,
                "temp_kf": 0,
                "dew_point": 19.82
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 5.18,
                "deg": 5,
                "gust": 6.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-09 15:00:00"
        },
        {
            "dt": 1786298400,
            "main": {
                "temp": 25.21,
                "feels_like": 25.67,
                "temp_min": 25.21,
                "temp_max": 25.21,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 72,
                "temp_kf": 0,
                "dew_point": 19.41
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 13
            },
            "wind": {
                "speed": 3.83,
                "deg": 17,
                "gust": 5.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-09 18:00:00"
        },
        {
            "dt": 1786309200,
            "main": {
                "temp": 23.66,
                "feels_like": 24.04,
                "temp_min": 23.66,
                "temp_max": 23.66,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1009,
                "humidity": 75,
                "temp_kf": 0,
                "dew_point": 18.75
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 2.71,
                "deg": 49,
                "gust": 4.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-09 21:00:00"
        },
        {
            "dt": 1786320000,
            "main": {
                "temp": 23.16,
                "feels_like": 23.62,
                "temp_min": 23.16,
                "temp_max": 23.16,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 80,
                "temp_kf": 0,
                "dew_point": 19.27
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 3.66,
                "deg": 6,
                "gust": 5.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-10 00:00:00"
        },
        {
            "dt": 1786330800,
            "main": {
                "temp": 22.82,
                "feels_like": 23.3,
                "temp_min": 22.82,
                "temp_max": 22.82,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 82,
                "temp_kf": 0,
                "dew_point": 19.31
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.24,
                "deg": 22,
                "gust": 6.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-10 03:00:00"
        },
        {
            "dt": 1786341600,
            "main": {
                "temp": 22.63,
                "feels_like": 23.09,
                "temp_min": 22.63,
                "temp_max": 22.63,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 82,
                "temp_kf": 0,
                "dew_point": 18.99
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.03,
                "deg": 18,
                "gust": 4.91
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-10 06:00:00"
        },
        {
            "dt": 1786352400,
            "main": {
                "temp": 24.9,
                "feels_like": 25.22,
                "temp_min": 24.9,
                "temp_max": 24.9,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 68,
                "temp_kf": 0,
                "dew_point": 18.21
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.09,
                "deg": 354,
                "gust": 3.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-10 09:00:00"
        },
        {
            "dt": 1786363200,
            "main": {
                "temp": 26.74,
                "feels_like": 27.7,
                "temp_min": 26.74,
                "temp_max": 26.74,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1008,
                "humidity": 59,
                "temp_kf": 0,
                "dew_point": 17.6
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.05,
                "deg": 346,
                "gust": 3.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-10 12:00:00"
        },
        {
            "dt": 1786374000,
            "main": {
                "temp": 27.1,
                "feels_like": 28.13,
                "temp_min": 27.1,
                "temp_max": 27.1,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 59,
                "temp_kf": 0,
                "dew_point": 17.56
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.55,
                "deg": 354,
                "gust": 4.82
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-10 15:00:00"
        },
        {
            "dt": 1786384800,
            "main": {
                "temp": 25.46,
                "feels_like": 25.84,
                "temp_min": 25.46,
                "temp_max": 25.46,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1007,
                "humidity": 68,
                "temp_kf": 0,
                "dew_point": 18.61
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.09,
                "deg": 351,
                "gust": 5.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-10 18:00:00"
        },
        {
            "dt": 1786395600,
            "main": {
                "temp": 23.62,
                "feels_like": 24.02,
                "temp_min": 23.62,
                "temp_max": 23.62,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1009,
                "humidity": 76,
                "temp_kf": 0,
                "dew_point": 18.9
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 2.63,
                "deg": 4,
                "gust": 3.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-10 21:00:00"
        },
        {
            "dt": 1786406400,
            "main": {
                "temp": 23.07,
                "feels_like": 23.52,
                "temp_min": 23.07,
                "temp_max": 23.07,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1008,
                "humidity": 80,
                "temp_kf": 0,
                "dew_point": 19.14
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 3.33,
                "deg": 360,
                "gust": 4.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-11 00:00:00"
        },
        {
            "dt": 1786417200,
            "main": {
                "temp": 22.71,
                "feels_like": 23.18,
                "temp_min": 22.71,
                "temp_max": 22.71,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 82,
                "temp_kf": 0,
                "dew_point": 19.19
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.32,
                "deg": 19,
                "gust": 6.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-11 03:00:00"
        },
        {
            "dt": 1786428000,
            "main": {
                "temp": 22.46,
                "feels_like": 22.95,
                "temp_min": 22.46,
                "temp_max": 22.46,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 84,
                "temp_kf": 0,
                "dew_point": 19.24
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.31,
                "deg": 34,
                "gust": 4.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-11 06:00:00"
        },
        {
            "dt": 1786438800,
            "main": {
                "temp": 25.03,
                "feels_like": 25.34,
                "temp_min": 25.03,
                "temp_max": 25.03,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1008,
                "humidity": 67,
                "temp_kf": 0,
                "dew_point": 17.88
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.13,
                "deg": 3,
                "gust": 3.59
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-11 09:00:00"
        },
        {
            "dt": 1786449600,
            "main": {
                "temp": 26.73,
                "feels_like": 27.69,
                "temp_min": 26.73,
                "temp_max": 26.73,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 59,
                "temp_kf": 0,
                "dew_point": 17.37
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.51,
                "deg": 3,
                "gust": 4.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-11 12:00:00"
        },
        {
            "dt": 1786460400,
            "main": {
                "temp": 27,
                "feels_like": 28.08,
                "temp_min": 27,
                "temp_max": 27,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 60,
                "temp_kf": 0,
                "dew_point": 17.73
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.73,
                "deg": 9,
                "gust": 5.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-11 15:00:00"
        },
        {
            "dt": 1786471200,
            "main": {
                "temp": 25.7,
                "feels_like": 26.08,
                "temp_min": 25.7,
                "temp_max": 25.7,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 67,
                "temp_kf": 0,
                "dew_point": 18.48
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.57,
                "deg": 13,
                "gust": 4.93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-11 18:00:00"
        },
        {
            "dt": 1786482000,
            "main": {
                "temp": 24.1,
                "feels_like": 24.5,
                "temp_min": 24.1,
                "temp_max": 24.1,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1009,
                "humidity": 74,
                "temp_kf": 0,
                "dew_point": 18.93
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 1.55,
                "deg": 80,
                "gust": 1.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-11 21:00:00"
        },
        {
            "dt": 1786492800,
            "main": {
                "temp": 23.69,
                "feels_like": 24.18,
                "temp_min": 23.69,
                "temp_max": 23.69,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 79,
                "temp_kf": 0,
                "dew_point": 19.42
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.66,
                "deg": 31,
                "gust": 5.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-12 00:00:00"
        },
        {
            "dt": 1786503600,
            "main": {
                "temp": 23.41,
                "feels_like": 23.9,
                "temp_min": 23.41,
                "temp_max": 23.41,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1006,
                "humidity": 80,
                "temp_kf": 0,
                "dew_point": 19.4
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.22,
                "deg": 27,
                "gust": 6.56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-12 03:00:00"
        },
        {
            "dt": 1786514400,
            "main": {
                "temp": 23.17,
                "feels_like": 23.66,
                "temp_min": 23.17,
                "temp_max": 23.17,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 81,
                "temp_kf": 0,
                "dew_point": 19.34
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 83
            },
            "wind": {
                "speed": 4.14,
                "deg": 45,
                "gust": 7.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-12 06:00:00"
        },
        {
            "dt": 1786525200,
            "main": {
                "temp": 26.25,
                "feels_like": 26.25,
                "temp_min": 26.25,
                "temp_max": 26.25,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 63,
                "temp_kf": 0,
                "dew_point": 17.87
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 4.56,
                "deg": 28,
                "gust": 6.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-12 09:00:00"
        },
        {
            "dt": 1786536000,
            "main": {
                "temp": 28.09,
                "feels_like": 29.14,
                "temp_min": 28.09,
                "temp_max": 28.09,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 56,
                "temp_kf": 0,
                "dew_point": 17.68
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 5.01,
                "deg": 10,
                "gust": 6.06
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-12 12:00:00"
        },
        {
            "dt": 1786546800,
            "main": {
                "temp": 28.36,
                "feels_like": 29.18,
                "temp_min": 28.36,
                "temp_max": 28.36,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1005,
                "humidity": 53,
                "temp_kf": 0,
                "dew_point": 17.12
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.93,
                "deg": 360,
                "gust": 6.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-12 15:00:00"
        },
        {
            "dt": 1786557600,
            "main": {
                "temp": 27.44,
                "feels_like": 28.23,
                "temp_min": 27.44,
                "temp_max": 27.44,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 55,
                "temp_kf": 0,
                "dew_point": 16.64
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.67,
                "deg": 16,
                "gust": 5.79
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-12 18:00:00"
        }
    ],
    "city": {
        "id": 2553604,
        "name": "Casablanca",
        "coord": {
            "lat": 33.5945,
            "lon": -7.62
        },
        "country": "MA",
        "population": 3144909,
        "timezone": 3600,
        "sunrise": 1786081610,
        "sunset": 1786130744
    }
};
