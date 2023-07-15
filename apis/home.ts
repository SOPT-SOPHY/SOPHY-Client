import Cookies from 'js-cookie';
import api from '.';

export const fetchMemberHome = async () => {
  const memberId = Cookies.get('memberId');
  const {
    data: { data },
  } = await api.get(`myhome/${memberId}`);
  return data;
};

export const fetchNonMemberHome = async () => {
  const {
    data: { data },
  } = await api.get(`home`);
  return data;
};
