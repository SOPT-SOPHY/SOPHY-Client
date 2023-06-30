import React, { useState, ChangeEvent } from 'react';

interface Agreeds {
  infoConfirm: boolean;
  serviceConfirm: boolean;
}

const CheckBox = () => {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreeds, setAgreeds] = useState<Agreeds>({
    infoConfirm: false,
    serviceConfirm: false,
  });
  const [showError, setShowError] = useState(false);

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

  const handleAllAgreedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setAgreeds({
      infoConfirm: checked,
      serviceConfirm: checked,
    });
    setAllAgreed(checked);

    if (showError) {
      setShowError(false);
    }
  };

  const handleSubmit = () => {
    if (!allAgreed) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <>
      <label>이용약관 동의</label>
      <ul>
        <li>
          <input
            type="checkbox"
            id="agree_check_all"
            name="agree_check_all"
            checked={allAgreed}
            onChange={handleAllAgreedChange}
          />
          <label htmlFor="agree_check_all">모두 동의합니다.</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="agree_check_info"
            name="infoConfirm"
            required
            checked={agreeds.infoConfirm}
            onChange={handleAgreedChange}
          />
          <label htmlFor="agree_check_info">
            북토크 정보 및 장소를 확인하였습니다.
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="agree_check_service"
            name="serviceConfirm"
            required
            checked={agreeds.serviceConfirm}
            onChange={handleAgreedChange}
          />
          <label htmlFor="agree_check_service">
            사전 연락 없이 무단으로 불참할 경우 추후 서비스 이용에 제약이 있을
            수 있음을 확인하였습니다.
          </label>
        </li>
      </ul>
      {showError && <p style={{ color: 'red' }}>모두 동의해주세요.</p>}
      <button onClick={handleSubmit}>신청하기</button>
    </>
  );
};

export default CheckBox;
