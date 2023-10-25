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
import dayjs from 'dayjs';

/* keen slider */

export default function SimpleSlider(props: any) {
  const { data } = props;
  const router = useRouter();
  console.log(data?.startDate);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.35,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    dotsClass: 'dots_custom',
  };

  return (
    <ContainerWrapper>
      <Container>
        {data.length === 1 ? (
          <>
            {data?.map((item: any) => (
              <ImageContainer key={item} style={{ marginLeft: '2rem' }}>
                <SlideCard
                  onClick={() => router.push(`/booktalk/${item?.booktalkId}`)}>
                  <SlideTitle>{item.title}</SlideTitle>
                  <SlideContent>
                    <Image
                      src={ScheduleIcon}
                      alt="달력 모양 아이콘"
                      style={{ marginRight: '0.4rem' }}
                    />
                    {dayjs(item.startDate).year()}.
                    {dayjs(item.startDate).month() + 1}.
                    {dayjs(item.startDate).date()} <Dot />
                    {dayjs(item.startDate).hour()}시{' '}
                    {dayjs(item.startDate).minute()
                      ? `${dayjs(item.startDate).minute()}분`
                      : ''}
                    ~ {dayjs(item.endDate).hour()}시{' '}
                    {dayjs(item.endDate).minute()
                      ? `${dayjs(item.endDate).minute()}분`
                      : ''}
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
          </>
        ) : (
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
                    {dayjs(item.startDate).year()}.
                    {dayjs(item.startDate).month() + 1}.
                    {dayjs(item.startDate).date()} <Dot />
                    {dayjs(item.startDate).hour()}시{' '}
                    {dayjs(item.startDate).minute()
                      ? `${dayjs(item.startDate).minute()}분`
                      : ''}
                    ~ {dayjs(item.endDate).hour()}시{' '}
                    {dayjs(item.endDate).minute()
                      ? `${dayjs(item.endDate).minute()}분`
                      : ''}
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
        )}
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
`;

const StyledSlider = styled(Slider as any)`
  .slick-slide div {
    outline: none;
    margin-left: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 28rem;
  height: 20rem;
  margin-top: -2rem;
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
  margin-bottom: 0.2rem;
`;
