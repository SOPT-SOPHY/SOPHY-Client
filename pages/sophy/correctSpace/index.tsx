import React from 'react';
import styled from 'styled-components';
import SophyLayout from '../../../components/sophy/@SophyLayout';
const index = () => {
  return (
    <SophyLayout title="북토크 정보 수정">
      <St.Title>수정페이지</St.Title>;
    </SophyLayout>
  );
};

export default index;
const St = {
  Title: styled.div`
    margin: 1rem;
    font-size: 2rem;
  `,
};
