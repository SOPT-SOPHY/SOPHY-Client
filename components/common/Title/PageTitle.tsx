import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { GoBackIcon } from '../../../assets/icon';
import theme from '../../../styles/theme';
import { handleGoBack } from '../../../hooks/common';

interface PageTitleProps {
  pageTitleText: string;
  goBack?: boolean;
}

function PageTitle(props: PageTitleProps) {
  const { pageTitleText, goBack } = props;
  return (
    <>
      <Head>
        {goBack ? (
          <GoBackImage
            src={GoBackIcon}
            alt="뒤로가기 아이콘"
            onClick={handleGoBack}
          />
        ) : (
          <EmptyGoBack />
        )}
        <PageTitleText>{pageTitleText}</PageTitleText>
        <TitleBlank />
      </Head>
      <HeadBlank />
    </>
  );
}

export default PageTitle;

const Head = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  background-color: ${theme.colors.white};

  width: 37.5rem;

  z-index: 3;
`;

const GoBackImage = styled(Image)`
  cursor: pointer;
`;

const EmptyGoBack = styled.div`
  width: 4.4rem;
  height: 4.4rem;
`;

const HeadBlank = styled.div`
  width: 37.5rem;
  height: 4.4rem;
`;

const PageTitleText = styled.div`
  ${theme.fonts.subhead2_bold};
`;

const TitleBlank = styled.div`
  width: 4.4rem;
  height: 4.4rem;
`;
