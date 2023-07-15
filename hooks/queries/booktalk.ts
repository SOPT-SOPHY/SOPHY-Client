import { useQuery } from 'react-query';
// import { fetchBooktalkRegion,postBooktalkApply,fetchBooktalkDetail } from '../../apis/booktalkApply';
import { fetchBooktalkRegion,fetchBooktalkDetail } from '../../apis/booktalkApply';


const QUERY_KEY = {
    booktalkRegion: 'booktalkRegion',
    //post query how? -useMutation 
    booktalkDetail: 'booktalkDetail',
};

export const useFetchBooktalkRegion = () =>{
    const {data} = useQuery([QUERY_KEY.booktalkRegion], fetchBooktalkRegion);
    return data;
} 

export const useFetchBookTalkDetail = () =>{
    const {data} = useQuery([QUERY_KEY.booktalkDetail], fetchBooktalkDetail);
    return data;
}
