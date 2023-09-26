/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import NextIcon from '../../assets/icon/NextIcon.svg';
import NonLocalCertificationIcon from '../../assets/icon/NonLocalCertificationIcon.svg';
import {
  AuthorAuthorizationIcon,
  AuthorBooktalkManageMoreIcon,
  AuthorCertificationIcon,
  AuthorMypageMoreIcon,
  LocalCertificationIcon,
  NavBookGrayIcon,
  NavHomeGrayIcon,
  NavPersonColorIcon,
  NavPinGrayIcon,
} from '../../assets/icon';
import PredictedBT from '../../components/mypage/PredictedBT';
import { uesFetchMyInfo, uesFetchMypage } from '../../hooks/queries/mypage';
import { uesFetchMemberHome } from '../../hooks/queries/home';
import theme from '../../styles/theme';
import MyBookSlider from '../../components/MyBookSlider';
import Card from '../../components/mypage/Card';
import { AuthorBooktalkManageImg } from '../../assets/img';
import Footer from '../../components/common/Footer/Footer';

function MySophy() {
  const router = useRouter();

  const { myInfo } = uesFetchMyInfo();
  const { mypage } = uesFetchMypage();
  const data = uesFetchMemberHome();

  console.log(myInfo);
  console.log(mypage);

  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  useEffect(() => {
    if (!refreshToken && !accessToken) {
      router.push('auth/login');
      alert('비회원은 접근할 수 없는 페이지예요 :(');
    }
  }, [accessToken, refreshToken, router]);

  return (
    <Body>
      <Header>
        <Title>나의 소피</Title>
      </Header>
      <Profile>
        <UserWrapper>
          <UserName>
            <h1>{mypage?.name}</h1>
            <h2>님</h2>
          </UserName>
          <ButtonWrapper>
            <Image
              src={NextIcon}
              width={20}
              height={20}
              alt="유저 정보 수정 아이콘"
              onClick={() => router.push('/mypage/managingInfo')}
            />
          </ButtonWrapper>
        </UserWrapper>
        <NonLocalCertification>
          {myInfo?.city ? (
            <Image
              src={LocalCertificationIcon}
              width={87}
              height={28}
              alt="지역 인증 후 아이콘"
            />
          ) : (
            <Image
              src={NonLocalCertificationIcon}
              width={87}
              height={28}
              alt="지역 인증 전 아이콘"
              onClick={() => router.push('/mypage/managingInfo/selectRegion')}
            />
          )}
          {data?.is_author ? (
            <Image
              src={AuthorCertificationIcon}
              width={87}
              height={28}
              alt="작가 인증 후 아이콘"
              style={{ marginLeft: '0.6rem' }}
            />
          ) : (
            <></>
          )}
        </NonLocalCertification>
      </Profile>
      <Card
        expected={mypage?.expected_book_talk_count}
        waiting={mypage?.waiting_book_talk_count}
        completed={mypage?.complete_book_talk_count}
        is_author={data?.is_author}
      />
      {data?.is_author ? (
        <>
          <AuthorBooktalkManageWrapper>
            <Image
              src={AuthorBooktalkManageImg}
              alt="북토크 관리하기 이미지"
              width={193}
              height={42}
              style={{ marginLeft: '2.8rem', marginBottom: '2.4rem' }}
            />
            <Image
              src={AuthorBooktalkManageMoreIcon}
              alt="더 보기 아이콘"
              style={{ marginLeft: '11rem' }}
            />
          </AuthorBooktalkManageWrapper>
          <Devider style={{ marginBottom: '3.2rem' }} />
        </>
      ) : (
        <></>
      )}
      {mypage?.my_page_booktalk_dtos?.length === 0 ? (
        <>
          <EmptyExpectedBooktalkTitle>예정된 북토크</EmptyExpectedBooktalkTitle>
          <EmptyExpectedBooktalk
            type="button"
            onClick={() => {
              if (myInfo?.city === null) {
                router.push('/booktalk/search/UIJEONGBU_SI');
              } else {
                router.push(`/booktalk/search/${myInfo?.city}`);
              }
            }}>
            내 주변 북토크 찾아보기
          </EmptyExpectedBooktalk>
        </>
      ) : (
        <>
          <PredictedBT booktalkList={mypage?.my_page_booktalk_dtos} />
        </>
      )}
      {data?.is_author ? (
        <>
          <Devider />
          <MyBookTitle>
            내 도서 관리
            <Image
              src={AuthorMypageMoreIcon}
              alt="더보기 아이콘"
              onClick={() => router.push('/mypage/managingMyBook')}
            />
          </MyBookTitle>
          <MyBookSlider booktalkList={mypage?.my_book_dtos} />
          <Devider />
        </>
      ) : (
        <></>
      )}

      <ListWrapper>
        <List>
          {data?.is_author ? (
            <>
              <h1>개인정보 처리 방침</h1>
              <h1>서비스 이용 약관</h1>
            </>
          ) : (
            <>
              <AuthorAuthorization
                onClick={() =>
                  router.push(
                    'https://spicy-gatsby-1c7.notion.site/ca91c889bb2b45239fe377054a86400e',
                  )
                }>
                <Image
                  src={AuthorAuthorizationIcon}
                  alt="작가 인증 아이콘"
                  style={{ marginRight: '0.2rem' }}
                />
                작가 인증하기
              </AuthorAuthorization>
              <RuleText>개인정보 처리 방침</RuleText>
              <RuleText>서비스 이용 약관</RuleText>
            </>
          )}
        </List>
      </ListWrapper>
      <Footer />
    </Body>
  );
}

