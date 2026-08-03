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
            "dt": 1785726000,
            "main": {
                "temp": 23.73,
                "feels_like": 24.01,
                "temp_min": 23,
                "temp_max": 23.73,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1006,
                "humidity": 71,
                "temp_kf": 0.73,
                "dew_point": 18.16
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
                "all": 34
            },
            "wind": {
                "speed": 2.9,
                "deg": 39,
                "gust": 4.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-03 03:00:00"
        },
        {
            "dt": 1785736800,
            "main": {
                "temp": 23.28,
                "feels_like": 23.6,
                "temp_min": 22.88,
                "temp_max": 23.28,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 74,
                "temp_kf": 0.4,
                "dew_point": 18.39
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
                "all": 56
            },
            "wind": {
                "speed": 2.76,
                "deg": 16,
                "gust": 3.87
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-03 06:00:00"
        },
        {
            "dt": 1785747600,
            "main": {
                "temp": 25.57,
                "feels_like": 25.75,
                "temp_min": 25.57,
                "temp_max": 25.57,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1007,
                "humidity": 60,
                "temp_kf": 0,
                "dew_point": 16.65
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 3.16,
                "deg": 29,
                "gust": 3.59
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-03 09:00:00"
        },
        {
            "dt": 1785758400,
            "main": {
                "temp": 27.39,
                "feels_like": 28.25,
                "temp_min": 27.39,
                "temp_max": 27.39,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1007,
                "humidity": 56,
                "temp_kf": 0,
                "dew_point": 16.92
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 4.53,
                "deg": 9,
                "gust": 4.23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-03 12:00:00"
        },
        {
            "dt": 1785769200,
            "main": {
                "temp": 27.36,
                "feels_like": 28.22,
                "temp_min": 27.36,
                "temp_max": 27.36,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 56,
                "temp_kf": 0,
                "dew_point": 16.67
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 4.51,
                "deg": 7,
                "gust": 4.94
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-03 15:00:00"
        },
        {
            "dt": 1785780000,
            "main": {
                "temp": 25.27,
                "feels_like": 25.58,
                "temp_min": 25.27,
                "temp_max": 25.27,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 66,
                "temp_kf": 0,
                "dew_point": 17.96
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
                "all": 61
            },
            "wind": {
                "speed": 4.33,
                "deg": 13,
                "gust": 5.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-03 18:00:00"
        },
        {
            "dt": 1785790800,
            "main": {
                "temp": 23.33,
                "feels_like": 23.73,
                "temp_min": 23.33,
                "temp_max": 23.33,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1009,
                "humidity": 77,
                "temp_kf": 0,
                "dew_point": 18.75
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
                "all": 32
            },
            "wind": {
                "speed": 3.22,
                "deg": 36,
                "gust": 5.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-03 21:00:00"
        },
        {
            "dt": 1785801600,
            "main": {
                "temp": 22.84,
                "feels_like": 23.24,
                "temp_min": 22.84,
                "temp_max": 22.84,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1010,
                "humidity": 79,
                "temp_kf": 0,
                "dew_point": 18.73
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
                "all": 16
            },
            "wind": {
                "speed": 2.79,
                "deg": 26,
                "gust": 3.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-04 00:00:00"
        },
        {
            "dt": 1785812400,
            "main": {
                "temp": 22.45,
                "feels_like": 22.84,
                "temp_min": 22.45,
                "temp_max": 22.45,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1010,
                "humidity": 80,
                "temp_kf": 0,
                "dew_point": 18.66
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
                "speed": 2.89,
                "deg": 13,
                "gust": 3.94
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-04 03:00:00"
        },
        {
            "dt": 1785823200,
            "main": {
                "temp": 22.15,
                "feels_like": 22.59,
                "temp_min": 22.15,
                "temp_max": 22.15,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1010,
                "humidity": 83,
                "temp_kf": 0,
                "dew_point": 18.91
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
                "speed": 3.08,
                "deg": 48,
                "gust": 4.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-04 06:00:00"
        },
        {
            "dt": 1785834000,
            "main": {
                "temp": 25.13,
                "feels_like": 25.4,
                "temp_min": 25.13,
                "temp_max": 25.13,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1011,
                "humidity": 65,
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
                "speed": 3.62,
                "deg": 41,
                "gust": 4.87
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-04 09:00:00"
        },
        {
            "dt": 1785844800,
            "main": {
                "temp": 26.42,
                "feels_like": 26.42,
                "temp_min": 26.42,
                "temp_max": 26.42,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1010,
                "humidity": 64,
                "temp_kf": 0,
                "dew_point": 18.52
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
                "speed": 5.15,
                "deg": 14,
                "gust": 5.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-04 12:00:00"
        },
        {
            "dt": 1785855600,
            "main": {
                "temp": 26.4,
                "feels_like": 26.4,
                "temp_min": 26.4,
                "temp_max": 26.4,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1009,
                "humidity": 70,
                "temp_kf": 0,
                "dew_point": 19.89
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
                "all": 1
            },
            "wind": {
                "speed": 5.46,
                "deg": 14,
                "gust": 6.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-04 15:00:00"
        },
        {
            "dt": 1785866400,
            "main": {
                "temp": 24.92,
                "feels_like": 25.48,
                "temp_min": 24.92,
                "temp_max": 24.92,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1010,
                "humidity": 77,
                "temp_kf": 0,
                "dew_point": 20.18
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
                "all": 1
            },
            "wind": {
                "speed": 4.81,
                "deg": 21,
                "gust": 6.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-04 18:00:00"
        },
        {
            "dt": 1785877200,
            "main": {
                "temp": 23.38,
                "feels_like": 23.89,
                "temp_min": 23.38,
                "temp_max": 23.38,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1012,
                "humidity": 81,
                "temp_kf": 0,
                "dew_point": 19.62
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
                "speed": 3.49,
                "deg": 32,
                "gust": 5.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-04 21:00:00"
        },
        {
            "dt": 1785888000,
            "main": {
                "temp": 22.85,
                "feels_like": 23.33,
                "temp_min": 22.85,
                "temp_max": 22.85,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1012,
                "humidity": 82,
                "temp_kf": 0,
                "dew_point": 19.18
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
                "speed": 3.65,
                "deg": 23,
                "gust": 5.98
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-05 00:00:00"
        },
        {
            "dt": 1785898800,
            "main": {
                "temp": 22.37,
                "feels_like": 22.88,
                "temp_min": 22.37,
                "temp_max": 22.37,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1011,
                "humidity": 85,
                "temp_kf": 0,
                "dew_point": 19.5
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
                "speed": 3.28,
                "deg": 26,
                "gust": 5.58
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-05 03:00:00"
        },
        {
            "dt": 1785909600,
            "main": {
                "temp": 22.13,
                "feels_like": 22.67,
                "temp_min": 22.13,
                "temp_max": 22.13,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1011,
                "humidity": 87,
                "temp_kf": 0,
                "dew_point": 19.56
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
                "speed": 2.94,
                "deg": 34,
                "gust": 4.76
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-05 06:00:00"
        },
        {
            "dt": 1785920400,
            "main": {
                "temp": 24.58,
                "feels_like": 24.95,
                "temp_min": 24.58,
                "temp_max": 24.58,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1011,
                "humidity": 71,
                "temp_kf": 0,
                "dew_point": 18.58
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
                "speed": 3.35,
                "deg": 19,
                "gust": 4.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-05 09:00:00"
        },
        {
            "dt": 1785931200,
            "main": {
                "temp": 26.15,
                "feels_like": 26.15,
                "temp_min": 26.15,
                "temp_max": 26.15,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1011,
                "humidity": 65,
                "temp_kf": 0,
                "dew_point": 18.47
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
                "speed": 4.71,
                "deg": 7,
                "gust": 5.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-05 12:00:00"
        },
        {
            "dt": 1785942000,
            "main": {
                "temp": 26.21,
                "feels_like": 26.21,
                "temp_min": 26.21,
                "temp_max": 26.21,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1010,
                "humidity": 66,
                "temp_kf": 0,
                "dew_point": 18.75
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
                "speed": 5.48,
                "deg": 2,
                "gust": 6.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-05 15:00:00"
        },
        {
            "dt": 1785952800,
            "main": {
                "temp": 25.13,
                "feels_like": 25.5,
                "temp_min": 25.13,
                "temp_max": 25.13,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1011,
                "humidity": 69,
                "temp_kf": 0,
                "dew_point": 18.55
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
                "speed": 3.59,
                "deg": 33,
                "gust": 4.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-05 18:00:00"
        },
        {
            "dt": 1785963600,
            "main": {
                "temp": 23.17,
                "feels_like": 23.66,
                "temp_min": 23.17,
                "temp_max": 23.17,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1012,
                "humidity": 81,
                "temp_kf": 0,
                "dew_point": 19.32
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
                "all": 16
            },
            "wind": {
                "speed": 2.97,
                "deg": 31,
                "gust": 4.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-05 21:00:00"
        },
        {
            "dt": 1785974400,
            "main": {
                "temp": 22.78,
                "feels_like": 23.36,
                "temp_min": 22.78,
                "temp_max": 22.78,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1011,
                "humidity": 86,
                "temp_kf": 0,
                "dew_point": 19.85
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
                "all": 37
            },
            "wind": {
                "speed": 3.83,
                "deg": 15,
                "gust": 6.16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-06 00:00:00"
        },
        {
            "dt": 1785985200,
            "main": {
                "temp": 22.32,
                "feels_like": 22.93,
                "temp_min": 22.32,
                "temp_max": 22.32,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1009,
                "humidity": 89,
                "temp_kf": 0,
                "dew_point": 20.09
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
                "speed": 3.96,
                "deg": 20,
                "gust": 6.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-06 03:00:00"
        },
        {
            "dt": 1785996000,
            "main": {
                "temp": 22.24,
                "feels_like": 22.82,
                "temp_min": 22.24,
                "temp_max": 22.24,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1010,
                "humidity": 88,
                "temp_kf": 0,
                "dew_point": 19.85
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
                "speed": 2.66,
                "deg": 24,
                "gust": 4.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-06 06:00:00"
        },
        {
            "dt": 1786006800,
            "main": {
                "temp": 25.1,
                "feels_like": 25.49,
                "temp_min": 25.1,
                "temp_max": 25.1,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1010,
                "humidity": 70,
                "temp_kf": 0,
                "dew_point": 18.68
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
                "speed": 3.36,
                "deg": 28,
                "gust": 4.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-06 09:00:00"
        },
        {
            "dt": 1786017600,
            "main": {
                "temp": 26.57,
                "feels_like": 26.57,
                "temp_min": 26.57,
                "temp_max": 26.57,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1009,
                "humidity": 66,
                "temp_kf": 0,
                "dew_point": 19.14
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
                "all": 21
            },
            "wind": {
                "speed": 5.01,
                "deg": 10,
                "gust": 6.51
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-06 12:00:00"
        },
        {
            "dt": 1786028400,
            "main": {
                "temp": 26.74,
                "feels_like": 27.82,
                "temp_min": 26.74,
                "temp_max": 26.74,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 61,
                "temp_kf": 0,
                "dew_point": 17.94
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
                "all": 28
            },
            "wind": {
                "speed": 5.64,
                "deg": 16,
                "gust": 7.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-06 15:00:00"
        },
        {
            "dt": 1786039200,
            "main": {
                "temp": 25.08,
                "feels_like": 25.34,
                "temp_min": 25.08,
                "temp_max": 25.08,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 65,
                "temp_kf": 0,
                "dew_point": 17.7
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
                "all": 14
            },
            "wind": {
                "speed": 5.08,
                "deg": 31,
                "gust": 7.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-06 18:00:00"
        },
        {
            "dt": 1786050000,
            "main": {
                "temp": 23.7,
                "feels_like": 23.98,
                "temp_min": 23.7,
                "temp_max": 23.7,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1009,
                "humidity": 71,
                "temp_kf": 0,
                "dew_point": 17.69
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
                "all": 26
            },
            "wind": {
                "speed": 3.05,
                "deg": 7,
                "gust": 4.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-06 21:00:00"
        },
        {
            "dt": 1786060800,
            "main": {
                "temp": 23.13,
                "feels_like": 23.51,
                "temp_min": 23.13,
                "temp_max": 23.13,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 77,
                "temp_kf": 0,
                "dew_point": 18.53
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
                "all": 41
            },
            "wind": {
                "speed": 3.71,
                "deg": 4,
                "gust": 5.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-07 00:00:00"
        },
        {
            "dt": 1786071600,
            "main": {
                "temp": 22.7,
                "feels_like": 23.19,
                "temp_min": 22.7,
                "temp_max": 22.7,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 83,
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
                "all": 1
            },
            "wind": {
                "speed": 1.88,
                "deg": 26,
                "gust": 2.67
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-07 03:00:00"
        },
        {
            "dt": 1786082400,
            "main": {
                "temp": 22.57,
                "feels_like": 23.13,
                "temp_min": 22.57,
                "temp_max": 22.57,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 86,
                "temp_kf": 0,
                "dew_point": 19.73
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
                "all": 7
            },
            "wind": {
                "speed": 2.63,
                "deg": 7,
                "gust": 4.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-07 06:00:00"
        },
        {
            "dt": 1786093200,
            "main": {
                "temp": 25.41,
                "feels_like": 25.83,
                "temp_min": 25.41,
                "temp_max": 25.41,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1007,
                "humidity": 70,
                "temp_kf": 0,
                "dew_point": 19.13
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
                "all": 6
            },
            "wind": {
                "speed": 2.61,
                "deg": 358,
                "gust": 2.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-07 09:00:00"
        },
        {
            "dt": 1786104000,
            "main": {
                "temp": 26.83,
                "feels_like": 28.07,
                "temp_min": 26.83,
                "temp_max": 26.83,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 63,
                "temp_kf": 0,
                "dew_point": 18.66
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
                "all": 6
            },
            "wind": {
                "speed": 4.53,
                "deg": 349,
                "gust": 5.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-07 12:00:00"
        },
        {
            "dt": 1786114800,
            "main": {
                "temp": 26.75,
                "feels_like": 27.77,
                "temp_min": 26.75,
                "temp_max": 26.75,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 60,
                "temp_kf": 0,
                "dew_point": 17.75
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
                "all": 76
            },
            "wind": {
                "speed": 4.41,
                "deg": 359,
                "gust": 5.96
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-07 15:00:00"
        },
        {
            "dt": 1786125600,
            "main": {
                "temp": 25.58,
                "feels_like": 25.81,
                "temp_min": 25.58,
                "temp_max": 25.58,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 62,
                "temp_kf": 0,
                "dew_point": 17.22
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
                "all": 50
            },
            "wind": {
                "speed": 3.12,
                "deg": 358,
                "gust": 4.57
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-08-07 18:00:00"
        },
        {
            "dt": 1786136400,
            "main": {
                "temp": 24.28,
                "feels_like": 24.59,
                "temp_min": 24.28,
                "temp_max": 24.28,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1008,
                "humidity": 70,
                "temp_kf": 0,
                "dew_point": 17.98
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 71
            },
            "wind": {
                "speed": 2.29,
                "deg": 14,
                "gust": 3.42
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
                "temp": 23.12,
                "feels_like": 23.63,
                "temp_min": 23.12,
                "temp_max": 23.12,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1008,
                "humidity": 82,
                "temp_kf": 0,
                "dew_point": 19.54
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
                "all": 44
            },
            "wind": {
                "speed": 2.95,
                "deg": 357,
                "gust": 4.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-08-08 00:00:00"
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
        "sunrise": 1785735836,
        "sunset": 1785785360
    }
};
