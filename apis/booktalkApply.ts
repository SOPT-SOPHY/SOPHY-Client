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
  const accessToken = Cookies.get('accessToken');
  const {
    data: { data },
  } = await api.post(`booktalk/participation`, props, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const fetchBooktalkDetail = async (
  id: string | string[] | undefined,
) => {
  const accessToken = Cookies.get('accessToken');

  const {
    data: { data },
  } = await axios.get(`${baseURL}/booktalk/search/${id}/detail`, {
    headers: {
      Authorization: accessToken && `Bearer ${accessToken}`,
    },
  }); // 1번 test

  return data;
};
