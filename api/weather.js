export default async function handler(req, res) {
  const { latitude, longitude, units } = req.query;

  const API_BASE_URL = process.env.API_BASE_URL;
  const API_KEY_VALUE = process.env.API_KEY_VALUE;

  const currentWeather = await fetch(
    `${API_BASE_URL}data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY_VALUE}`,
    {
      methode: "GET",
      "Content-Type": "application/json",
    },
  );

  const weatherData = await currentWeather.json();

  return res.status(200).json(weatherData);
}
