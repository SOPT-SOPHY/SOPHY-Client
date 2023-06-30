import React from 'react';
import styled from 'styled-components';

interface ToastProps {
  msg: string;
}

const Toast = ({ msg }: ToastProps) => {
  return <ToastMessage>{msg}</ToastMessage>;
};

export default Toast;

const ToastMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 11px;
  min-width: 200px;
  transform: translate(-50%, -50%);
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 4px;
  border: 1px solid #000;
`;
