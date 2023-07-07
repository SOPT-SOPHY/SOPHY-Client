import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FilterPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedNeighborhoods = queryParams.get('neighborhoods');

  useEffect(() => {
    console.log(selectedNeighborhoods);
  }, [selectedNeighborhoods]);

  return (
    <div>
      <h1>FilterPage</h1>
    </div>
  );
};

export default FilterPage;
