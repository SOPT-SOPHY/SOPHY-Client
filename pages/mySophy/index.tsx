import React, { useEffect } from 'react';
import PredictedBT from '../../components/mypage/PredictedBT';
import { uesFetchMypage } from '../../hooks/queries/mypage';
import { uesFetchSophyStory } from '../../hooks/queries/sophyStory';
import BooktalkList from '../../components/mypage/bookedBooktalk/BooktalkList';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const MySophy = () => {
  const { sophyStory } = uesFetchSophyStory();
  console.log(sophyStory);
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');
  const router = useRouter();

  useEffect(() => {
    if (!refreshToken && !accessToken) {
      console.log('비회원 접근 불가');
      alert('비회원은 접근할 수 없는 페이지예요 :(');
      router.push('auth');
    }
  }, [accessToken, refreshToken, router]);

  return (
    <div>
      <BooktalkList />
    </div>
  );
};

export default MySophy;
