import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { GoBackIcon } from '../../../assets/icon';
import Layout from '../../../components/common/Layout';
import theme from '../../../styles/theme';
import { NewEmptyBooktalkImg } from '../../../assets/img';
import { uesFetchMyInfo } from '../../../hooks/queries/mypage';
import PageTitle from '../../../components/common/Title/PageTitle';
import Footer from '../../../components/common/Footer/Footer';

function EmptyBookTalk() {
  const router = useRouter();

  const { myInfo } = uesFetchMyInfo();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <Layout>
      <Head>
        <PageTitle pageTitleText="예정된 북토크" />
        <TitleBlank />
      </Head>
      <HeadBlank />
      <Image
        src={NewEmptyBooktalkImg}
        alt="북토크가 없음을 나타내는 이미지"
        style={{ marginTop: '5.2rem' }}
        width={375}
        height={348}
      />
      <BookTalkEmptyBold>아직 확정된 일정이 없어요</BookTalkEmptyBold>
      <BookTalkEmptyGray>새로운 북토크 일정을 만들어보세요</BookTalkEmptyGray>
      {/* <OurRegionBookTalkButton
        onClick={() => {
          router.push('/booktalk');
          // if (myInfo?.city === null) {
          //   router.push('/booktalk/search/UIJEONGBU_SI');
          // } else {
          //   router.push(`/booktalk/search/${myInfo?.city}`);
          // }
        }}>
        우리동네 북토크 보러가기
      </OurRegionBookTalkButton> */}
      <Footer />
    </Layout>
  );
}

export default EmptyBookTalk;

const Head = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  background-color: ${theme.colors.white};

  width: 37.5rem;
`;

const HeadBlank = styled.div`
  width: 37.5rem;
  height: 4.4rem;
`;

const TitleBlank = styled.div`
  width: 4.4rem;
  height: 4.4rem;
`;

const BookTalkEmpty = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 33.3rem;
  height: 6rem;

  margin-bottom: 11.2rem;
`;

const BookTalkEmptyBold = styled.div`
  ${theme.fonts.headline3_bold};
  text-align: center;
  margin-top: 4.2rem;
  margin-bottom: 0.8rem;
`;

const BookTalkEmptyGray = styled.div`
  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray06};
  text-align: center;
`;

const OurRegionBookTalkButton = styled.button`
  width: 33.5rem;
  height: 5.2rem;

  margin-bottom: 10rem;

  border: none;
  border-radius: 0.6rem;

  background-color: ${theme.colors.primary};
  color: white;

  ${theme.fonts.subhead3_semibold};
`;

const GoBackImage = styled(Image)`
  cursor: pointer;
`;
