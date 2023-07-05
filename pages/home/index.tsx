/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import sample from 'public/next.svg';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '../../components/Layout';

function Home() {
  const user = '비회원';
  const router = useRouter();

  var a = 1;

  const handleLogout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    router.push('auth/login');
  };

  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  useEffect(() => {
    if (user === '회원' && !refreshToken) {
      router.push('auth/login');
    }
  }, [refreshToken]);

  if (!accessToken) {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/test/auth/refresh`, {
        refreshToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNjg3NzgzNzQ4LCJpc3MiOiJNb3JnYW4iLCJleHAiOjE2ODc3ODczNDgsInN1YiI6InVzZXJJbmZvIn0.DTpLuflN65whAUn1Xreexhl5R3T0bkTISAQSKQM7iy4',
        accessTokenExpiredTime: 600,
        refreshTokenExpiredTime: 3600,
      })
      .then((response) => {
        console.log(response);
        const newAccessToken = response.data.accessToken;
        Cookies.set('accessToken', newAccessToken);
        router.push('/home');
      })

      .catch((error) => {
        console.error('Refresh Token Error:', error);
        // router.push('auth/login');
      });
  }

  /*
  const { isLoading, error, data } = useQuery(['repoData'], () =>
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
      return res.data;
    }),
  );

  if (!data) return;

  const arr = Object.keys(data).map((key) => data[key]);
  console.log(arr);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ';
*/

  const [currentPage, setCurrentPage] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (next: any) => setCurrentPage(next),
  };

  let content;

  switch (user) {
    case '회원':
      content = <div>회원</div>;
      break;
    case '작가':
      content = <div>작가</div>;
      break;
    default:
      content = <div>비회원</div>;
      break;
  }

  return (
    <Layout noHeader noFooter noMenuBar>
      <div>Logo</div>
      <St.Header>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
        {/* arr.map((obj, index) => (
          <div key={index}>
            <span>{obj.id}</span>
          </div>
        )) */}
        <Image src={sample} alt="상단 배너" />
      </St.Header>
      {content}
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              Slide{' '}
              <St.Page>
                {currentPage + 1}/{3}
              </St.Page>
            </h3>
          </div>
          <div>
            <h3>
              Slide{' '}
              <span>
                {currentPage + 1}/{3}
              </span>
            </h3>
          </div>
          <div>
            <h3>
              Slide{' '}
              <span>
                {currentPage + 1}/{3}
              </span>
            </h3>
          </div>
        </Slider>
        <CustomPaging>Current Page: {currentPage + 1}</CustomPaging>
      </div>
      <div>slider</div>
      <HorizontalScrollContainer>
        <HorizontalScrollContent>
          {/* 수평으로 스크롤될 내용 */}
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          {/* 추가적인 아이템들 */}
        </HorizontalScrollContent>
      </HorizontalScrollContainer>
    </Layout>
  );
}

export default Home;

const St = {
  Header: styled.div`
    font-size: 8rem;
    color: rgb(255 192 203);
  `,
  Page: styled.span`
    padding-left: 3rem;
  `,
};

const CustomPaging = styled.div`
  padding: 10px;
  color: #fff;
  background-color: rgb(0 0 0 / 50%);
  border-radius: 4px;

  position: fixed;
  top: 9rem;
  right: 20px;
  z-index: 999;
`;

const HorizontalScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
`;

const HorizontalScrollContent = styled.div`
  display: inline-block;
`;

const Item = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  margin-right: 20px;
  background-color: lightgray;
`;
