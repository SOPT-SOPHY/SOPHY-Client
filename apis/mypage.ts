import api from '.';

export const fetchMypage = async () => {
  const {
    data: { data },
  } = await api.get(`member/my-page`);
  return data;
};

export const fetchMyInfo = async () => {
  const {
    data: { data },
  } = await api.get(`member/my-info`);
  return data;
};

export const patchMyInfo = async (props: any) => {
  const {
    data: { data },
  } = await api.patch(`member/my-info`, props);
  return data;
};

export const postMyInfo = async (props: any) => {
  const {
    data: { data },
  } = await api.post(`member/my-info`, props);
  return data;
};

export const postLogout = async () => {
  const {
    data: { data },
  } = await api.post(`/auth/logout`);
  return data;
};
