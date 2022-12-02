import axios from 'axios';
import fetchData, { URL, headers } from '../redux/api';

jest.mock('axios');

describe('Fetch Data', () => {
  test('Return Barbados Details', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          continent: 'North-America',
          country: 'Barbados',
          population: 288023,
          cases: {
            new: '+410',
            active: 956,
            critical: null,
            recovered: 102435,
            '1M_pop': '360926',
            total: 103955,
          },
        },
      ],
    });

    const result = await fetchData();

    expect(axios.get).toHaveBeenCalledWith(URL, { headers });
    expect(result[0].cases.total).toEqual(103955);
  });
});
