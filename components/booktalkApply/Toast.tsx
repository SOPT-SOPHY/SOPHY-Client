import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import toastIcon from '../../assets/icon/ic_check_toast.svg';

interface ToastProps {
  msg: string;
  onClose: () => void;
}

function Toast({ msg, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 1000); // 1초 후에 onClose 함수 호출 및 토스트 메시지 닫음
    return () => clearTimeout(timer); // 타이머 제거
  }, [onClose]);
  return (
    <ToastMessage>
      {msg}
      <Image src={toastIcon} width={24} height={24} alt="토스트 아이콘" />
    </ToastMessage>
  );
}

export default Toast;

const ToastMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  position: absolute;
  top: -1.6rem;
  left: 2rem;
  width: 335px;
  height: 52px;

  z-index: 3;

  ${({ theme }) => theme.fonts.subhead3_semibold};
  background-color: ${({ theme }) => theme.colors.gray01};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 0.6rem;
  opacity: 0.8999999761581421;

  img {
    margin-left: 0;
  }
`;
