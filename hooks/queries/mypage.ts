import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchMyInfo, patchMyInfo, postMyInfo } from '../../apis/mypage';

const QUERY_KEY = {
  myInfo: 'myInfo',
};

export const uesFetchMyInfo = () => {
  const { data } = useQuery([QUERY_KEY.myInfo], fetchMyInfo);
  return { myInfo: data };
};

export const usePatchMyInfo = () => {
  const queryClient = useQueryClient();
  return useMutation(patchMyInfo, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.myInfo]);
    },
    onError(e) {
      console.log(e);
    },
  });
};

export const usePostMyInfo = () => {
  const queryClient = useQueryClient();
  return useMutation(postMyInfo, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.myInfo]);
    },
    onError(e) {
      console.log(e);
    },
  });
};
