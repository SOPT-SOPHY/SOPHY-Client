import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface CountryProps {
  alpha3Code: string;
  flag: { large: string };
  name: string;
  population: number;
  region: string | string[];
  capital: string;
}

const App: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<CountryProps[]>([]);
  const [q, setQ] = useState('');
  const [searchParam] = useState<(keyof CountryProps)[]>([
    'capital',
    'name',
    'alpha3Code',
  ]);
  const [filterParam, setFilterParam] = useState<keyof CountryProps | 'All'>(
    'All',
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json',
        );
        setIsLoaded(true);
        setItems(response.data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchData();
  }, []);

  const data = Object.values(items);

  function search(items: CountryProps[]) {
    return items.filter((item) => {
      if (
        (Array.isArray(item.region)
          ? item.region.includes(filterParam)
          : item.region === filterParam) ||
        filterParam === 'All'
      ) {
        return searchParam.some((newItem: keyof CountryProps) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
      return false;
    });
  }

  if (error) {
    return (
      <p>
        {error?.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrate how
        this works,{' '}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <Wrapper>
        <SearchWrapper>
          <label htmlFor="search-form">
            <SearchInput
              type="search"
              name="search-form"
              id="search-form"
              placeholder="Search for..."
              value={q}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQ(e.target.value)
              }
            />
            <SrOnly>Search countries here</SrOnly>
          </label>

          <SelectBox>
            <Select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setFilterParam(e.target.value as keyof CountryProps | 'All');
              }}
              aria-label="Filter Countries By Region">
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </Select>
          </SelectBox>
        </SearchWrapper>
        <CardGrid>
          {search(data).map((item) => (
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
      </Wrapper>
    );
  }
};

export default App;

const Wrapper = styled.div`
  width: 96%;
  max-width: 1140px;
  margin: 0 auto;
`;

const SearchWrapper = styled.div`
  margin: 48px 0;
  display: flex;
  justify-content: space-between;
`;

const SrOnly = styled.span`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const SelectBox = styled.div`
  min-width: 15ch;
  max-width: 30ch;
  cursor: pointer;
  line-height: 1.1;
  background-color: transparent;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 6px var(--border);
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    box-shadow: 0px 0px 0px var(--border);
  }

  &::after {
    content: '';
    display: block;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--text);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    justify-self: end;
    margin-right: 1em;
  }
`;

const Select = styled.select`
  appearance: none !important;
  outline: none;
  background-color: var(--bg-offset);
  border-radius: 0.25em;
  border-width: 1px;
  border-style: solid;
  border-color: var(--border);
  padding: 1.4em 2em 1.4em 1em;
  margin: 0;
  margin-right: 1em;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  width: 100%;
  color: var(--gray);
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

const SearchInput = styled.input`
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==');
  background-color: var(--bg-offset);
  background-size: 16px 16px;
  background-position: left 10px center;
  background-repeat: no-repeat;
  padding: 1.4em 2em;
  padding-left: 2.7em;
  border: 1px solid var(--border);
  color: var(--gray);
  box-shadow: 0px 4px 6px var(--border);
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    box-shadow: 0px 0px 0px var(--border);
  }
`;

const Focus = styled.span`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--text);
  border-radius: inherit;
`;
