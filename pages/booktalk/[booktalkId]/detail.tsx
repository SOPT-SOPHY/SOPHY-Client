import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import backArrow from '../../../assets/icon/ic_backArrow.svg';
import BTInfo from '../../../components/booktalkApply/BTInfo';
// import BTData from '../../data/BTData';
import CheckBox from '../../../components/booktalkApply/CheckBox';
import { useFetchBookTalkDetail } from '../../../hooks/queries/booktalk';

function BTDetail() {
  const router = useRouter();
  const id = router.query;
  console.log(id?.booktalkId);
  // const id = 1;
  // const data = useFetchBookTalkDetail(id as number);
  //   const id = 1;
  //   const data = useFetchBookTalkDetail(id as number);
  // const booktalkId = typeof id === 'string' ? parseInt(id, 10) : undefined;
  // const booktalkId =
  //   typeof id === 'string'
  //     ? parseInt(id, 10)
  //     : typeof id === 'number'
  //     ? id
  //     : undefined;

  // const { data, isLoading, isError } = useFetchBookTalkDetail(booktalkId);
  const data = useFetchBookTalkDetail(id?.booktalkId);
  // let data = {};
  // if (typeof booktalkId === 'number') {
  //   data = useFetchBookTalkDetail(booktalkId);
  // }
  // const filteredData = BTData.filter((data) => data.id === 1);

  console.log(data);

  // if (isLoading) {
  //   // 로딩 중 화면
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   // 에러 발생 화면
  //   return <div>Error occurred</div>;
  // }

  // if (!data) return;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Body>
      <Header>
        <ImageContainer>
          <Image
            src={backArrow}
            width={44}
            height={44}
            alt="뒤로가기"
            onClick={handleGoBack}
          />
        </ImageContainer>
        <Title>북토크 상세정보</Title>
      </Header>
      {/* <hr style={{ borderTop: '1px solid #F6F7FA' }} /> */}
      <DetailImg>
        <DetailImageContainer
          src={data?.booktalk_image_url}
          alt="북토크 상세 이미지"
        />
      </DetailImg>
      <div>
        {/* {filteredData.map((data) => {
        return ( */}
        <BTInfo
          // key={data?.id}
          // booktalk_image_url={data?.booktalk_image_url}
          title={data?.title}
          author={data?.author}
          bookCategory={data?.bookCategory}
          book={data?.book}
          startDate={data?.startDate}
          endDate={data?.endDate}
          participant={data?.participant}
          participationFee={data?.participationFee}
          preliminaryInfo={data?.preliminaryInfo}
          description={data?.description}
          placeName={data?.placeName}
          placeAddress={data?.placeAddress}
        />
      </div>
      <CheckBox booktalk_id={id?.booktalkId} />
    </Body>
  );
}

export default BTDetail;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};

  /* border: 1px solid ${({ theme }) => theme.colors.gray11}; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  position: fixed;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  top: 0;

  background-color: ${({ theme }) => theme.colors.white};
`;

const DetailImg = styled.div`
  /* 이미지 가운데 정렬 위해 수정했어요!*/

  display: flex;
  justify-content: center;
  margin-top: 6.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.9rem;
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  cursor: pointer;

  img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};

  margin-right: 12.8rem;
`;

const DetailImageContainer = styled.img`
  width: 18.4rem;
  height: 18.4rem;
`;
