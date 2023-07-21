import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import { logincompleteImg } from '../../assets/img';
import theme from '../../styles/theme';
import { BackButton } from '../../assets/icon';

function AuthorConfirm() {
  return (
    <Confirm>
      <Layout>
        <Header>
          <Link href="/home">
            <Image
              src={BackButton}
              alt="뒤로가기"
              height={44}
              width={44}
              style={{
                marginLeft: '-21px',
                cursor: 'pointer',
              }}
            />
          </Link>
        </Header>
      </Layout>
      <ConfirmSection>
        <Image
          src={logincompleteImg}
          alt="북토크 개설완료"
          width={326}
          height={326}
          style={{
            marginTop: '6.7rem',
          }}
        />
        <ConfirmTitle>북토크 개설이 완료되었어요!</ConfirmTitle>
        <ConfirmSubTitle>
          북토크 내용 수정은 나의 소피에서 가능해요
        </ConfirmSubTitle>
      </ConfirmSection>
      <Link href="/mypage/home">
        <ConfirmButton>나의 소피에서 확인하기</ConfirmButton>
      </Link>
    </Confirm>
  );
}
export default AuthorConfirm;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;
const Confirm = styled.div`
  display: flex;
  flex-direction: column;
`;
const ConfirmSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ConfirmTitle = styled.h1`
  margin-top: 2.4rem;
  ${theme.fonts.headline3_bold};
  color: ${theme.colors.black};
`;
const ConfirmSubTitle = styled.h2`
  margin-top: 0.8rem;
  margin-bottom: 9.3rem;
  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray06};
`;

const ConfirmButton = styled.button`
  margin: 0 2rem;
  width: 33.5rem;
  height: 5.2rem;
  ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.white};
  border-radius: 0.375rem;
  background: ${theme.colors.green05};
  border: none;
`;
