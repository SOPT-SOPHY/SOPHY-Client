/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import theme from '../styles/theme';
import { PinIcon, PointIcon, ScheduleIcon } from '../assets/icon';

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

export default class SimpleSlider extends Component {
  render() {
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
      <Container>
        <StyledSlider {...settings}>
          <ImageContainer>
            <SlideCard>
              <SlideTitle>철학 어디까지 알고있니?</SlideTitle>
              <SlideContent>
                <Image
                  src={ScheduleIcon}
                  alt="달력 모양 아이콘"
                  style={{ marginRight: '0.4rem' }}
                />
                2023.08.12 <Dot /> 16시~17시
              </SlideContent>
              <SlideContent>
                <Image
                  src={PointIcon}
                  alt="화살표 모양 아이콘"
                  style={{ marginRight: '0.4rem' }}
                />
                홈플러스 문화센터
              </SlideContent>
              <SlideContent>
                <Image
                  src={PinIcon}
                  alt="핀 모양 아이콘"
                  width={18}
                  height={18}
                  style={{ marginRight: '0.4rem' }}
                />
                경기도 의정부시 금오동
              </SlideContent>
            </SlideCard>
          </ImageContainer>
          <ImageContainer>
            <SlideCard>
              <SlideTitle>철학 어디까지 알고있니?</SlideTitle>
              <SlideContent>
                <Image
                  src={ScheduleIcon}
                  alt="달력 모양 아이콘"
                  style={{ marginRight: '0.4rem' }}
                />
                2023.08.12 <Dot /> 16시~17시
              </SlideContent>
              <SlideContent>
                <Image
                  src={PointIcon}
                  alt="화살표 모양 아이콘"
                  style={{ marginRight: '0.4rem' }}
                />
                홈플러스 문화센터
              </SlideContent>
              <SlideContent>
                <Image
                  src={PinIcon}
                  alt="핀 모양 아이콘"
                  width={18}
                  height={18}
                  style={{ marginRight: '0.4rem' }}
                />
                경기도 의정부시 금오동
              </SlideContent>
            </SlideCard>
          </ImageContainer>
          <ImageContainer>
            <SlideCard>
              <SlideTitle>철학 어디까지 알고있니?</SlideTitle>
              <SlideContent>
                <Image
                  src={ScheduleIcon}
                  alt="달력 모양 아이콘"
                  style={{ marginRight: '0.4rem' }}
                />
                2023.08.12 <Dot /> 16시~17시
              </SlideContent>
              <SlideContent>
                <Image
                  src={PointIcon}
                  alt="화살표 모양 아이콘"
                  style={{ marginRight: '0.4rem' }}
                />
                홈플러스 문화센터
              </SlideContent>
              <SlideContent>
                <Image
                  src={PinIcon}
                  alt="핀 모양 아이콘"
                  width={18}
                  height={18}
                  style={{ marginRight: '0.4rem' }}
                />
                경기도 의정부시 금오동
              </SlideContent>
            </SlideCard>
          </ImageContainer>
        </StyledSlider>
      </Container>
    );
  }
}
