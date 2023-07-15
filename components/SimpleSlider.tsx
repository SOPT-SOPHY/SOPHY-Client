/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { HomeBannerImg } from '../assets/img';
import theme from '../styles/theme';

export default class SimpleSlider extends Component {
  render() {
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
      <Container>
        <StyledSlider {...settings}>
          <ImageContainer>
            <Image
              src={HomeBannerImg}
              alt="배너 이미지"
              width={313}
              height={84}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src={HomeBannerImg}
              alt="배너 이미지"
              width={313}
              height={84}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src={HomeBannerImg}
              alt="배너 이미지"
              width={313}
              height={84}
            />
          </ImageContainer>
        </StyledSlider>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 42rem;
  margin-left: -3.1rem;
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
    margin-top: 0.7rem;
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

const ImageContainer = styled.div``;
