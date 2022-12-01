import axios from 'axios';

export const URL = 'https://covid-193.p.rapidapi.com/statistics';

export const headers = {
  'X-RapidAPI-Key': 'fbdb1a7eb1msh0ca64088d4cd139p1264d2jsn3ab8096a4d8c',
  'X-RapidAPI-Host':
    'covid-193.p.rapidapi.com',
};

const fetchData = async () => {
  const response = await axios.get(URL, {
    headers,
  });
  return response.data;
};

export default fetchData;
