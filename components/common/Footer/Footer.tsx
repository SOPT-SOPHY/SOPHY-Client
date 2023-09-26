import router, { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import {
  NavHomeColorIcon,
  NavHomeGrayIcon,
  NavPinGrayIcon,
  NavBookGrayIcon,
  NavPersonGrayIcon,
  NavBooktalkColorIcon,
  NavBooktalkGrayIcon,
  NavMySophyColorIcon,
  NavMySophyGrayIcon,
  NavPersonColorIcon,
} from '../../../assets/icon';
import theme from '../../../styles/theme';
import Image from 'next/image';

const Footer = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <FooterWrapper>
      <_Footer>
        <IconsWrapper>
          <IconWrapper>
            {pathname.startsWith('/home') ? (
              <div>
                <Image src={NavHomeColorIcon} alt="홈 화면 바로가기 아이콘" />
                <IconText>홈</IconText>
              </div>
            ) : (
              <div onClick={() => router.push('/home')}>
                <Image src={NavHomeGrayIcon} alt="홈 화면 바로가기 아이콘" />
                <UnClickedIconText>홈</UnClickedIconText>
              </div>
            )}
          </IconWrapper>
          <IconWrapper>
            {pathname.startsWith('/booktalk' || '/booktalkApply') ? (
              <div>
                <Image
                  src={NavBooktalkColorIcon}
                  alt="북토크 화면 바로가기 아이콘"
                />
                <IconText>북토크</IconText>
              </div>
            ) : (
              <div onClick={() => router.push('/booktalk')}>
                <Image
                  src={NavBooktalkGrayIcon}
                  alt="북토크 화면 바로가기 아이콘"
                />
                <UnClickedIconText>북토크</UnClickedIconText>
              </div>
            )}
          </IconWrapper>
          <IconWrapper>
            {pathname.startsWith('/mySophy') ? (
              <div>
                <Image
                  src={NavMySophyColorIcon}
                  alt="나의 소피 화면 바로가기 아이콘"
                />
                <IconText>나의 소피</IconText>
              </div>
            ) : (
              <div onClick={() => router.push('/mySophy')}>
                <Image
                  src={NavMySophyGrayIcon}
                  alt="나의 소피 화면 바로가기 아이콘"
                />
                <UnClickedIconText>나의 소피</UnClickedIconText>
              </div>
            )}
          </IconWrapper>
          <IconWrapper>
            {pathname.startsWith('/mypage') ? (
              <div>
                <Image
                  src={NavPersonColorIcon}
                  alt="MY 페이지 바로가기 아이콘"
                />
                <IconText>MY</IconText>
              </div>
            ) : (
              <div onClick={() => router.push('/mypage')}>
                <Image
                  src={NavPersonGrayIcon}
                  alt="MY 페이지 바로가기 아이콘"
                />
                <UnClickedIconText>MY</UnClickedIconText>
              </div>
            )}
          </IconWrapper>
        </IconsWrapper>
      </_Footer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const _Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 37.5rem;
  height: 8.3rem;

  margin-top: 1rem;

  background-color: ${theme.colors.white};

  box-shadow: 0rem -0.4rem 0.8rem rgba(54, 57, 60, 4%);
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
