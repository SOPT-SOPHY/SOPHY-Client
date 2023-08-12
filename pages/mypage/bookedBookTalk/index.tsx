import React from 'react';
import Layout from '../../../components/common/Layout';
import BooktalkList from '../../../components/mypage/BooktalkList';

const index = () => {
  return (
    <Layout noHeader noMenuBar noFooter>
      <BooktalkList />
    </Layout>
  );
};

export default index;
