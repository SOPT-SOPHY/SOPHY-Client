# 📚 소피 [SOPHY]
<p align="center">
  <img width="400" height=400" src="https://github.com/SOPT-SOPHY/SOPHY-Client/assets/86764406/4f0ab5c8-75a9-44d7-bf13-bbfd4cf065f8">
</p>

## 작가와 함께 하는 우리 동네 지적 대화 플랫폼 ‘소피’!

> **소피**에서는 책을 출판한 경험이 있는 작가를 직접 만나 이야기를 들을 수 있어요. 
바로 우리 동네에서 말이죠! 
작가의 입을 통해 듣는 세상의 다양한 이야기들은 우리에게 새로운 자극이 되고 세상을 보는 눈을 넓혀줄 거예요. 
책 한 권을 쓸 정도의 이야기를 갖고 있는 사람이라면 누구나 소피의 Teller 가 될 수 있답니다!
우리 지역에서 맞이할 새로운 나의 라이프 스타일, 궁금하지 않으신가요? 
소피와 함께 지역에서의 당신의 시간을 더 가치 있고 특별하게 만드세요!
> 

![Untitled (1)](https://github.com/SOPT-SOPHY/SOPHY-Client/assets/86764406/f3db156f-04b3-4925-b7b8-1ebf6b5dde43)


<br/>

## ✅ **소피의 핵심기능 4가지**

1️⃣ **작가의 북토크 개설 신청**

- Flow
    - 지역 선택 > 북토크 진행할 공간 선택 > 신청서 작성 > 신청 완료
- 세부 기능
    - 신청 완료 후 수정 / 삭제 가능
    - 신청서 작성 시, 마이페이지에 사전 등록한 도서 정보 불러오기 가능

2️⃣ **주민의 북토크 참여 신청**

- Flow
    - 지역 선택 > 진행 중인 북토크 선택 > 북토크 상세 정보 확인 > 신청서 작성 (회원의 경우만) > 신청 완료
- 세부 기능
    - 비회원은 신청서 작성 클릭 시 로그인 화면으로 Redirect

3️⃣ **작가, 주민의 북토크 기록 관리**

- 세부 기능
    - 주민
        - 예정된 북토크 확인
        - 참여 완료한 북토크 목록 확인
        - 참여한 북토크 도서 정보 확인 기능
    - 작가
        - 예정된 북토크 확인
            - 공간 매칭 전, 중, 후로 구분하여 확인 가능
            - 공간 매칭된 북토크라면, 청중 모집 전, 중, 후로 구분하여 확인 가능
        - 참여 완료한 북토크 목록 확인
        - 등록한 도서 관리 기능

4️⃣ **공간운영자의 공간 제공 (데모데이 이후 구현 예정)**

- Flow
    - 공간 정보 등록 > 작가의 공간대여 신청 수락 / 거절 > (수락의 경우) 매칭 완료
- 세부 기능
    - 작가에게 받은 신청 수락 / 거절 선택 가능
    - 공간에서 주최한 북토크 기록 관리
    - 공간 미매칭 작가에게 공간 대여 제안 가능
    

<br/>

## **🛠️** 기술 스택 및 사용 라이브러리

- React + Next.js
- TypeScript
- Recoil
- Axios
- React Query
- React Slick

<br/>

## 📂 폴더 구조

```bash
|-- 📁 assets
|-- 📁 atoms
|-- 📁 components
       |-- Layout.tsx
|-- 📁 hooks
|-- 📁 lib
|-- 📁 node_modules
|-- 📁 pages
       |-- 📁 auth
       |-- 📁 author
       |-- 📁 booktalkApply
       |-- 📁 home
       |-- 📁 mypage
       |-- _app.tsx
       |-- _document.tsx
|-- 📁 public
|-- 📁 src
|-- 📁 styles
       |-- global-style.ts
       |-- styled.d.ts
       |-- theme.ts
|-- 📁 types
|-- .babelrc
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- next-env.d.ts
|-- next.config.js
|-- package.json
|-- README.md
|-- tsconfig.json
|-- yarn.lock
```

<br/>

## ✨ OUR TEAM

| <img src="https://avatars.githubusercontent.com/u/86764406?v=4" width="40%"> | <img src="https://avatars.githubusercontent.com/u/49463954?v=4" width="70%"> | <img src="https://avatars.githubusercontent.com/u/91827379?v=4" width="40%"> | 
| :---: | :---: | :---: |
| <div align = "center"><b>현수</b></div> | <div align = "center"><b>보미</b></div> | <div align = "center"><b>예현</b></div>  | 
| [@borimong](https://github.com/borimong) | [@kwonET](https://github.com/kwonET) | [@yesongoget](https://github.com/yesongoget) | 
