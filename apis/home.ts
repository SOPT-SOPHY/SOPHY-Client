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

/*
export const fetchRegionSpace = async (region: string) => {
  const {
    data: { data },
  } = await api.get(`place/search/${region}`);
  return data;
};

export const fetchRegionBooktalk = async (city: string) => {
  const {
    data: { data },
  } = await api.get(`booktalk/search/${city}`);
  return data;
};

*/
