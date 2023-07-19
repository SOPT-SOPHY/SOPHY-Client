/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { SophyStoryRomanceCard, SophyStoryMoneyCard } from '../assets/img';
import theme from '../styles/theme';

export default function SophyStorySlider() {
  // console.log(data);
  const settings = {
    dots: true,
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
          <ImageContainer>
            <Image
              src={SophyStoryRomanceCard}
              alt="로맨스 카드"
              width={303}
              height={323}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src={SophyStoryMoneyCard}
              alt="화폐 카드"
              width={303}
              height={323}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src={SophyStoryRomanceCard}
              alt="로맨스 카드"
              width={303}
              height={323}
            />
          </ImageContainer>
        </StyledSlider>
      </Container>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  width: 37.5rem;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Container = styled.div`
  width: 40rem;
  margin-left: -1.8rem;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    margin: auto 0;
    padding: 0;
    margin-top: 2.6rem;
  }
  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline;
    margin: 0 0.2rem;
    padding: 0;
  }
  .dots_custom li button {
    border: none;
    background: ${theme.colors.gray10};
    color: transparent;
    cursor: pointer;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 100%;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: ${theme.colors.primary};
    width: 1rem;
    height: 0.5rem;
    border-radius: 0.25rem;
  }
`;

const ImageContainer = styled.div`
  width: 30.3rem;
  height: 32.3rem;
  display: flex;
  align-items: center;
`;
