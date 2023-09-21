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
        <Image src={ProfileImg} alt="" />
        <ProfileText>
          <UserName>강민지님</UserName>
          <UserEmail>sophyofficial@naver.com</UserEmail>
        </ProfileText>
        <Image src={ProfileMore} alt="프로필 더보기 아이콘" />
      </MyProfileInfo>
    </MyProfileWrapper>
  );
}

export default MyProfile;

const MyProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
`;
const MypageTitleName = styled.div`
  width: 37.5rem;
  padding: 2.2rem 0rem 0rem 2rem;
  ${theme.fonts.subhead2_bold}
`;
const MyProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const ProfileText = styled.div`
  width: 23rem;
`;
const UserName = styled.div`
  ${theme.fonts.headline3_bold};
`;
const UserEmail = styled.div`
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray04};
`;
