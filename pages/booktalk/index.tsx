import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Layout from '../../components/common/Layout';
import Booktalk from '../../components/booktalk/Booktalk';
import { useFetchBooktalkRegion } from '../../hooks/queries/booktalk';

const index = () => {
  const [booktalkList] = useFetchBooktalkRegion('UIJEONGBU_SI');
  console.log(booktalkList);
  if (!booktalkList) return;
  return (
    <Layout>
      <Booktalk data={booktalkList} />
      <Footer />
    </Layout>
  );
};

export default index;
