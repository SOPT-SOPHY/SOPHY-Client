/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import theme from '../styles/theme';
import { PinIcon, PointIcon, ScheduleIcon } from '../assets/icon';

export default function SimpleSlider(props: any) {
  const { data } = props;
  const router = useRouter();
  console.log(data);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    dotsClass: 'dots_custom',
  };
  return (
    <ContainerWrapper>
      <Container>
        <StyledSlider {...settings}>
          {data?.map((item: any) => (
            <ImageContainer key={item}>
              <SlideCard
                onClick={() =>
                  router.push(`/booktalk/${item?.booktalkId}/detail`)
                }>
                <SlideTitle>{item.title}</SlideTitle>
                <SlideContent>
                  <Image
                    src={ScheduleIcon}
                    alt="달력 모양 아이콘"
                    style={{ marginRight: '0.4rem' }}
                  />
                  {item.startDate.slice(0, 4)}.{item.startDate.slice(5, 7)}.
                  {item.startDate.slice(8, 10)}
                  <Dot /> {item.startDate.slice(11, 13)}시~
                  {item.endDate.slice(11, 13)}시
                </SlideContent>
                <SlideContent>
                  <Image
                    src={PointIcon}
                    alt="화살표 모양 아이콘"
                    style={{ marginRight: '0.4rem' }}
                  />
                  {item.placeName}
                </SlideContent>
                <SlideContent>
                  <Image
                    src={PinIcon}
                    alt="핀 모양 아이콘"
                    width={18}
                    height={18}
                    style={{ marginRight: '0.4rem' }}
                  />
                  {item.placeAddress}
                </SlideContent>
              </SlideCard>
            </ImageContainer>
          ))}
        </StyledSlider>
      </Container>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  width: 37.5rem;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 40rem;
  margin-left: -3.8rem;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  width: 28rem;
  height: 20rem;
  display: flex;
  align-items: center;
`;

const SlideCard = styled.div`
  width: 28rem;
  height: 14.8rem;

  border-radius: 0.6rem;
  box-shadow: 0.1rem 0.18rem 1.2rem rgba(64, 119, 118, 12%);

  margin-top: 1.6rem;
`;

const SlideTitle = styled.div`
  color: ${theme.colors.gray01};
  ${theme.fonts.subhead3_semibold};

  padding-top: 2rem;
  margin-left: 1.6rem;
  margin-bottom: 1.6rem;
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;

  color: ${theme.colors.gray03};
  ${theme.fonts.body3_regular};
  margin-left: 1.4rem;
  margin-bottom: 0.8rem;
`;

const Dot = styled.span`
  width: 0.2rem;
  height: 0.2rem;

  border-radius: 100%;

  background-color: ${theme.colors.gray08};

  margin: 0 0.4rem;
`;
