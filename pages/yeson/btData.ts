interface BTDataProps {
    id: number;
    title: string;
    writer: string;
    field: string;
    bookinfo: string;
    date: string;
    people: number;
    price: string;
    previnfo: string;
    introduction: string;
    spaceName: string;
    spaceAddress: string;
}


const BTData = [
    {
        id: 1,
        title: "강민지 작가와 함께하는 기획의 첫 걸음",
        writer: "강민지",
        field: "IT/컴퓨터",
        bookinfo: "서비스 기획자로 살아남기",
        date: "2023.07.21 14시-15시",
        people: 6,
        price: "무료",
        previnfo: "발췌문을 드려요",
        introduction: "서비스 기획 10년 차 강민지 작가의, 왕초보를 위한 서비스 기획 꿀팁 대방출! ~~한 사람들을 대상으로 ~~ 활동을 해왔던 작가는 이번 북토크에서 ~~를 하고자 합니다. ~~",
        spaceName: "의정부 미술도서관",
        spaceAddress: "경기도 의정부시 민락로 304-1",
    },
    {
        id: 2,
        title: "소피로운 하루 2",
        writer: "구경민",
        field: "IT/컴퓨터",
        bookinfo: "서비스 기획자로 살아남기",
        date: "2023.08.21 14시-15시",
        people: 5,
        price: "무료",
        previnfo: "발췌문을 드려요",
        introduction: "서비스 기획 10년 차 구경민 작가의, 왕초보를 위한 서비스 기획 꿀팁 대방출! ~~한 사람들을 대상으로 ~~ 활동을 해왔던 작가는 이번 북토크에서 ~~를 하고자 합니다. ~~",
        spaceName: "의정부 공공도서관",
        spaceAddress: "경기도 의정부시 의정부로 304-1",
    },
    {
        id: 3,
        title: "소피로운 하루 3",
        writer: "김민지",
        field: "IT/컴퓨터",
        bookinfo: "서비스 기획자로 살아남기",
        date: "2023.09.21 14시-15시",
        people: 4,
        price: "무료",
        previnfo: "발췌문을 드려요",
        introduction: "서비스 기획 10년 차 김민지 작가의, 왕초보를 위한 서비스 기획 꿀팁 대방출! ~~한 사람들을 대상으로 ~~ 활동을 해왔던 작가는 이번 북토크에서 ~~를 하고자 합니다. ~~",
        spaceName: "의정부 공공도서관",
        spaceAddress: "경기도 의정부시 의정부로 304-1",
    },
];

export default BTData;