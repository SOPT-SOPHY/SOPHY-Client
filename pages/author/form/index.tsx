import React from 'react';
import AuthorForm from '../../../components/author/AuthorForm';
import Layout from '../../../components/common/Layout';

const index = () => {
  return (
    <Layout noHeader noMenuBar noFooter>
      <AuthorForm />
    </Layout>
  );
};

export default index;
