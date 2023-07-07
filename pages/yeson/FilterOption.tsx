import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface CountryProps {
  alpha3Code: string;
  flag: { large: string };
  name: string;
  population: number;
  region: string | string[];
  capital: string;
  join?: () => string;
}

type FilterParam = keyof CountryProps | 'All';

const FilterOptions = () => {
  const [filterParam, setFilterParam] = useState<string>('All');
  const [items, setItems] = useState<CountryProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json',
        );
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (value: string) => {
    setFilterParam(value);
    // 이곳에서 필터링된 데이터를 가져와 페이지에 표시하도록 로직을 추가해주세요.
    // API 호출 또는 필터링된 데이터를 가공하는 로직을 작성해야 합니다.
  };

  const filteredCountries =
    filterParam === 'All'
      ? items
      : items.filter((item) => item.region === filterParam);

  return (
    <>
      <OptionsList>
        <FilterOption
          isActive={filterParam === 'All'}
          onClick={() => handleFilterChange('All')}>
          Filter By Region
        </FilterOption>
        <FilterOption
          isActive={filterParam === 'Africa'}
          onClick={() => handleFilterChange('Africa')}>
          Africa
        </FilterOption>
        <FilterOption
          isActive={filterParam === 'America'}
          onClick={() => handleFilterChange('America')}>
          America
        </FilterOption>
        <FilterOption
          isActive={filterParam === 'Asia'}
          onClick={() => handleFilterChange('Asia')}>
          Asia
        </FilterOption>
        <FilterOption
          isActive={filterParam === 'Europe'}
          onClick={() => handleFilterChange('Europe')}>
          Europe
        </FilterOption>
        <FilterOption
          isActive={filterParam === 'Oceania'}
          onClick={() => handleFilterChange('Oceania')}>
          Oceania
        </FilterOption>
      </OptionsList>
      <CardGrid>
        {filteredCountries.map((item: CountryProps) => (
          <Li key={item.alpha3Code}>
            <Card>
              <CardImg>
                <Img src={item.flag.large} alt={item.name} />
              </CardImg>
              <CardContent>
                <CardName>{item.name}</CardName>
                <CardList>
                  <Li>
                    population: <Span>{item.population}</Span>
                  </Li>
                  <Li>
                    Region:{' '}
                    <Span>
                      {Array.isArray(item.region)
                        ? item.region.join(', ')
                        : item.region}
                    </Span>
                  </Li>
                  <Li>
                    Capital: <Span>{item.capital}</Span>
                  </Li>
                </CardList>
              </CardContent>
            </Card>
          </Li>
        ))}
      </CardGrid>
    </>
  );
};

const OptionsList = styled.ul`
  display: flex;
  gap: 8px;
`;

const FilterOption = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  padding: 6px 12px;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--bg-offset)' : 'transparent'};
  color: ${({ isActive }) => (isActive ? 'var(--text)' : 'var(--gray)')};
  border-radius: 4px;

  &:hover {
    background-color: var(--bg-offset);
  }
`;

const CardGrid = styled.ul`
  margin: 2em 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 48px;
`;

const Card = styled.article`
  background-color: var(--bg-offset);
  padding: 0px;
  box-shadow: 0px 2px 4px var(--border);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const CardImg = styled.div`
  max-height: 150px;
  overflow: hidden;
`;

const Img = styled.img`
  margin-top: -13px;
  min-height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const CardContent = styled.div`
  padding: 32px 15px;
`;

const CardName = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardList = styled.ol`
  margin-top: 16px;
`;

const Li = styled.li`
  color: var(--text);
  margin-top: 8px;
`;

const Span = styled.span`
  color: var(--gray);
`;

export default FilterOptions;
