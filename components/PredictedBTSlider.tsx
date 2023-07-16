/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from '../styles/theme';

const Container = styled.div`
  width: 100%;
  height: 30rem;
  /* margin-left: -3.1rem; */
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
  .slick-list {
    height: 18rem;
    padding: 0 2rem;
  }
`;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
  .title {
    font-size: 15px;
    font-weight: 700;
    margin-top: 0.8rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
  }
  .author {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${theme.colors.gray05};
    margin-top: 0.2rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
  }
`;
const ImageContainer = styled.div`
  width: 12.7rem;
  height: 10rem;
  background-color: ${theme.colors.gray12};
  border-radius: 1rem 1rem 0 0;
  cursor: pointer;
`;

const DdayContainer = styled.div`
  width: 12.7rem;
  height: 2.8rem;
  border-radius: 0 0 1rem 1rem;
  background-color: lightblue;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      arrows: false,
      // centerMode: false,
      dotsClass: 'dots_custom',
    };
    return (
      <Container>
        <StyledSlider {...settings}>
          <SliderItem>
            <ImageContainer />
            <DdayContainer>D-16</DdayContainer>
            <div className="title">서비스 기획의 첫걸음</div>
            <div className="author">강민지작가</div>
          </SliderItem>
          <SliderItem>
            <ImageContainer />
            <DdayContainer>D-16</DdayContainer>
            <div className="title">서비스 기획의 첫걸음</div>
            <div className="author">강민지작가</div>
          </SliderItem>
          <SliderItem>
            <ImageContainer />
            <DdayContainer>D-16</DdayContainer>
            <div className="title">서비스 기획의 첫걸음</div>
            <div className="author">강민지작가</div>s
          </SliderItem>
          <SliderItem>
            <ImageContainer />
            <DdayContainer>D-16</DdayContainer>
          </SliderItem>
          <SliderItem>
            <ImageContainer />
            <DdayContainer>D-16</DdayContainer>
          </SliderItem>
        </StyledSlider>
      </Container>
    );
  }
}
