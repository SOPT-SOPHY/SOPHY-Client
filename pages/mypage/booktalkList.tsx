import React from 'react';
import Layout from '../../components/Layout';
import BooktalkList from '../../components/mypage/BooktalkList';

const booktalkList = () => {
  return (
    <Layout noHeader noMenuBar noFooter>
      <BooktalkList />
    </Layout>
  );
};

export default booktalkList;
