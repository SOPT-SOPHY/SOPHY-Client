import React from 'react';
import AuthorConfirm from '../../../components/author/AuthorConfirm';
import Layout from '../../../components/Layout';

const index = () => {
  return (
    <Layout noHeader noMenuBar noFooter>
      <AuthorConfirm />
    </Layout>
  );
};

export default index;
