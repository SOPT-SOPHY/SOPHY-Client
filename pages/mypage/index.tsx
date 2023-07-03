import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const index = () => {
  const router = useRouter();
  const user = true;

  const previousPage = router.query.previous as string;

  useEffect(() => {
    console.log(previousPage);
  }, []);
  return <div>{user ? <div>독자뷰</div> : <div>작가뷰</div>}</div>;
};

export default index;
