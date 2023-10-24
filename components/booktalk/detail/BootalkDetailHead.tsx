import React from 'react';
import theme from '../../../styles/theme';
import { styled } from 'styled-components';
import { UserDefaultImage } from '../../../assets/img';
import Image from 'next/image';

interface BootalkDetailHeadType {
  data: any;
}

const BootalkDetailHead = (props: BootalkDetailHeadType) => {
  const { data } = props;
  return (
    <BootalkDetailHeadWrapper>
      <CategoryName>{data.bookCategory}</CategoryName>
      <BooktalkTitle>{data.title}</BooktalkTitle>
      <AuthorName>
        <Image
          src={UserDefaultImage}
          alt=""
          width={20}
          height={20}
          style={{ borderRadius: '50%', marginRight: '0.8rem' }}
        />
        {data.author} 작가
      </AuthorName>
    </BootalkDetailHeadWrapper>
  );
};

export default BootalkDetailHead;

const BootalkDetailHeadWrapper = styled.div`
  width: 33.5rem;
  margin-left: 2rem;
  margin-bottom: 2.1rem;
`;

const CategoryName = styled.div`
  ${theme.fonts.body2_medium};
  color: ${theme.colors.gray01};

  margin-top: 1.8rem;
`;

const BooktalkTitle = styled.div`
  ${theme.fonts.subhead1_bold};
  color: ${theme.colors.gray01};

  margin-top: 0.6rem;
`;

const AuthorName = styled.div`
  ${theme.fonts.body2_medium};
  color: ${theme.colors.gray01};

  margin-top: 2.9rem;

  display: flex;
  align-items: center;
`;
