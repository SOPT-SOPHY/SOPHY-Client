/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
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

function MySophy() {
  const router = useRouter();

  const { myInfo } = uesFetchMyInfo();
  const { mypage } = uesFetchMypage();
  const data = uesFetchMemberHome();

  console.log(myInfo);
  console.log(mypage);

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
        <AuthorBooktalkManageWrapper>
          <Image
            src={AuthorBooktalkManageImg}
            alt="북토크 관리하기 이미지"
            width={193}
            height={42}
            style={{ marginLeft: '2.8rem' }}
          />
          <Image
            src={AuthorBooktalkManageMoreIcon}
            alt="더 보기 아이콘"
            style={{ marginLeft: '11rem' }}
          />
        </AuthorBooktalkManageWrapper>
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
            <Image src={AuthorMypageMoreIcon} alt="더보기 아이콘" />
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
              <AuthorAuthorization>
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
      <FooterWrapper>
        <Footer>
          <IconsWrapper>
            <IconWrapper>
              <Image
                src={NavHomeGrayIcon}
                alt="홈 화면 바로가기 아이콘"
                onClick={() => router.push('/home')}
              />
              <UnClickedIconText>홈</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavPinGrayIcon}
                alt="지역 화면 바로가기 아이콘"
                onClick={() => {
                  if (myInfo?.city === null) {
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
                onClick={() => router.push('/sophyStory')}
              />
              <UnClickedIconText>소피스토리</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavPersonColorIcon}
                alt="MY 페이지 바로가기 아이콘"
                onClick={() => router.push('/mypage/home')}
              />
              <IconText>나의 소피</IconText>
            </IconWrapper>
          </IconsWrapper>
        </Footer>
      </FooterWrapper>
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

  background-color: ${({ theme }) => theme.colors.white};

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
  text-align: center;

  ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.green06};
`;

const UnClickedIconText = styled.div`
  text-align: center;

  ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.gray06};
`;

const IconsWrapper = styled.div`
  width: 32.5rem;
  display: flex;
  justify-content: space-between;
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
