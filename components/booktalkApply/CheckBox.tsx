import React, { useState, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import InactiveIcon from '../../assets/icon/checkbox_inactive.svg';
import ActiveIcon from '../../assets/icon/checkbox_active.svg';
import CheckIcon from '../../assets/icon/check_icon.svg';
import icCheckActive from '../../assets/icon/ic_check_active.svg';
import { usePostBookTalkApply } from '../../hooks/queries/booktalk';
import theme from '../../styles/theme';
import { ShareIcon } from '../../assets/icon';
import BooktalkApplyingModal from '../booktalk/detail/BooktalkApplyingModal';
import useModal from '../../hooks/modal/useModal';
import { Router, useRouter } from 'next/router';
import Cookies from 'js-cookie';

interface Agreeds {
  infoConfirm: boolean;
  serviceConfirm: boolean;
}

interface AllAgreedButtonProps {
  onClick: () => void;
  checked: boolean;
}
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

function CheckBox(props: any) {
  const { booktalkId } = props;
  const [agreeds, setAgreeds] = useState<Agreeds>({
    infoConfirm: false,
    serviceConfirm: false,
  });
  const [isApplied, setIsApplied] = useState(false);
  const [applyingState, setApplyingState] = useState('');

  const { mutate } = usePostBookTalkApply();
  const { isModalOpened, handleModalOpen, handleModalClose } = useModal();

  const allAgreed = agreeds.infoConfirm && agreeds.serviceConfirm;

  const accessToken = Cookies.get('accessToken');
  const router = useRouter();

  const handleAllAgreedChange = () => {
    if (!allAgreed) {
      setAgreeds({ serviceConfirm: true, infoConfirm: true });
    } else {
      setAgreeds({ serviceConfirm: false, infoConfirm: false });
    }
  };

  const handleShare = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!isApplied && (
        <>
          <HorizontalLine />
          <AllAgreedButton
            onClick={handleAllAgreedChange}
            checked={allAgreed}
          />
          <CheckContainer>
            <Input
              type="checkbox"
              id="agree_check_info"
              name="infoConfirm"
              required
              checked={agreeds.infoConfirm}
              onClick={() =>
                setAgreeds({ ...agreeds, infoConfirm: !agreeds.infoConfirm })
              }
            />
            <Label htmlFor="agree_check_info">
              북토크 정보 및 장소를 확인하였습니다.
            </Label>
          </CheckContainer>
          <CheckContainer>
            <Input
              type="checkbox"
              id="agree_check_service"
              name="serviceConfirm"
              required
              checked={agreeds.serviceConfirm}
              onClick={() =>
                setAgreeds({
                  ...agreeds,
                  serviceConfirm: !agreeds.serviceConfirm,
                })
              }
            />
            <Label htmlFor="agree_check_service">
              사전 연락 없이 무단으로 불참할 경우 추후 서비스 이용에 제약이 있을
              수 있습니다.
            </Label>
          </CheckContainer>
          <BooktalkApplyAndShareWrapper>
            <BooktalkApplyButton
              applyingState={applyingState}
              onClick={() => {
                handleModalOpen();
              }}>
              신청하기
            </BooktalkApplyButton>
            <ShareButton
              onClick={() => {
                handleShare(location.href);
              }}>
              <Image src={ShareIcon} width={32} height={32} alt="" />
            </ShareButton>
          </BooktalkApplyAndShareWrapper>
        </>
      )}
      <BooktalkApplyingModal
        isModalOpened={isModalOpened}
        message={`북토크 참여를 신청하시겠어요?, 북토크 신청 취소를 원하실 경우 소피 공식 \n 인스타그램(@sophyinlocal)에 문의를 남겨주세요.`}
        confirmButton="확인"
        handleModalClose={handleModalClose}
        handleConfirm={() => {
          if (accessToken) {
            mutate({ booktalkId });
            router.push('/home');
          } else {
            alert('로그인 후 신청 가능합니다.');
            router.push('/auth/login');
          }
          handleModalClose();
        }}
      />
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

  cursor: pointer;

  ${CheckIconWrapper} {
    ${(props) => !props.checked && css``}
  }
`;

const Content = styled.label`
  display: flex;

  width: 12.2rem;
  height: 2.3rem;
  flex-shrink: 0;

  cursor: pointer;

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

const BooktalkApplyAndShareWrapper = styled.div`
  width: 33.5rem;
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 5.1rem;
`;

const BooktalkApplyButton = styled.div<{ applyingState: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26.5rem;
  height: 5.2rem;
  border-radius: 0.6rem;
  background-color: ${theme.colors.gray11};
  /* background-color: ${(props) => props.applyingState}; */
  color: ${(props) => props.applyingState};
  ${theme.fonts.subhead3_semibold};
  cursor: pointer;
`;

const ShareButton = styled.button`
  width: 5.9rem;
  height: 5.2rem;
  border-radius: 0.6rem; //todo: design
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.green02};
`;
