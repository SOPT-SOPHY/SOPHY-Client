import Cookies from 'js-cookie';
import api from '.';

export const fetchSophyStory = async () => {
  const memberId = Cookies.get('memberId');
  const {
    data: { data },
  } = await api.get(`/sophy-story/${memberId}/all`);
  return data;
};
