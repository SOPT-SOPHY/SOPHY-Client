import Cookies from 'js-cookie';
import api from '.';

export const fetchMypage = async () => {
  const memberId = Cookies.get('memberId');
  const {
    data: { data },
  } = await api.get(`member/my-page/${memberId}`);
  return data;
};

export const fetchMyInfo = async () => {
  const memberId = Cookies.get('memberId');
  const {
    data: { data },
  } = await api.get(`member/my-info/${memberId}`);
  return data;
};

export const patchMyInfo = async (props: any) => {
  const memberId = Cookies.get('memberId');
  const {
    data: { data },
  } = await api.patch(`member/my-info/${memberId}`, props);
  return data;
};

export const postMyInfo = async (props: any) => {
  const memberId = Cookies.get('memberId');
  const {
    data: { data },
  } = await api.post(`member/my-info/${memberId}`, props);
  return data;
};
