import Cookies from 'js-cookie';
import api from '.';

interface BooktalkApplyProps {
    booktalkId?: number;
    memberId?: number;
}

interface PostDuplicatedEmail {
    email?: string;
    message?: string;
  }
  
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  
//   export const postDuplicatedEmail = async (
//     props: PostDuplicatedEmail,
//   ): Promise<PostDuplicatedEmail> => {
//     const { data } = await axios.post(`${baseURL}/auth/dupl-check`, props);
//     return data;
//   };
  

export const fetchBooktalkRegion = async () => {
    const {
        data: { data },
    } = await api.get(`booktalk/search/NAKYANG_DONG`);  // test용
    return data;
    };

export const postBooktalkApply = async ( props: BooktalkApplyProps): Promise<BooktalkApplyProps> => {
    const memberId = Cookies.get('memberId');
    const {
        data: { data },
    } = await api.post(`booktalk/apply/${memberId}`);
    return data;
    };

export const fetchBooktalkDetail = async () => {
    const {
        data: { data },
    } = await api.get(`booktalk/1/detail`); //1번 test
    return data;
    };
