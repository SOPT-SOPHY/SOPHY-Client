import React from 'react';
import AuthorForm from '../../../components/author/AuthorForm';
import Layout from '../../../components/Layout';

const index = () => {
  return (
    <Layout noHeader noMenuBar noFooter>
      <AuthorForm />
    </Layout>
  );
};

export default index;
