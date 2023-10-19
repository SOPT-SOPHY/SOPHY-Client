/* eslint-disable @typescript-eslint/no-unused-vars */
import Cookies from 'js-cookie';
import axios from 'axios';
import api from '.';
// import axios from 'axios';

interface BooktalkApplyProps {
  booktalkId?: number;
  member_id?: number | string;
  data?: null;
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchBooktalkRegion = async (city: string) => {
  const {
    data: { data },
  } = await api.get(`booktalk/search?cities=${city}`);
  return data;
};

export const postBooktalkApply = async (
  props: BooktalkApplyProps,
): Promise<BooktalkApplyProps> => {
  const {
    data: { data },
  } = await api.post(`booktalk/participation`, props);
  return data;
};

export const fetchBooktalkDetail = async (
  id: string | string[] | undefined,
) => {
  const {
    data: { data },
<<<<<<< HEAD
  } = await axios.get(`${baseURL}/booktalk/search/${id}/detail`); // 1번 test
=======
  } = await axios.get(`${baseURL}/booktalk/search/${id}/detail`, {
    headers: {
      Authorization: accessToken && `Bearer ${accessToken}`,
    },
  }); // 1번 test
>>>>>>> 776ee8a (fix: 북토크 상세 비회원일 경우 get 되지 않는 오류 수정)
  return data;
};
