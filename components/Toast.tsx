import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import toastIcon from '../assets/icon/ic_check_toast.svg';

interface ToastProps {
  msg: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ msg, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 1000); // 1초 후에 onClose 함수 호출하여 토스트 메시지 닫기
    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 제거
  }, [onClose]);
  return (
    <ToastMessage>
      {msg}
      <Image src={toastIcon} width={24} height={24} alt="토스트 아이콘" />
    </ToastMessage>
  );
};

export default Toast;

const ToastMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1.6rem;
  left: 2rem;
  width: 335px;
  height: 52px;
  flex-shrink: 0;

  z-index: 3;
  border-radius: 6px;
  opacity: 0.8999999761581421;
  background: var(--gray-gray-01, #36393c);

  color: var(--white, #fff);

  /* subhead/subhead3_semibold */
  font-size: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  img {
    margin-left: 0;
  }
`;
