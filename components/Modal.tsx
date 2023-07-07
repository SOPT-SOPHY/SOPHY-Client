import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface ModalProps {
  onClose?: () => void;
  open?: boolean;
}

function Modal({ onClose }: ModalProps) {
  const [selectedDong, setSelectedDong] = useState<string[]>([]);
  const history = useHistory();

  const handleDongClick = (dong: string) => {
    setSelectedDong((prevSelectedDongs) => [...prevSelectedDongs, dong]);
    console.log(selectedDong);
  };
  const handleNextClick = () => {
    history.push({
      pathname: '/region',
      state: { selectedDong },
    });
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </CloseButton>
        <Contents>
          <h1>의정부시</h1>
          <h2>동을 선택해주세요</h2>
          <ul>
            <li onClick={() => handleDongClick('신곡동')}>신곡동</li>
            <li onClick={() => handleDongClick('녹양동')}>녹양동</li>
            <li onClick={() => handleDongClick('호원동')}>호원동</li>
            <li onClick={() => handleDongClick('가능동')}>가능동</li>
            <li onClick={() => handleDongClick('의정부동')}>의정부동</li>
            <li onClick={() => handleDongClick('가능동')}>가능동</li>
          </ul>
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={handleNextClick}
            disabled={selectedDong.length === 0}>
            다음으로
          </Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #000000;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;
const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
export default Modal;