export default MySophy;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.gray11};
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  position: fixed;
  top: 0;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  height: 4.4rem;
  gap: 0.4rem;

  margin-top: 7.1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.4rem;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  h1 {
    ${({ theme }) => theme.fonts.headline3_bold};
    color: ${({ theme }) => theme.colors.gray01};
  }

  h2 {
    ${({ theme }) => theme.fonts.subhead1_medium};
    color: ${({ theme }) => theme.colors.gray01};
  }
`;

const ButtonWrapper = styled.span`
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const NonLocalCertification = styled.div`
  display: flex;
  margin-left: img {
    width: 8.7rem;
    height: 2.8rem;
  }
`;

const ListWrapper = styled.div`
  margin-top: 3.2rem;
  margin-left: 2rem;
  margin-bottom: 8.3rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  h1 {
    ${({ theme }) => theme.fonts.body1_medium};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const EmptyExpectedBooktalk = styled.button`
  width: 33.5rem;
  height: 5.2rem;

  border: none;
  border-radius: 0.6rem;

  ${theme.fonts.subhead4_semibold};

  background-color: ${theme.colors.green03};
  color: ${theme.colors.green08};

  margin-left: 2rem;
  margin-bottom: 2.8rem;
`;

const EmptyExpectedBooktalkTitle = styled.div`
  width: 33.5rem;

  ${theme.fonts.subhead2_bold};
  color: ${theme.colors.gray01};

  margin-top: 3.2rem;
  margin-bottom: 1.2rem;
  margin-left: 2rem;
`;

const MyBookTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 33.5rem;
  color: ${theme.colors.gray01};
  ${theme.fonts.subhead2_bold};

  margin-top: 3.2rem;
  margin-left: 2.1rem;
  margin-bottom: 1.4rem;
`;

const Devider = styled.div`
  width: 33.5rem;
  height: 0.1rem;

  background-color: ${theme.colors.gray11};

  margin-left: 2rem;
`;

const AuthorBooktalkManageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const AuthorAuthorization = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${theme.fonts.body1_medium}
`;

const RuleText = styled.div`
  color: ${theme.colors.gray05};
  ${theme.fonts.body1_medium};
`;
