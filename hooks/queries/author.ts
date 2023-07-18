import { useQuery } from 'react-query';
import { fetchBookTalkDetail, fetchRegionSpace } from '../../apis/author';

const QUERY_KEY = {
  bookTalkDetail: 'bookTalkDetail',
  spaceByRegion: 'spaceByRegion',
};

export const useFetchBookTalkDetail = () => {
  const { data } = useQuery([QUERY_KEY.bookTalkDetail], fetchBookTalkDetail);
  return data;
};
export const useFetchRegionSpace = (selectedRegionKey: string) => {
  const { data } = useQuery([QUERY_KEY.spaceByRegion, selectedRegionKey], () =>
    fetchRegionSpace(selectedRegionKey),
  );
  return data;
};
