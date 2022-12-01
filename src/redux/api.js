import axios from 'axios';

export const URL = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world';

export const headers = {
  'X-RapidAPI-Key': '289eb98e74msha2f6cdf72681c12p1b70d6jsn7404c93fcd81',
  'X-RapidAPI-Host':
    'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
};

const fetchData = async () => {
  const response = await axios.get(URL, {
    headers,
  });
  return response.data;
};

export default fetchData;
