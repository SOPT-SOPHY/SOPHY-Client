import React from 'react';
import AuthorRegion from '../../../components/author/AuthorRegion';
import Layout from '../../../components/common/Layout';

const index = () => {
  return (
    <Layout noHeader noMenuBar noFooter>
      <AuthorRegion />
    </Layout>
  );
};

export default index;
