/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
// import sample from 'public/next.svg';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from '../../styles/theme';
import Layout from '../../components/Layout';
import HomeTopImg from '../../assets/img/HomeTopImg.png';
import {
  BooktalkScheduleIcon,
  HomeMoreIcon,
  PinIcon,
  HeartIcon,
  HomeLightMoreIcon,
  NavBookGrayIcon,
  NavHomeColorIcon,
  NavPersonGrayIcon,
  NavPinGrayIcon,
  InterestingRegionMoreIcon,
  Ranking1Icon,
  Ranking2Icon,
  Ranking3Icon,
} from '../../assets/icon';
import SimpleSlider from '../../components/SimpleSlider';
import HotBookTalkSlider from '../../components/HotBookTalkSlider';
import {
  uesFetchMemberHome,
  uesFetchNonMemberHome,
} from '../../hooks/queries/home';
import { uesFetchMyInfo } from '../../hooks/queries/mypage';
import { NewLogoWhite } from '../../assets/img';

function Home() {
  const router = useRouter();

  const { myInfo } = uesFetchMyInfo();

  const regions: any = {
    UIJEONGBU_SI: '의정부시',
    UIJEONGBU_DONG: '의정부동',
    HOWON_DONG: '호원동',
    JANGAM_DONG: '장암동',
    SINGOK_DONG: '신곡동',
    YOUNGHYUN_DONG: '용현동',
    MINRAK_DONG: '민락동',
    NAKYANG_DONG: '낙양동',
    GEUMO_DONG: '금오동',
    GANEUNG_DONG: '가능동',
    NOKYANG_DONG: '녹양동',
    GOSAN_DONG: '고산동',
  };

  /*
  const memberId = 1;

  const handleLogout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    router.push('auth/login');
  };
  */

  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');
  const memberId = Cookies.get('memberId');

  useEffect(() => {
    if (!refreshToken && !accessToken && memberId) {
      Cookies.remove('memberId');
      router.push('auth/login');
    }
  }, [accessToken, refreshToken, router, memberId]);

  const data = memberId ? uesFetchMemberHome() : uesFetchNonMemberHome();
  console.log(data);
  if (!data) return;

  /*
  const a = uesFetchRegionSpace('NAKYANG_DONG');
  console.log(a);


  const b = uesFetchRegionBooktalk('NAKYANG_DONG');
  console.log(b);
  */

  /*
  const handleRegion = async () => {
    try {
      const response = await api.get(`${baseURL}/member/my-info/4`, config);
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.error('홈 에러 발생', error);
      // handleLogout();
      // router.push('/auth/login');
    }
  };

  const { data } = handleRegion();
  console.log(data);
  */
  // const refreshToken = Cookies.get('refreshToken');

  /*
  useEffect(() => {
    if (user === '회원' && !refreshToken) {
      router.push('auth/login');
    }
  }, [refreshToken]);
  */
  /*
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
*/
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

  /*
  const [currentPage, setCurrentPage] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (next: any) => setCurrentPage(next),
  };

  const settings2 = {
    className: 'center',
    infinite: false,
    slidesToShow: 2,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '100px',
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

    useFetchTestData(accessToken);

  */

  return (
    <Layout noHeader noMenuBar noFooter>
      {/*
      <button type="button" onClick={handleRegion}>
        버튼
      </button>
  */}
      <TopBackground image={HomeTopImg}>
        <Image
          src={NewLogoWhite}
          alt="로고 이미지"
          width={87}
          height={23}
          style={{
            marginTop: '5.5rem',
            marginLeft: '2rem',
            marginBottom: '2.3rem',
          }}
        />
        <TopText>
          {data.booktalk_count !== null ? (
            <>
              <TopBoldText>{data && data.name}님,</TopBoldText>
              <TopTextUnder>반가워요</TopTextUnder>
            </>
          ) : (
            <>
              <TopBoldText>안녕하세요</TopBoldText>
              <NonMemberTopTextUnder />
            </>
          )}

          <br />
          <TopTextUnder>오늘도 소피로운 하루 보내세요</TopTextUnder>
        </TopText>
        <ScheduledBookTalkWrapper>
          <ScheduledBookTalk>
            <ScheduledBookTalkInnerTextWrapper>
              <Image
                src={BooktalkScheduleIcon}
                alt="예정된 북토크 아이콘"
                style={{ marginLeft: '1.2rem' }}
              />
              <ScheduledBookTalkText>예정된 북토크</ScheduledBookTalkText>
            </ScheduledBookTalkInnerTextWrapper>
            <ScheduledBookTalkInnerTextWrapper>
              {data?.booktalk_count !== null ? (
                <>
                  <ScheduledBookTalkNumberText
                    onClick={() => {
                      if (data?.booktalk_count === 0) {
                        router.push('/home/emptyBookTalk');
                      } else {
                        router.push('/mypage/bookedBookTalk');
                      }
                    }}>
                    {data?.booktalk_count}개
                  </ScheduledBookTalkNumberText>
                  <Image
                    src={HomeMoreIcon}
                    alt="더보기 아이콘"
                    style={{ marginRight: '1.2rem' }}
                    onClick={() => {
                      if (data?.booktalk_count === 0) {
                        router.push('/home/emptyBookTalk');
                      } else {
                        router.push('/mypage/booktalkList');
                      }
                    }}
                  />
                </>
              ) : (
                <>
                  <ScheduledBookTalkNumberText
                    onClick={() => router.push('/auth')}>
                    로그인 후 사용가능
                  </ScheduledBookTalkNumberText>
                  <Image
                    src={HomeMoreIcon}
                    alt="더보기 아이콘"
                    style={{ marginRight: '1.2rem' }}
                    onClick={() => router.push('/auth')}
                  />
                </>
              )}
            </ScheduledBookTalkInnerTextWrapper>
          </ScheduledBookTalk>
        </ScheduledBookTalkWrapper>
        {/*
        <RegionBookTalkWrapper>
          <RegionBookTalk>
            <Image
              src={PinIcon}
              alt="핀 아이콘"
              style={{ marginLeft: '1.4rem' }}
            />
            의정부시 민락동
          </RegionBookTalk>
        </RegionBookTalkWrapper>
      </TopBackground>
      <RegionBookTalkUnderWrapper>
        <RegionBookTalkUnder>
          15개의 소피 북토크가 기다리고 있어요!
        </RegionBookTalkUnder>
      </RegionBookTalkUnderWrapper>
        */}
      </TopBackground>
      {data?.is_author && data?.booktalk_count !== null ? (
        <WriterRegionWrapper>
          <WriterRegionText>
            이번 달, 책과 이야기로 가득한 지역은
          </WriterRegionText>
          <RegionRankingWrapper>
            <Image src={Ranking1Icon} alt="랭킹 1위 아이콘" />
            의정부시 {regions[data?.city_ranks[0]]}
          </RegionRankingWrapper>
          <RegionRankingWrapper>
            <Image src={Ranking2Icon} alt="랭킹 2위 아이콘" />
            의정부시 {regions[data?.city_ranks[1]]}
          </RegionRankingWrapper>
          <RegionRankingWrapper>
            <Image src={Ranking3Icon} alt="랭킹 3위 아이콘" />
            의정부시 {regions[data?.city_ranks[2]]}
          </RegionRankingWrapper>
        </WriterRegionWrapper>
      ) : data?.name === null ? (
        <UserRegionRecommendationWrapper>
          <PlaceNameWrapper>
            <Image
              src={PinIcon}
              alt="핀 아이콘"
              style={{ marginLeft: '1.4rem' }}
            />
            <PlaceName>가장 가까운</PlaceName>
            <PlaceUnderName>북토크를 찾아드릴게요</PlaceUnderName>
            <InterestingRegion onClick={() => router.push('/auth')}>
              <InterestingRegionText>관심지역 설정하기</InterestingRegionText>
              <Image
                src={InterestingRegionMoreIcon}
                alt="관심 지역 더 보기 아이콘"
                style={{ marginLeft: '0.6rem' }}
              />
            </InterestingRegion>
          </PlaceNameWrapper>
        </UserRegionRecommendationWrapper>
      ) : myInfo?.city !== null ? (
        <UserRegionWrapper
          onClick={() => router.push(`/booktalk/search/${myInfo?.city}`)}>
          <PlaceNameWrapper>
            <Image
              src={PinIcon}
              alt="핀 아이콘"
              style={{ marginLeft: '1.4rem' }}
            />
            <PlaceName>의정부시 {regions[myInfo?.city]}</PlaceName>
          </PlaceNameWrapper>
          <PlaceNumber>
            <BoldPlaceNumber>{data?.my_city_booktalk_count}개</BoldPlaceNumber>
            의 소피 북토크가 기다리고 있어요
          </PlaceNumber>
        </UserRegionWrapper>
      ) : (
        <UserRegionRecommendationWrapper>
          <PlaceNameWrapper>
            <Image
              src={PinIcon}
              alt="핀 아이콘"
              style={{ marginLeft: '1.4rem' }}
            />
            <PlaceName>가장 가까운</PlaceName>
            <PlaceUnderName>북토크를 찾아드릴게요</PlaceUnderName>
            <InterestingRegion
              onClick={() => router.push('/mypage/managingInfo')}>
              <InterestingRegionText>관심지역 설정하기</InterestingRegionText>
              <Image
                src={InterestingRegionMoreIcon}
                alt="관심 지역 더 보기 아이콘"
                style={{ marginLeft: '0.6rem' }}
              />
            </InterestingRegion>
          </PlaceNameWrapper>
        </UserRegionRecommendationWrapper>
      )}
      {data?.is_author && data?.booktalk_count !== null ? (
        <AuthorSliderWrapper>
          <SimpleSlider />
        </AuthorSliderWrapper>
      ) : (
        <SliderWrapper>
          <SimpleSlider />
        </SliderWrapper>
      )}
      <HotBookTalk>
        지금 인기있는
        <br /> 소피 북토크 모아보기
        <Image
          src={HeartIcon}
          alt="하트 아이콘"
          style={{ marginTop: '2.1rem' }}
        />
        <MoreHotBookTalk>
          더보기
          <Image src={HomeLightMoreIcon} alt="더보기 아이콘" />
        </MoreHotBookTalk>
      </HotBookTalk>
      <HotBookTalkSliderWrapper>
        <HotBookTalkSlider data={data?.booktalk_deadline_upcoming} />
      </HotBookTalkSliderWrapper>
      <FooterWrapper>
        <Footer>
          <IconsWrapper>
            <IconWrapper>
              <Image src={NavHomeColorIcon} alt="홈 화면 바로가기 아이콘" />
              <IconText>홈</IconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavPinGrayIcon}
                alt="지역 화면 바로가기 아이콘"
                onClick={() => {
                  if (data?.my_city_booktalk_count === null) {
                    router.push('/booktalk/search/UIJEONGBU_SI');
                  } else {
                    router.push(`/booktalk/search/${myInfo?.city}`);
                  }
                }}
              />
              <UnClickedIconText>지역</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavBookGrayIcon}
                alt="소피스토리 화면 바로가기 아이콘"
                onClick={() => {
                  if (data?.name === null) {
                    router.push('/auth');
                  } else {
                    router.push('/sophyStory');
                  }
                }}
              />
              <UnClickedIconText>소피스토리</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavPersonGrayIcon}
                alt="MY 페이지 바로가기 아이콘"
                onClick={() => {
                  if (data?.name === null) {
                    router.push('/auth');
                  } else {
                    router.push('/mypage/home');
                  }
                }}
              />
              <UnClickedIconText>나의 소피</UnClickedIconText>
            </IconWrapper>
          </IconsWrapper>
        </Footer>
      </FooterWrapper>
      {data?.is_author && data?.booktalk_count !== null && (
        <OpenBookTalkButton onClick={() => router.push('/author/region')}>
          북토크 개설하기
        </OpenBookTalkButton>
      )}
      <St.Header>
        {/* 
         <button type="button" onClick={handleLogout}>
          Logout
        </button>
        arr.map((obj, index) => (
          <div key={index}>
            <span>{obj.id}</span>
            <span>{obj.title}</span>
          </div>
        )) */}
      </St.Header>
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
/*
const CustomPaging = styled.div`
  position: fixed;
  top: 9rem;
  right: 20px;
  z-index: 999;
  padding: 10px;
  color: #fff;
  background-color: rgb(0 0 0 / 50%);
  border-radius: 4px;
`;

const Item = styled.div`
  width: 10px;
  height: 200px;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.green01};
  ${theme.fonts.display}
`;
*/
const TopBackground = styled.div<{ image: StaticImageData }>`
  background-image: url(${(props) => props.image.src});
  width: 100%;
  height: 37.9rem;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const TopText = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  color: ${theme.colors.green03};
  ${theme.fonts.subhead2_medium};

  margin-left: 2rem;
  margin-bottom: 9.9rem;
`;

