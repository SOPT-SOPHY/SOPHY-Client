import api from '.';
import Cookies from 'js-cookie';

export const fetchMemberMypage = async () => {
    const memberId = Cookies.get('memberId');
    const {
        data: { data },
    } = await api.get(`member/my-page/${memberId}`);
    return data;
    };



