import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
  noMenuBar?: boolean;
  noFooter?: boolean;
}

const Layout = (props: LayoutProps) => {
  const { children, noHeader, noMenuBar, noFooter } = props;

  return (
    <>
      {!noHeader && <div>헤더</div>}
      {!noMenuBar && <div>메뉴바</div>}
      {children}
      {!noFooter && <div>푸터</div>}
    </>
  );
};

export default Layout;
