import { useQuery } from 'react-query';
// import { fetchBooktalkRegion,postBooktalkApply,fetchBooktalkDetail } from '../../apis/booktalkApply';
import { fetchBooktalkRegion,fetchBooktalkDetail } from '../../apis/booktalkApply';


const QUERY_KEY = {
    booktalkRegion: 'booktalkRegion',
    booktalkApply: 'booktalkApply',
    booktalkDetail: 'booktalkDetail',
};

// export const useFetchBooktalkRegion = (city: string) =>{
//     const {data} = useQuery([QUERY_KEY.booktalkRegion, city], () => fetchBooktalkRegion(city));
//     return data;
// } 

export const useFetchBooktalkRegion = (city: string) => {
    const { data } = useQuery(['booktalkRegion', city], () => fetchBooktalkRegion(city));
    return [data, city]; 
  };

  export const useFetchBookTalkDetail = (id: string | string[] | undefined) => {
    const { data } = useQuery(['booktalkDetail', id], () => fetchBooktalkDetail(id));
    return data || {};
  };
  

import { useMutation, useQueryClient } from 'react-query';
import { postBooktalkApply } from '../../apis/booktalkApply';

export const usePostBookTalkApply = () => {
  const queryClient = useQueryClient();

  return useMutation(postBooktalkApply, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.booktalkApply]);
    },
  });
};
