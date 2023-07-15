import { useQuery } from 'react-query';
import { fetchMemberHome, fetchNonMemberHome } from '../../apis/home';
// 테스트

const QUERY_KEY = {
  memberHome: 'memberHome',
  nonMemberHome: 'nonMemberHome',
};

export const uesFetchMemberHome = () => {
  const { data } = useQuery([QUERY_KEY.memberHome], fetchMemberHome);
  return data;
};

export const uesFetchNonMemberHome = () => {
  const { data } = useQuery([QUERY_KEY.nonMemberHome], fetchNonMemberHome);
  return data;
};
