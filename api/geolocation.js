export default async function handler(req, res) {
  try {
    const { city, limit } = req.query;

    const API_BASE_URL = process.env.API_BASE_URL;
    const API_KEY_VALUE = process.env.API_KEY_VALUE;

    const cityGeolocation = await fetch(
      `${API_BASE_URL}geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY_VALUE}`,
      {
        methode: "GET",
        "Content-Type": "application/json",
      },
    );

    const geolocationData = await cityGeolocation.json();

    return res.status(200).json(geolocationData);
  } catch (error) {
    return res.status(500).json(error || "Failed to fetch geolocation data!");
  }
}
