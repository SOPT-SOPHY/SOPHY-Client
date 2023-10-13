import React, { useEffect } from 'react';
import MyProfile from '../../components/mypage/myProfile/MyProfile';
import Footer from '../../components/common/Footer/Footer';
import Menus from '../../components/mypage/menus/Menus';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Mypage = () => {
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');
  const router = useRouter();

  useEffect(() => {
    if (!refreshToken && !accessToken) {
      alert('비회원은 접근할 수 없는 페이지예요 :(');
      router.push('auth');
    }
  }, [accessToken, refreshToken, router]);
  return (
    <div>
      <MyProfile />
      <Menus />
      <Footer />
    </div>
  );
};

export default Mypage;
