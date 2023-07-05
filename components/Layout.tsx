/* eslint-disable react/require-default-props */
import React from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
  noMenuBar?: boolean;
  noFooter?: boolean;
}

function Layout(props: LayoutProps) {
  const { children, noHeader, noMenuBar, noFooter } = props;

  return (
    <LayoutWrapper>
      <ContentWrapper>
        {!noHeader && <div>헤더</div>}
        {!noMenuBar && <div>메뉴바</div>}
        {children}
        {!noFooter && <div>푸터</div>}
      </ContentWrapper>
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