const TopTextUnder = styled.div`
  width: 24rem;
  margin-top: 0.2rem;
`;

const NonMemberTopTextUnder = styled.div`
  width: 23.5rem;
`;

const TopBoldText = styled.span`
  color: ${theme.colors.green01};
  ${theme.fonts.headline2_bold};
`;

const ScheduledBookTalk = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 33.5rem;
  height: 5.6rem;
  backdrop-filter: blur(6px);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.2)
  );

  border-radius: 1rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
`;

const ScheduledBookTalkWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 0.1rem;
`;

const ScheduledBookTalkText = styled.span`
  color: ${theme.colors.green03};
  ${theme.fonts.body1_medium};

  margin-left: 0.3rem;
`;

const ScheduledBookTalkNumberText = styled.span`
  color: ${theme.colors.white};
  ${theme.fonts.subhead2_semibold};

  cursor: pointer;
`;

const ScheduledBookTalkInnerTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
/*
const RegionBookTalkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RegionBookTalk = styled.div`
  width: 33.5rem;
  height: 5.3rem;

  ${theme.fonts.subhead2_bold};
  color: ${theme.colors.gray01};
  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;

  margin-top: 1.2rem;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const RegionBookTalkUnderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RegionBookTalkUnder = styled.div`
  display: flex;
  justify-content: center;

  width: 33.5rem;
  height: 5.6rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  color: ${theme.colors.gray05};
  ${theme.fonts.body1_medium};

  box-shadow: 0rem 0.1rem 0.18rem pink;
`;
*/
const UserRegionWrapper = styled.div`
  width: 33.5rem;
  height: 10.8rem;

  position: relative;
  top: -5.2rem;

  background-color: ${theme.colors.white};
  border-radius: 1rem;

  border-bottom: 3.2rem;

  box-shadow: 0.1rem 0.18rem 1.2rem rgba(64, 119, 118, 17%);

  cursor: pointer;
`;

