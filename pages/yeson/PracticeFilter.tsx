import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

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
  const [filterParam, setFilterParam] = useState<keyof CountryProps | 'All'>('All');

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json',
    )
      .then((res) => res.json())
      .then(
        (result: CountryProps[]) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error: Error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
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
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
          {' '}
          check it out{' '}
        </a>{' '}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Search countries here</span>
          </label>

          <div className="select">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value as keyof CountryProps | 'All');
              }}
              className="custom-select"
              aria-label="Filter Countries By Region">
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {search(data).map((item) => (
            <li key={item.alpha3Code}>
              <article className="card">
                <div className="card-image">
                  <img src={item.flag.large} alt={item.name} />
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <ol className="card-list">
                    <li>
                      population: <span>{item.population}</span>
                    </li>
                    <li>
                      Region:{' '}
                      <span>
                        {Array.isArray(item.region)
                          ? item.region.join(', ')
                          : item.region}
                      </span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default App;
