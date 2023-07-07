import React, { useState, useEffect, ChangeEvent } from 'react';
import useToast from '../hooks/useToast';
import Toast from './Toast';
import styled, { css } from 'styled-components';
import InactiveIcon from '../assets/icon/checkbox_inactive.svg';
import ActiveIcon from '../assets/icon/checkbox_active.svg';
import CheckIcon from '../assets/icon/check_icon.svg';
import Image from 'next/image';
import ic_check_active from '../assets/icon/ic_check_active.svg';
import ic_applied from '../assets/icon/ic_applied.svg';

interface Agreeds {
  infoConfirm: boolean;
  serviceConfirm: boolean;
}

interface AllAgreedButtonProps {
  onClick: () => void;
  checked: boolean;
}

const CheckBox = () => {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreeds, setAgreeds] = useState<Agreeds>({
    infoConfirm: false,
    serviceConfirm: false,
  });
  const [showError, setShowError] = useState(false);
  const toastHook = useToast();
  const { isOpenToast, msg, showToast } = toastHook;
  const [isApplied, setIsApplied] = useState(false);

  const handleAgreedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setAgreeds((prevAgreeds) => ({ ...prevAgreeds, [name]: checked }));

    const allChecked = Object.values({ ...agreeds, [name]: checked }).every(
      (value) => value === true,
    );
    setAllAgreed(allChecked);

    if (showError) {
      setShowError(false);
    }
  };

  const handleAllAgreedChange = () => {
    const checked = !allAgreed;
    setAgreeds({
      infoConfirm: checked,
      serviceConfirm: checked,
    });
    setAllAgreed(checked);

    if (showError) {
      setShowError(false);
    }
  };

  const handleToastClose = () => {
    setIsApplied(true);
  };

  const handleSubmit = () => {
    if (!allAgreed) {
      setShowError(true);
    } else {
      setShowError(false);
      showToast('신청이 완료되었습니다.');
      console.log('토스트 구현');
      handleToastClose(); // 토스트 메시지 닫고 신청완료로 전환
    }
  };

  useEffect(() => {
    // Save the state to localStorage
    localStorage.setItem('isApplied', JSON.stringify(isApplied));
  }, [isApplied]);

  useEffect(() => {
    // Retrieve the state from localStorage
    const storedIsApplied = localStorage.getItem('isApplied');
    if (storedIsApplied === 'true') {
      setIsApplied(true);
    }
  }, []);

  const AllAgreedButton: React.FC<AllAgreedButtonProps> = ({
    onClick,
    checked,
  }) => {
    const handleClick = () => {
      onClick();
    };

    return (
      <StyledButton type="button" onClick={handleClick} checked={checked}>
        <Content>네, 모두 동의합니다.</Content>
        {checked ? (
          <CheckIconWrapper>
            <Image
              src={ic_check_active.src}
              alt="체크 활성 아이콘"
              width={15.44}
              height={11.7}
            />
          </CheckIconWrapper>
        ) : (
          <CheckIconWrapper>
            <Image
              src={CheckIcon.src}
              alt="체크 비활성 아이콘"
              width={15.44}
              height={11.7}
            />
          </CheckIconWrapper>
        )}
      </StyledButton>
    );
  };

  return (
    <>
      {!isApplied && (
        <>
          <HorizontalLine />
          <ul>
            <li>
              <AllAgreedButton
                onClick={handleAllAgreedChange}
                checked={allAgreed}
              />
            </li>
            <li>
              <CheckContainer>
                <Input
                  type="checkbox"
                  id="agree_check_info"
                  name="infoConfirm"
                  required
                  checked={agreeds.infoConfirm}
                  onChange={handleAgreedChange}
                />
                <Label htmlFor="agree_check_info">
                  북토크 정보 및 장소를 확인하였습니다.
                </Label>
              </CheckContainer>
            </li>
            <li>
              <CheckContainer>
                <Input
                  type="checkbox"
                  id="agree_check_service"
                  name="serviceConfirm"
                  required
                  checked={agreeds.serviceConfirm}
                  onChange={handleAgreedChange}
                />
                <Label htmlFor="agree_check_service">
                  사전 연락 없이 무단으로 불참할 경우 추후 서비스 이용에 제약이
                  있을 수 있음을 확인하였습니다.
                </Label>
              </CheckContainer>
            </li>
          </ul>
          {/* {showError && <p style={{ color: 'red' }}>모두 동의해주세요.</p>} */}
          {!isApplied && (
            <ApplyButtonStyling
              type="button"
              onClick={handleSubmit}
              disabled={!agreeds.infoConfirm || !agreeds.serviceConfirm}
              isactive={agreeds.infoConfirm && agreeds.serviceConfirm}>
              신청하기
            </ApplyButtonStyling>
          )}
        </>
      )}
      {isApplied && (
        <>
          <div style={{ position: 'relative' }}>
            {isOpenToast && <Toast msg={msg} onClose={handleToastClose} />}
            <SubmitButtonStyling disabled>
              신청완료
              <Image
                src={ic_applied.src}
                alt="신청완료 아이콘"
                width={24}
                height={24}
              />
            </SubmitButtonStyling>
          </div>
        </>
      )}
    </>
  );
};

