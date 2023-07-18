import { useQuery } from 'react-query';
// import { fetchBooktalkRegion,postBooktalkApply,fetchBooktalkDetail } from '../../apis/booktalkApply';
import { fetchBooktalkRegion,fetchBooktalkDetail } from '../../apis/booktalkApply';


const QUERY_KEY = {
    booktalkRegion: 'booktalkRegion',
    //post query how? -useMutation 
    booktalkDetail: 'booktalkDetail',
};

// export const useFetchBooktalkRegion = (city: string) =>{
//     const {data} = useQuery([QUERY_KEY.booktalkRegion, city], () => fetchBooktalkRegion(city));
//     return data;
// } 

export const useFetchBooktalkRegion = (city: string) => {
    const { data } = useQuery(['booktalkRegion', city], () => fetchBooktalkRegion(city));
    return [data, city]; // city 값을 반환 배열에 포함
  };

export const useFetchBookTalkDetail = (id: number) =>{
    const {data} = useQuery([QUERY_KEY.booktalkDetail, id], ()=> fetchBooktalkDetail(id));
    return data;
}
