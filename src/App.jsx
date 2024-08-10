import "./App.css";
import Search from "./components/search/search.jsx";
import CurrentWeather from "./components/current-weather/current-weather.jsx";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api.js";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast.jsx";

function App() {
    const initWeatherData = {
        city: "Delhi, IN",
        "coord": {
            "lon": 77.2167,
            "lat": 28.6667
        },
        "weather": [
            {
                "id": 701,
                "main": "Mist",
                "description": "mist",
                "icon": "50d"
            },
            {
                "id": 503,
                "main": "Rain",
                "description": "very heavy rain",
                "icon": "10d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 30.05,
            "feels_like": 37.05,
            "temp_min": 30.05,
            "temp_max": 30.05,
            "pressure": 999,
            "humidity": 79,
            "sea_level": 999,
            "grnd_level": 975
        },
        "visibility": 3500,
        "wind": {
            "speed": 2.57,
            "deg": 130
        },
        "rain": {
            "1h": 17.76
        },
        "clouds": {
            "all": 75
        },
        "dt": 1723285742,
        "sys": {
            "type": 1,
            "id": 9165,
            "country": "IN",
            "sunrise": 1723249061,
            "sunset": 1723296924
        },
        "timezone": 19800,
        "id": 1273294,
        "name": "Delhi",
        "cod": 200
    };
    const initForecastData = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1723291200,
                "main": {
                    "temp": 30.05,
                    "feels_like": 37.05,
                    "temp_min": 30.05,
                    "temp_max": 31.84,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 975,
                    "humidity": 79,
                    "temp_kf": -1.79
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 2.84,
                    "deg": 87,
                    "gust": 2.64
                },
                "visibility": 7827,
                "pop": 0.9,
                "rain": {
                    "3h": 4.49
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-10 12:00:00"
            },
            {
                "dt": 1723302000,
                "main": {
                    "temp": 30.05,
                    "feels_like": 36.98,
                    "temp_min": 30.05,
                    "temp_max": 30.05,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 975,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 2.44,
                    "deg": 89,
                    "gust": 3.62
                },
                "visibility": 10000,
                "pop": 0.84,
                "rain": {
                    "3h": 5.01
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-10 15:00:00"
            },
            {
                "dt": 1723312800,
                "main": {
                    "temp": 29.26,
                    "feels_like": 35.47,
                    "temp_min": 28.86,
                    "temp_max": 29.26,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 80,
                    "temp_kf": 0.4
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 2.64,
                    "deg": 75,
                    "gust": 4.07
                },
                "visibility": 10000,
                "pop": 0.88,
                "rain": {
                    "3h": 2.81
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-10 18:00:00"
            },
            {
                "dt": 1723323600,
                "main": {
                    "temp": 27.98,
                    "feels_like": 32.52,
                    "temp_min": 27.98,
                    "temp_max": 27.98,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 974,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.79,
                    "deg": 72,
                    "gust": 4.48
                },
                "visibility": 10000,
                "pop": 0.79,
                "rain": {
                    "3h": 5.63
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-10 21:00:00"
            },
            {
                "dt": 1723334400,
                "main": {
                    "temp": 27.3,
                    "feels_like": 31.23,
                    "temp_min": 27.3,
                    "temp_max": 27.3,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 974,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.62,
                    "deg": 92,
                    "gust": 4.05
                },
                "visibility": 10000,
                "pop": 0.89,
                "rain": {
                    "3h": 2.47
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-11 00:00:00"
            },
            {
                "dt": 1723345200,
                "main": {
                    "temp": 29.34,
                    "feels_like": 34.77,
                    "temp_min": 29.34,
                    "temp_max": 29.34,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.44,
                    "deg": 112,
                    "gust": 3.16
                },
                "visibility": 10000,
                "pop": 0.83,
                "rain": {
                    "3h": 3.07
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-11 03:00:00"
            },
            {
                "dt": 1723356000,
                "main": {
                    "temp": 31.71,
                    "feels_like": 37.91,
                    "temp_min": 31.71,
                    "temp_max": 31.71,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.55,
                    "deg": 138,
                    "gust": 3.01
                },
                "visibility": 10000,
                "pop": 0.94,
                "rain": {
                    "3h": 5.11
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-11 06:00:00"
            },
            {
                "dt": 1723366800,
                "main": {
                    "temp": 33.29,
                    "feels_like": 39.89,
                    "temp_min": 33.29,
                    "temp_max": 33.29,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 974,
                    "humidity": 59,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.74,
                    "deg": 139,
                    "gust": 2.48
                },
                "visibility": 10000,
                "pop": 0.79,
                "rain": {
                    "3h": 1.23
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-11 09:00:00"
            },
            {
                "dt": 1723377600,
                "main": {
                    "temp": 30.98,
                    "feels_like": 37.85,
                    "temp_min": 30.98,
                    "temp_max": 30.98,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 973,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.74,
                    "deg": 239,
                    "gust": 2.77
                },
                "visibility": 10000,
                "pop": 0.91,
                "rain": {
                    "3h": 5.81
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-11 12:00:00"
            },
            {
                "dt": 1723388400,
                "main": {
                    "temp": 28.73,
                    "feels_like": 34,
                    "temp_min": 28.73,
                    "temp_max": 28.73,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 975,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.48,
                    "deg": 99,
                    "gust": 3.05
                },
                "visibility": 10000,
                "pop": 0.95,
                "rain": {
                    "3h": 5.12
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-11 15:00:00"
            },
            {
                "dt": 1723399200,
                "main": {
                    "temp": 27.74,
                    "feels_like": 32.17,
                    "temp_min": 27.74,
                    "temp_max": 27.74,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.39,
                    "deg": 84,
                    "gust": 3.74
                },
                "visibility": 10000,
                "pop": 0.98,
                "rain": {
                    "3h": 2.44
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-11 18:00:00"
            },
            {
                "dt": 1723410000,
                "main": {
                    "temp": 27.06,
                    "feels_like": 30.69,
                    "temp_min": 27.06,
                    "temp_max": 27.06,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 974,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 2.24,
                    "deg": 82,
                    "gust": 4
                },
                "visibility": 10000,
                "pop": 0.93,
                "rain": {
                    "3h": 3.93
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-11 21:00:00"
            },
            {
                "dt": 1723420800,
                "main": {
                    "temp": 27,
                    "feels_like": 30.53,
                    "temp_min": 27,
                    "temp_max": 27,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 974,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 1.61,
                    "deg": 84,
                    "gust": 3.44
                },
                "visibility": 7557,
                "pop": 0.93,
                "rain": {
                    "3h": 2.67
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-12 00:00:00"
            },
            {
                "dt": 1723431600,
                "main": {
                    "temp": 27.9,
                    "feels_like": 32.3,
                    "temp_min": 27.9,
                    "temp_max": 27.9,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 976,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 1.91,
                    "deg": 90,
                    "gust": 3.7
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 5.29
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-12 03:00:00"
            },
            {
                "dt": 1723442400,
                "main": {
                    "temp": 28.61,
                    "feels_like": 33.87,
                    "temp_min": 28.61,
                    "temp_max": 28.61,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 976,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 3.02,
                    "deg": 187,
                    "gust": 4.25
                },
                "visibility": 7165,
                "pop": 1,
                "rain": {
                    "3h": 5.78
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-12 06:00:00"
            },
            {
                "dt": 1723453200,
                "main": {
                    "temp": 30.74,
                    "feels_like": 36.91,
                    "temp_min": 30.74,
                    "temp_max": 30.74,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 975,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.7,
                    "deg": 190,
                    "gust": 2.41
                },
                "visibility": 10000,
                "pop": 0.89,
                "rain": {
                    "3h": 4.63
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-12 09:00:00"
            },
            {
                "dt": 1723464000,
                "main": {
                    "temp": 30.48,
                    "feels_like": 36.79,
                    "temp_min": 30.48,
                    "temp_max": 30.48,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 974,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.48,
                    "deg": 325,
                    "gust": 2.02
                },
                "visibility": 10000,
                "pop": 0.95,
                "rain": {
                    "3h": 0.55
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-12 12:00:00"
            },
            {
                "dt": 1723474800,
                "main": {
                    "temp": 28.9,
                    "feels_like": 34.25,
                    "temp_min": 28.9,
                    "temp_max": 28.9,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.46,
                    "deg": 356,
                    "gust": 2.39
                },
                "visibility": 10000,
                "pop": 0.66,
                "rain": {
                    "3h": 0.39
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-12 15:00:00"
            },
            {
                "dt": 1723485600,
                "main": {
                    "temp": 27.99,
                    "feels_like": 32.87,
                    "temp_min": 27.99,
                    "temp_max": 27.99,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 976,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.88,
                    "deg": 66,
                    "gust": 2.95
                },
                "visibility": 10000,
                "pop": 0.88,
                "rain": {
                    "3h": 4.07
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-12 18:00:00"
            },
            {
                "dt": 1723496400,
                "main": {
                    "temp": 27.29,
                    "feels_like": 31.33,
                    "temp_min": 27.29,
                    "temp_max": 27.29,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 975,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 0.9,
                    "deg": 65,
                    "gust": 2.86
                },
                "visibility": 10000,
                "pop": 0.86,
                "rain": {
                    "3h": 2.93
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-12 21:00:00"
            },
            {
                "dt": 1723507200,
                "main": {
                    "temp": 27.22,
                    "feels_like": 31.13,
                    "temp_min": 27.22,
                    "temp_max": 27.22,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 0.71,
                    "deg": 113,
                    "gust": 2
                },
                "visibility": 10000,
                "pop": 0.83,
                "rain": {
                    "3h": 0.26
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-13 00:00:00"
            },
            {
                "dt": 1723518000,
                "main": {
                    "temp": 29.77,
                    "feels_like": 35.19,
                    "temp_min": 29.77,
                    "temp_max": 29.77,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 977,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 57
                },
                "wind": {
                    "speed": 1.26,
                    "deg": 148,
                    "gust": 1.98
                },
                "visibility": 10000,
                "pop": 0.66,
                "rain": {
                    "3h": 1.05
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-13 03:00:00"
            },
            {
                "dt": 1723528800,
                "main": {
                    "temp": 33.1,
                    "feels_like": 39.41,
                    "temp_min": 33.1,
                    "temp_max": 33.1,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 977,
                    "humidity": 59,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 54
                },
                "wind": {
                    "speed": 1.9,
                    "deg": 84,
                    "gust": 1.93
                },
                "visibility": 10000,
                "pop": 0.83,
                "rain": {
                    "3h": 1.45
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-13 06:00:00"
            },
            {
                "dt": 1723539600,
                "main": {
                    "temp": 34.12,
                    "feels_like": 40.87,
                    "temp_min": 34.12,
                    "temp_max": 34.12,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 975,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 3.71,
                    "deg": 86,
                    "gust": 3.5
                },
                "visibility": 10000,
                "pop": 0.8,
                "rain": {
                    "3h": 2.09
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-13 09:00:00"
            },
            {
                "dt": 1723550400,
                "main": {
                    "temp": 31.97,
                    "feels_like": 38.97,
                    "temp_min": 31.97,
                    "temp_max": 31.97,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 974,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 77
                },
                "wind": {
                    "speed": 4.99,
                    "deg": 94,
                    "gust": 5.46
                },
                "visibility": 10000,
                "pop": 0.85,
                "rain": {
                    "3h": 1.66
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-13 12:00:00"
            },
            {
                "dt": 1723561200,
                "main": {
                    "temp": 29.88,
                    "feels_like": 35.72,
                    "temp_min": 29.88,
                    "temp_max": 29.88,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 976,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 79
                },
                "wind": {
                    "speed": 3.59,
                    "deg": 102,
                    "gust": 6.28
                },
                "visibility": 10000,
                "pop": 0.85,
                "rain": {
                    "3h": 1.02
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-13 15:00:00"
            },
            {
                "dt": 1723572000,
                "main": {
                    "temp": 28.37,
                    "feels_like": 33.4,
                    "temp_min": 28.37,
                    "temp_max": 28.37,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 976,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 89
                },
                "wind": {
                    "speed": 3.22,
                    "deg": 93,
                    "gust": 5.82
                },
                "visibility": 10000,
                "pop": 0.96,
                "rain": {
                    "3h": 1.95
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-13 18:00:00"
            },
            {
                "dt": 1723582800,
                "main": {
                    "temp": 27.49,
                    "feels_like": 31.63,
                    "temp_min": 27.49,
                    "temp_max": 27.49,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.59,
                    "deg": 82,
                    "gust": 8.48
                },
                "visibility": 10000,
                "pop": 0.3,
                "rain": {
                    "3h": 0.17
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-13 21:00:00"
            },
            {
                "dt": 1723593600,
                "main": {
                    "temp": 26.27,
                    "feels_like": 26.27,
                    "temp_min": 26.27,
                    "temp_max": 26.27,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 976,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.28,
                    "deg": 89,
                    "gust": 9.79
                },
                "visibility": 10000,
                "pop": 0.67,
                "rain": {
                    "3h": 4.17
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-14 00:00:00"
            },
            {
                "dt": 1723604400,
                "main": {
                    "temp": 27.53,
                    "feels_like": 31.74,
                    "temp_min": 27.53,
                    "temp_max": 27.53,
                    "pressure": 1002,
                    "sea_level": 1002,
                    "grnd_level": 978,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.65,
                    "deg": 99,
                    "gust": 9.42
                },
                "visibility": 10000,
                "pop": 0.44,
                "rain": {
                    "3h": 1.13
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-14 03:00:00"
            },
            {
                "dt": 1723615200,
                "main": {
                    "temp": 31.39,
                    "feels_like": 38.02,
                    "temp_min": 31.39,
                    "temp_max": 31.39,
                    "pressure": 1002,
                    "sea_level": 1002,
                    "grnd_level": 978,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.64,
                    "deg": 112,
                    "gust": 6.16
                },
                "visibility": 10000,
                "pop": 0.48,
                "rain": {
                    "3h": 0.42
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-14 06:00:00"
            },
            {
                "dt": 1723626000,
                "main": {
                    "temp": 31.59,
                    "feels_like": 38.24,
                    "temp_min": 31.59,
                    "temp_max": 31.59,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 976,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 4.04,
                    "deg": 111,
                    "gust": 6.07
                },
                "visibility": 10000,
                "pop": 0.93,
                "rain": {
                    "3h": 1.4
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-14 09:00:00"
            },
            {
                "dt": 1723636800,
                "main": {
                    "temp": 31.27,
                    "feels_like": 37.71,
                    "temp_min": 31.27,
                    "temp_max": 31.27,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 975,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 3.54,
                    "deg": 108,
                    "gust": 5.53
                },
                "visibility": 10000,
                "pop": 0.96,
                "rain": {
                    "3h": 0.47
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-14 12:00:00"
            },
            {
                "dt": 1723647600,
                "main": {
                    "temp": 29.49,
                    "feels_like": 35.41,
                    "temp_min": 29.49,
                    "temp_max": 29.49,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 976,
                    "humidity": 77,
                    "temp_kf": 0
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
                    "speed": 2.9,
                    "deg": 122,
                    "gust": 4.83
                },
                "visibility": 10000,
                "pop": 0.58,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-14 15:00:00"
            },
            {
                "dt": 1723658400,
                "main": {
                    "temp": 28.43,
                    "feels_like": 33.02,
                    "temp_min": 28.43,
                    "temp_max": 28.43,
                    "pressure": 1002,
                    "sea_level": 1002,
                    "grnd_level": 977,
                    "humidity": 79,
                    "temp_kf": 0
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
                    "speed": 3.46,
                    "deg": 126,
                    "gust": 6.01
                },
                "visibility": 10000,
                "pop": 0.5,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-14 18:00:00"
            },
            {
                "dt": 1723669200,
                "main": {
                    "temp": 27.57,
                    "feels_like": 31.31,
                    "temp_min": 27.57,
                    "temp_max": 27.57,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 82,
                    "temp_kf": 0
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
                    "speed": 3.21,
                    "deg": 131,
                    "gust": 5.4
                },
                "visibility": 10000,
                "pop": 0.01,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-14 21:00:00"
            },
            {
                "dt": 1723680000,
                "main": {
                    "temp": 26.89,
                    "feels_like": 29.86,
                    "temp_min": 26.89,
                    "temp_max": 26.89,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 975,
                    "humidity": 84,
                    "temp_kf": 0
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
                    "speed": 3.43,
                    "deg": 127,
                    "gust": 6.12
                },
                "visibility": 10000,
                "pop": 0.01,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-15 00:00:00"
            },
            {
                "dt": 1723690800,
                "main": {
                    "temp": 28.43,
                    "feels_like": 32.67,
                    "temp_min": 28.43,
                    "temp_max": 28.43,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 976,
                    "humidity": 77,
                    "temp_kf": 0
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
                    "all": 95
                },
                "wind": {
                    "speed": 3.6,
                    "deg": 134,
                    "gust": 5.54
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-15 03:00:00"
            },
            {
                "dt": 1723701600,
                "main": {
                    "temp": 31.74,
                    "feels_like": 37.37,
                    "temp_min": 31.74,
                    "temp_max": 31.74,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 976,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 3.93,
                    "deg": 142,
                    "gust": 5.19
                },
                "visibility": 10000,
                "pop": 0.24,
                "rain": {
                    "3h": 0.1
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-15 06:00:00"
            },
            {
                "dt": 1723712400,
                "main": {
                    "temp": 34.35,
                    "feels_like": 40.66,
                    "temp_min": 34.35,
                    "temp_max": 34.35,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 974,
                    "humidity": 54,
                    "temp_kf": 0
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
                    "all": 54
                },
                "wind": {
                    "speed": 4.39,
                    "deg": 140,
                    "gust": 4.75
                },
                "visibility": 10000,
                "pop": 0.06,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-15 09:00:00"
            }
        ],
        "city": {
            "id": 1273294,
            "name": "Delhi",
            "coord": {
                "lat": 28.6667,
                "lon": 77.2167
            },
            "country": "IN",
            "population": 10927986,
            "timezone": 19800,
            "sunrise": 1723249061,
            "sunset": 1723296924
        }
    };
    const [currentWeather, setCurrentWeather] = useState(initWeatherData);
    const [forecast, setForecast] = useState(initForecastData);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
    };

    console.log(currentWeather);
    console.log(forecast);

    return (
        <div className="container" >
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
        </div>
    )
}

export default App;
