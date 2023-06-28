import React, { useState } from 'react';

const index = () => {
  const [allAgreed, setAllAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);

  const handleAllAgree = () => {
    setAllAgreed(!allAgreed);
    setTermsAgreed(!allAgreed);
    setPrivacyAgreed(!allAgreed);
    setMarketingAgreed(!allAgreed);
  };

  const handleTermsAgree = () => {
    setTermsAgreed(!termsAgreed);
    setAllAgreed(false);
  };

  const handlePrivacyAgree = () => {
    setPrivacyAgreed(!privacyAgreed);
    setAllAgreed(false);
  };

  const handleMarketingAgree = () => {
    setMarketingAgreed(!marketingAgreed);
    setAllAgreed(false);
  };

  return (
    <div>
      <div>이메일</div>
      <input placeholder="이메일을 입력해주세요" />
      <button>중복확인</button>
      <div>비밀번호</div>
      <input placeholder="비밀번호를 입력해주세요" />
      <div>비밀번호 확인</div>
      <input placeholder="비밀번호를 다시 입력해주세요" />
      <div>이름</div>
      <input placeholder="이름을 입력해주세요" />
      <div>휴대전화 번호</div>
      <input placeholder="번호를 입력해주세요" />
      <div>
        <label>
          <input type="radio" checked={allAgreed} onClick={handleAllAgree} />
          모두 동의합니다
        </label>
        <div>
          <label>
            <input
              type="radio"
              checked={termsAgreed}
              onClick={handleTermsAgree}
            />
            이용약관 동의
          </label>
          <label>
            <input
              type="radio"
              checked={privacyAgreed}
              onClick={handlePrivacyAgree}
            />
            개인정보 취급방침 동의
          </label>
          <label>
            <input
              type="radio"
              checked={marketingAgreed}
              onClick={handleMarketingAgree}
            />
            마케팅 정보 수신 동의
          </label>
        </div>
      </div>
    </div>
  );
};

export default index;
