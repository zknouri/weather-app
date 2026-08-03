export default async function handler(req, res) {
  const { latitude, longitude, cnt, units } = req.query;

  const API_BASE_URL = process.env.API_BASE_URL;
  const API_KEY_VALUE = process.env.API_KEY_VALUE;

  const weatherForecast = await fetch(
    `${API_BASE_URL}data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=${cnt}&units=${units}&appid=${API_KEY_VALUE}`,
    {
      methode: "GET",
      "Content-Type": "application/json",
    },
  );

  const forecastData = await weatherForecast.json();

  return res.status(200).json(forecastData);
}
