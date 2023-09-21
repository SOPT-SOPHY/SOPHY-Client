import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { ProfileImg, ProfileMore } from '../../assets/icon';
import Image from 'next/image';

function MyProfile() {
  return (
    <MyProfileWrapper>
      <MypageTitleName>나의 소피</MypageTitleName>
      <MyProfileInfo>
        <Image src={ProfileImg} alt="" style={{ marginRight: '1.8rem' }} />
        <ProfileText>
          <UserName>
            강민지
            <span
              style={{
                fontWeight: 500,
                fontSize: '2rem',
                lineHeight: '2.6rem',
                marginLeft: '0.2rem',
              }}>
              님
            </span>
          </UserName>
          <UserEmail>sophyofficial@naver.com</UserEmail>
        </ProfileText>
        <Image src={ProfileMore} alt="프로필 더보기 아이콘" />
      </MyProfileInfo>
    </MyProfileWrapper>
  );
}

export default MyProfile;

const MyProfileWrapper = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
`;
const MypageTitleName = styled.div`
  padding: 2.2rem 0rem 0rem 2rem;
  ${theme.fonts.subhead2_bold};
  margin-bottom: 2.5rem;
`;
const MyProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  border-bottom: 0.1rem solid ${theme.colors.gray10};
`;
const ProfileText = styled.div`
  width: 23rem;
  margin-bottom: 1.6rem;
`;
const UserName = styled.div`
  ${theme.fonts.headline3_bold};
  margin-bottom: 0.5rem;
`;
const UserEmail = styled.div`
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray04};
`;
