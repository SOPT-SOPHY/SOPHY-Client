import { useQuery } from 'react-query';
import { fetchMemberHome, fetchNonMemberHome, fetchUijeongbuBooktalk } from '../../apis/home';

const QUERY_KEY = {
  memberHome: 'memberHome',
  nonMemberHome: 'nonMemberHome',
  regionSpace: 'regionSpace',
  regionBooktalk: 'regionBooktalk',
};

export const uesFetchMemberHome = () => {
  const { data } = useQuery([QUERY_KEY.memberHome], fetchMemberHome);
  return data;
};

export const uesFetchNonMemberHome = () => {
  const { data } = useQuery([QUERY_KEY.nonMemberHome], fetchNonMemberHome);
  return data;
};

/*
export const uesFetchRegionSpace = (region: string) => {
  const { data } = useQuery([QUERY_KEY.regionSpace, region], () =>
    fetchRegionSpace(region),
  );
  return data;
};

export const uesFetchRegionBooktalk = (city: string) => {
  const { data } = useQuery([QUERY_KEY.regionBooktalk, city], () =>
    fetchRegionBooktalk(city),
  );
  return data;
};
*/

export const useFetchUijeongbuBooktalk = () => {
  const { data } = useQuery([QUERY_KEY.regionBooktalk], () =>
    fetchUijeongbuBooktalk(),
  );
  return data;
};