const HorizontalLine = styled.hr`
  border-top: 1px solid #f6f7fa;
  margin-left: 2.4rem;
  margin-right: 2rem;
  margin-top: 1.9rem;
`;
const CheckIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.2rem;
`;

const StyledButton = styled.button<{ checked: boolean }>`
  width: 33.5rem;
  height: 4.4rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;

  border-radius: 6px;
  background: var(--gray-gray-12, #fafafc);
  border: none;

  ${CheckIconWrapper} {
    ${(props) => !props.checked && css``}
  }
`;

const Content = styled.label`
  display: flex;
  width: 12.2rem;
  height: 2.3rem;
  flex-shrink: 0;

  color: var(--gray-gray-02, #4f5357);
  /* subhead/subhead4_semibold */
  font-size: 15px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 2rem;
  margin-right: 2rem;
`;

const Input = styled.input`
  display: none;
  /* 체크박스의 모양을 아이콘으로 대체하기 위해 position을 사용 */
  + label {
    position: relative;
    padding-left: 3.2rem;
    cursor: pointer;
    margin-bottom: 1.3rem;
    text-align: left;
  }

  /* 체크박스 아이콘 */
  + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2.4rem;
    height: 2.4rem;
    background-color: transparent;
    border-radius: 4px;
  }

  /* 체크박스가 체크되었을 때 아이콘 스타일 변경 */
  /* &:checked + label:before {
    background-color: var(--blue-blue-02, #17d4d1);
    border-color: var(--blue-blue-02, #17d4d1);
  } */

  /* 체크박스 아이콘을 감싸는 라벨의 위치 조정 */
  &:checked + label:before {
    background-image: url(${ActiveIcon.src});
    background-repeat: no-repeat;
    background-position: center;
  }

  /* 체크박스가 체크되지 않은 상태일 때 아이콘 스타일 변경 */
  + label:before {
    background-image: url(${InactiveIcon.src});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Label = styled.label`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 33.5rem;

  color: var(--gray-gray-01, #36393c);

  /* body/body2_regular */
  font-size: 14px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const ApplyButtonStyling = styled.button<{ isactive: boolean }>`
  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 4.8rem;

  border-radius: 6px;
  background: var(--gray-gray-11, #f6f7fa);
  border: none;

  /* subhead/subhead3_semibold */
  font-size: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  ${(props) =>
    props.isactive &&
    css`
      /* 신청하기 버튼이 활성화된 상태일 때의 스타일 */
      background: var(--primary, #57bebc);
      color: var(--white, #fff);
    `}

  ${(props) =>
    !props.isactive &&
    css`
      /* 신청하기 버튼이 비활성화된 상태일 때의 스타일 */
      color: var(--gray-gray-07, #bdc5cc);
      cursor: not-allowed;
    `};
`;

const SubmitButtonStyling = styled.button`
  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 4.8rem;

  border-radius: 6px;
  background: var(--main-green-04, #cbebea);
  border: none;

  color: var(--main-green-08, #418f8d);
  font-size: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export default CheckBox;
