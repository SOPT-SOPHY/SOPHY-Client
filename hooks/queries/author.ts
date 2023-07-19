import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  fetchBookTalkDetail,
  fetchRegionSpace,
  postBookTalkOpen,
} from '../../apis/author';

const QUERY_KEY = {
  bookTalkDetail: 'bookTalkDetail',
  spaceByRegion: 'spaceByRegion',
  bookTalkOpen: 'bookTalkOpen',
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
export const usePostBookTalkOpen = () => {
  const queryClient = useQueryClient();
  return useMutation(postBookTalkOpen, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.bookTalkOpen]);
    },
    onError(e) {
      console.log(e);
    },
  });
};