const UserRegionRecommendationWrapper = styled.div`
  width: 33.5rem;
  height: 14.8rem;

  position: relative;
  top: -5.2rem;

  background-color: ${theme.colors.white};
  border-radius: 1rem;

  border-bottom: 3.2rem;

  box-shadow: 0.1rem 0.18rem 1.2rem rgba(64, 119, 118, 17%);
`;

const WriterRegionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 33.5rem;
  height: 18rem;

  position: relative;
  top: -5.2rem;

  background-color: ${theme.colors.white};
  border-radius: 1rem;

  border-bottom: 2.5rem;

  box-shadow: 0.1rem 0.18rem 1.2rem rgba(64, 119, 118, 17%);
`;

const WriterRegionText = styled.div`
  width: 33.5rem;

  color: ${theme.colors.gray01};
  ${theme.fonts.subhead4_semibold};

  text-align: center;

  margin-top: 1.8rem;
`;

const RegionRankingWrapper = styled.div`
  width: 5rem;
  height: 8.7rem;

  color: ${theme.colors.gray02};
  ${theme.fonts.body2_medium};

  text-align: center;

  margin: 0 2.2rem;
`;

const PlaceNameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin-top: 2.2rem;
  margin-bottom: 0.8rem;
`;

const PlaceName = styled.div`
  color: ${theme.colors.gray01};
  ${theme.fonts.subhead1_bold};
`;

