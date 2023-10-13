import api from '.';

export const fetchMemberHome = async () => {
  const {
    data: { data },
  } = await api.get(`myhome`);
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

*/

export const fetchUijeongbuBooktalk = async () => {
  const {
    data: { data },
  } = await api.get(`booktalk/search?cities=UIJEONGBU_SI`);
  return data;
};


