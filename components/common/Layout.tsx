/* eslint-disable react/require-default-props */
import React from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 37.5rem;
`;