const PlaceUnderName = styled.div`
  color: ${theme.colors.gray01};
  ${theme.fonts.subhead1_bold};

  width: 30rem;
  margin-left: 4.5rem;
  margin-bottom: 1.6rem;
`;

const InterestingRegion = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 14.1rem;
  height: 3.6rem;

  color: ${theme.colors.green01};
  background-color: ${theme.colors.primary};

  border-radius: 0.8rem;
  border: none;

  margin-left: 17.4rem;
`;

const InterestingRegionText = styled.div`
  width: 10.1rem;

  ${theme.fonts.body2_regular};
`;

const PlaceNumber = styled.div`
  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray05};

  margin-left: 4.3rem;
`;

const BoldPlaceNumber = styled.span`
  ${theme.fonts.headline3_bold};
  color: ${theme.colors.primary};

  margin-right: 0.8rem;
`;

const SliderWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  height: 9.9rem;
  margin-bottom: 1.6rem;
  margin-top: -2rem;
`;

const AuthorSliderWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  height: 9.9rem;
  margin-bottom: 1.6rem;
  margin-top: -2.7rem;
`;

const HotBookTalk = styled.div`
  display: flex;
  align-items: center;

  width: 34.3rem;
  height: 4.6rem;

  ${theme.fonts.subhead2_bold};
  color: ${theme.colors.gray01};
  margin-left: 0.4rem;
`;

const MoreHotBookTalk = styled.div`
  display: flex;
  align-items: center;

  color: ${theme.colors.gray07};
  ${theme.fonts.body2_regular};

  margin-top: 2.6rem;
  margin-left: 11.5rem;

  cursor: pointer;
`;

const HotBookTalkSliderWrapper = styled.div`
  margin-bottom: 9rem;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 37.5rem;
  height: 8.3rem;

  padding-left: 3rem;
  padding-right: 3rem;

  margin-top: 1rem;

  background-color: ${theme.colors.white};

  box-shadow: 0rem -0.4rem 0.8rem rgba(54, 57, 60, 4%);
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.div`
  text-align: center;
  width: 4.9rem;
  height: 5.1rem;

  cursor: pointer;
`;

const IconText = styled.div`
  color: ${theme.colors.green06};
  ${theme.fonts.caption};
  text-align: center;
`;

const UnClickedIconText = styled.div`
  color: ${theme.colors.gray06};
  ${theme.fonts.caption};
  text-align: center;
`;

const IconsWrapper = styled.div`
  width: 32.5rem;
  display: flex;
  justify-content: space-between;
`;

const OpenBookTalkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 10.7rem;
  margin-left: 23.4rem;

  width: 12.1rem;
  height: 4.8rem;

  border-radius: 99.9rem;
  border: none;

  ${theme.fonts.body2_bold};

  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};

  z-index: 5;
`;
