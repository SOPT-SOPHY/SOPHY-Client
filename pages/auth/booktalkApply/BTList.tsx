import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
// import btnUp from '../../../assets/icon/btn_up.svg';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import btnDown from '../../../assets/icon/btn_down.svg';
import SingleBookTalk from '../../../components/booktalkApply/SingleBookTalk';
import backArrow from '../../../assets/icon/ic_backArrow.svg';

interface CountryProps {
  alpha3Code: string;
  flag: { large: string };
  name: string;
  population: number;
  region: string | string[];
  capital: string;
}

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json',
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

function NextPage() {
  const router = useRouter();
  const { region } = router.query;

  const {
    data: fetchedItems,
    isLoading,
    error,
  } = useQuery<CountryProps[], Error | AxiosError>('countries', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function filterItems(data: CountryProps[] | null, filterParam: string) {
    // if (filteredItems) {
    //   const values: CountryProps[] = [];
    //   for (const key in filteredItems) {
    //     if (filteredItems[key].region === filterParam) {
    //       values.push(filteredItems[key]);
    //     }
    //   }
    //   return values;
    // }
    // return [];
    const values: CountryProps[] = [];
    if (filterParam === 'All' && data) {
      Object.keys(data).forEach((key: string) => {
        const item: CountryProps = data[key];
        values.push(item);
      });
      return values;
    }
    if (data) {
      Object.keys(data).forEach((key: string) => {
        const item: CountryProps = data[key];
        if (item.region === filterParam) {
          values.push(item);
        }
      });
      return values;
    }

    return [];
  }

  const resultItems = fetchedItems
    ? filterItems(fetchedItems, region as string)
    : [];

  return (
    <Body>
      <Header>
        <Link href="/auth/booktalkApply/SelectRegion">
          <ImageContainer>
            <Image src={backArrow} width={30} height={30} alt="뒤로가기" />
          </ImageContainer>
        </Link>
        <Title>모집 중인 북토크</Title>
      </Header>
      <SelectBox>
        <SubTitle>{region}</SubTitle>
        <Image
          src={btnDown}
          width={24}
          height={24}
          alt="selectBox 띄우기 버튼"
        />
      </SelectBox>

      <SingleBookTalkContainer>
        {resultItems.map((item) => (
          <SingleBookTalk key={item.alpha3Code} item={item} />
        ))}
      </SingleBookTalkContainer>
    </Body>
  );
}

export default NextPage;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};

  border: 2px solid ${({ theme }) => theme.colors.gray11};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  position: sticky;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  margin-top: 4.4rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;

  img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};

  margin-right: 12.8rem;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;

  height: 2.4rem;

  margin-top: 2.1rem;
  margin-left: 2rem;
  margin-bottom: 1.1rem;
  gap: 0.2rem;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};
`;

const SingleBookTalkContainer = styled.div`
  width: 37.5rem;
  height: 40rem;

  overflow-y: scroll;
`;
