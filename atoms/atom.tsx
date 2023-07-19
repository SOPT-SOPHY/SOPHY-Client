// atom 선언
import { atom } from 'recoil';

export const modalOpen = atom<boolean>({
  key: 'modalOpen',
  default: false,
});

// 북토크 개설 신청 중
// 1. 지역 선택
export const selectedRegion = atom<string>({
  key: 'selectedRegion',
  default: '',
});
// 2. 공간 선택 | 공간 정보의 객체 리스트를 id, 즉 숫자로 정의한다고 가정
export const selectedSpace = atom<number>({
  key: 'selectedSpace',
  default: -1,
});

interface FormProps {
  member_id: number;
  place_id: number;
  booktalk_image_url: string | null;
  title: string;
  book_category: string;
  book_id: number;
  start_date: string;
  end_date: string;
  participant: number;
  participation_fee: number;
  preliminary_info: string;
  description: string;
}
// 3. 신청서 폼 관련 정보
export const completedForm = atom<FormProps>({
  key: 'completedForm',
  default: {
    member_id: 2,
    place_id: 1,
    booktalk_image_url: null,
    title: '사이보그가 되다',
    book_category: '',
    book_id: 4,
    start_date: '2023-08-01T18:00:00',
    end_date: '2023-08-01T19:00:00',
    participant: 20,
    participation_fee: 0,
    preliminary_info: '', // or "PROVIDE_EXCERPT"
    description:
      '2019년 오늘의 작가상, 2020년 문학동네 젊은작가상을 수상한 김초엽 작가의 북토크. 인간의 몸은 과학기술과 어떻게 만나야 할까? 김초엽 작가와 함께 하는 시간!',
  },
});

export const mypageSelectedSpaceState = atom<number | null>({
  key: 'mypageSelectedSpace',
  default: null,
});
