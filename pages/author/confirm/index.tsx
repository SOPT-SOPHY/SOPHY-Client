import React from 'react';
import AuthorConfirm from '../../../components/author/AuthorConfirm';
import Layout from '../../../components/Layout';
import { useFetchBookTalkDetail } from '../../../hooks/queries/author';

const index = () => {
  const data = useFetchBookTalkDetail();

  console.log(data);
  return (
    <Layout noHeader noMenuBar noFooter>
      <AuthorConfirm />
      {data?.data?.title}
    </Layout>
  );
};

export default index;
