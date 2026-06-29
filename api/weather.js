export default async function handler(req, res) {
  const { location, units } = req.query;

  const API_BASE_URL = process.env.API_BASE_URL;
  const API_KEY_VALUE = process.env.API_KEY_VALUE;

  const realtimeWeather = await fetch(
    `${API_BASE_URL}realtime?location=${location}&units=${units}&apikey=${API_KEY_VALUE}`,
    {
      methode: "GET",
      "Content-Type": "application/json",
    },
  );

  const data = await realtimeWeather.json();

  return res.status(200).json(data);
}
