/* eslint-disable camelcase */
import React, { useState, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import useToast from '../../hooks/toast/useToast';
import Toast from './Toast';
import InactiveIcon from '../../assets/icon/checkbox_inactive.svg';
import ActiveIcon from '../../assets/icon/checkbox_active.svg';
import CheckIcon from '../../assets/icon/check_icon.svg';
import icCheckActive from '../../assets/icon/ic_check_active.svg';
import icApplied from '../../assets/icon/ic_applied.svg';
// import { usePostBookTalkApply } from '../../hooks/queries/booktalk';
// import Cookies from 'js-cookie';
interface Agreeds {
  infoConfirm: boolean;
  serviceConfirm: boolean;
}

interface AllAgreedButtonProps {
  onClick: () => void;
  checked: boolean;
}

// interface BooktalkApplyProps {
//   data: {
//     booktalk_id: number;
//     member_id: number;
//   };
// }

function AllAgreedButton({ onClick, checked }: AllAgreedButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledButton type="button" onClick={handleClick} checked={checked}>
      <Content>네, 모두 동의합니다.</Content>
      {checked ? (
        <CheckIconWrapper>
          <Image
            src={icCheckActive.src}
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
}

function CheckBox() {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreeds, setAgreeds] = useState<Agreeds>({
    infoConfirm: false,
    serviceConfirm: false,
  });
  const [showError, setShowError] = useState(false);
  const toastHook = useToast();
  const { isOpenToast, toastMsg, showToast } = toastHook;
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

  // const postBookTalkApplyMutation = usePostBookTalkApply();

  const handleSubmit = async () => {
    if (!allAgreed) {
      setShowError(true);
    } else {
      setShowError(false);
      try {
        // const response = await postBookTalkApplyMutation.mutateAsync({
        //   booktalk_id: 1,
        //   member_id: 1,
        // });

        // if (response.data) {
        //   const { booktalk_id, member_id } = response.data ?? {}; //response.data가 존재하면 그 값을 사용하고, 존재하지 않으면 빈 객체({})를 사용
        //   console.log(response.data);

        //   // Cookies.set('memberId', member_id.toString());
        //   // Cookies.set('booktalkId', booktalk_id.toString());

        showToast('신청이 완료되었습니다.');
        handleToastClose(); // 토스트 메시지 닫고 신청완료로 전환
        // } else {
        //   console.log('response.data가 없음');
        // }
      } catch (error) {
        console.error('북토크 신청 에러 발생', error);
      }
    }
  };

  useEffect(() => {
    // 신청 완료 상태를 로컬 스토리지에 저장
    localStorage.setItem('isApplied', JSON.stringify(isApplied));
  }, [isApplied]);

  useEffect(() => {
    // 로컬 스토리지로부터 상태 검색
    const storedIsApplied = localStorage.getItem('isApplied');
    if (storedIsApplied === 'true') {
      setIsApplied(true);
    }
  }, []);

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
        <div style={{ position: 'relative' }}>
          {isOpenToast && <Toast msg={toastMsg} onClose={handleToastClose} />}
          <SubmitButtonStyling disabled>
            신청완료
            <Image
              src={icApplied.src}
              alt="신청완료 아이콘"
              width={24}
              height={24}
            />
          </SubmitButtonStyling>
        </div>
      )}
    </>
  );
}

export default CheckBox;

const HorizontalLine = styled.hr`
  margin-top: 1.9rem;
  margin-left: 2.4rem;
  margin-right: 2rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray11};
`;

const CheckIconWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1.2rem;
`;

const StyledButton = styled.button<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 4.4rem;
  flex-shrink: 0;

  margin-top: 3.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.green01};
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

  ${({ theme }) => theme.fonts.subhead4_semibold};
  color: ${({ theme }) => theme.colors.gray02};
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

  /* 체크되었을 때 체크박스 아이콘 스타일 */
  &:checked + label:before {
    background-image: url(${ActiveIcon.src});
    background-repeat: no-repeat;
    background-position: center;
  }

  /* 체크박스가 체크되지 않은 상태일 때 아이콘 스타일 */
  + label:before {
    background-image: url(${InactiveIcon.src});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: 33.5rem;

  ${({ theme }) => theme.fonts.body2_regular};
  color: ${({ theme }) => theme.colors.gray01};
`;

const ApplyButtonStyling = styled.button<{ isactive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;

  margin-top: 3.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 4.8rem;

  ${({ theme }) => theme.fonts.subhead3_semibold};
  background-color: ${({ theme }) => theme.colors.gray11};

  border-radius: 0.6rem;
  border: none;

  ${(props) =>
    props.isactive &&
    css`
      /* 신청하기 버튼이 활성화된 상태일 때의 스타일 */
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    `}

  ${(props) =>
    !props.isactive &&
    css`
      /* 신청하기 버튼이 비활성화된 상태일 때의 스타일 */
      color: ${({ theme }) => theme.colors.gray07};
      cursor: not-allowed;
    `};
`;

const SubmitButtonStyling = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;

  margin-top: 3.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 4.8rem;

  ${({ theme }) => theme.fonts.subhead3_semibold};
  background-color: ${({ theme }) => theme.colors.green04};
  color: ${({ theme }) => theme.colors.green08};

  border-radius: 0.6rem;
  border: none;
`;
