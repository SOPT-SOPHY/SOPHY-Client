import { useQuery } from 'react-query';
import { fetchBookTalkDetail } from '../../apis/author';

const QUERY_KEY = {
  bookTalkDetail: 'bookTalkDetail',
};

export const useFetchBookTalkDetail = () => {
  const { data } = useQuery([QUERY_KEY.bookTalkDetail], fetchBookTalkDetail);
  return data;
};
