import axios from 'axios';

export const URL = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world';

export const headers = {
  'X-RapidAPI-Key': '30626e01f1mshcc75db45707864fp188e35jsnd1ade528abe1',
  'X-RapidAPI-Host':
    'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
};

const fetchWorldData = async () => {
  const response = await axios.get(URL, {
    headers,
  });
  return response.data;
};

export default fetchWorldData;
