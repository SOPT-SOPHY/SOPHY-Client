/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import * as React from 'react';

type WhenProps = {
  children: React.ReactNode;
  isTrue?: boolean;
  limit?: number;
};

function RenderWhen({ limit, isTrue, children }: WhenProps) {
  const list: React.ReactNode[] = [];

  if (isTrue !== true) {
    return null;
  }

  React.Children.map(children, (child: any) => {
    const { isTrue: isChildTrue } = child?.props || {};

    // limit 가 undefined 일 시 조기 리턴
    if (!limit) return;

    if (isChildTrue === true && list.length < limit) {
      list.push(child);
    }
  });

  return <>{list}</>;
}

RenderWhen.defaultProps = {
  limit: 1,
  isTrue: true,
};

RenderWhen.If = ({ children, isTrue }: any) => children;

export default RenderWhen;
