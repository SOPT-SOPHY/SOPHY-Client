import React from 'react';
import MyProfile from '../../components/mypage/myProfile/MyProfile';
import Footer from '../../components/common/Footer/Footer';
import Menus from '../../components/mypage/menus/Menus';

const Mypage = () => {
  return (
    <div>
      <MyProfile />
      <Menus />
      <Footer />
    </div>
  );
};

export default Mypage;
