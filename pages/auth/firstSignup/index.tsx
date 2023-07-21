import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import Layout from '../../../components/Layout';
import { SignupConfirm } from '../../../assets/img';
import theme from '../../../styles/theme';
import { uesFetchMemberHome } from '../../../hooks/queries/home';

const firstSignup = () => {
  const router = useRouter();
  const data = uesFetchMemberHome();

  return (
    <Layout noHeader noMenuBar noFooter>
      <Title>
        {data?.name}님,
        <br />
        회원가입을 축하합니다!
      </Title>
      <Subtitle>지금 바로 소피를 즐겨보세요</Subtitle>
      <Image src={SignupConfirm} alt="회원가입 완료" width={375} height={375} />
      <Button type="button" onClick={() => router.push('/home')}>
        소피 홈으로
      </Button>
    </Layout>
  );
};

export default firstSignup;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.7rem;
  width: 27.5rem;
  height: 4.4rem;
  border: none;
  border-radius: 0.6rem;
  ${theme.fonts.subhead3_semibold};
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;
const Title = styled.h1`
  margin-top: 9.6rem;
  text-align: center;
  ${theme.fonts.headline2_bold};
  color: ${theme.colors.black};
`;
const Subtitle = styled.h2`
  margin-top: 1rem;
  ${theme.fonts.subhead2_medium};
  color: ${theme.colors.gray06};
`;
