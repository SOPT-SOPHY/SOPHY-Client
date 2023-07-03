import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backArrow from '../../assets/icon/backArrow.svg';
import SingleBookTalk from '../../components/SingleBookTalk';
import { useQuery } from 'react-query';
import axios from 'axios';
import { AxiosError } from 'axios';

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

const NextPage = () => {
  const router = useRouter();
  const { region } = router.query;

  const {
    data: items,
    isLoading,
    error,
  } = useQuery<CountryProps[], Error | AxiosError>('countries', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function filterItems(items: CountryProps[] | null, filterParam: string) {
    if (items) {
      return items.filter((item) => {
        return Array.isArray(item.region)
          ? item.region.includes(filterParam)
          : item.region === filterParam;
      });
    }
    return [];
  }

  const filteredItems = items ? filterItems(items, region as string) : [];

  return (
    <>
      <Body>
        <Header>
          <ImageContainer>
            <Image src={backArrow} width={30} height={30} alt="뒤로가기" />
          </ImageContainer>
          <Title>모집 중인 북토크</Title>
        </Header>
        <SubTitle>{region}</SubTitle>
        <div>
          {filteredItems.map((item, index) => (
            <div key={index}>
              <p>Name: {item.name}</p>
              <p>Population: {item.population}</p>
              {/* 다른 속성들도 렌더링하고 싶은 경우, 추가로 렌더링하면 됩니다 */}
            </div>
          ))}
        </div>
        {filteredItems.map((item, index) => (
          <SingleBookTalk key={index} item={item} />
        ))}
      </Body>
    </>
  );
};

export default NextPage;

const Body = styled.div`
  width: 23.4375rem;
  height: 50.75rem;
  margin: 0 auto;
  padding: 0;
  border: 1px solid black;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7.81rem;

  padding-top: 1.57rem;
`;

const ImageContainer = styled.div`
  margin-left: 1.25rem;
  width: 1.875rem;
  height: 1.875rem;

  img {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 700;
  margin-right: 8.06rem;
  font-family: Pretendard;
`;

const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.625rem;

  margin-left: 1.25rem;
  margin-bottom: 1rem;
`;
