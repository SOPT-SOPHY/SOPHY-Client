import { useQuery } from 'react-query';
import axios from 'axios';

const fetchTestData = async (accessToken: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/test`,
      config,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch test data');
  }
};

const useFetchTestData = (accessToken: any) => {
  return useQuery('testData', () => fetchTestData(accessToken));
};

export default useFetchTestData;
