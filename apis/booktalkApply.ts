import Cookies from 'js-cookie';
import api from '.';
import axios from 'axios';

// interface BooktalkApplyProps {
//     booktalkId?: number;
//     memberId?: number;
// }

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchBooktalkRegion = async (city: string) => {
    const {
        data: { data },
    } = await api.get(`booktalk/search/${city}`); 
    return data;
    };

// export const postBooktalkApply = async ( props: BooktalkApplyProps): Promise<BooktalkApplyProps> => {
//     const memberId = Cookies.get('memberId');
//     const {
//         data: { data },
//     } = await api.post(`booktalk/apply/${memberId}`);
//     return data;
//     };

export const fetchBooktalkDetail = async (id: number) => {
    const {
        data: { data },
    } = await api.get(`booktalk/${id}/detail`); //1번 test
    return data;
    };
