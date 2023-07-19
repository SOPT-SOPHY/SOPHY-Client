export const getCategory = (category: string) => {
  let CTGR = '';
  switch (category) {
    case '인문':
      CTGR = 'HUMANITIES';
      break;
    case '문학':
      CTGR = 'LITERATURE';
      break;
    case '사회':
      CTGR = 'SOCIETY';
      break;
    case '에세이':
      CTGR = 'ESSAY';
      break;
    case '예술':
      CTGR = 'ART';
      break;
    case '과학':
      CTGR = 'SCIENCE';
      break;
    case '육아':
      CTGR = 'PARENTING';
      break;
    case '일상/취미':
      CTGR = 'DAILY_HOBBY';
      break;
    case '어린이':
      CTGR = 'CHILDREN';
      break;
    case '청소년':
      CTGR = 'YOUTH';
      break;
    case 'IT/컴퓨터':
      CTGR = 'IT_COMPUTER';
      break;
    case '자기계발':
      CTGR = 'SELF_DEVELOPMENT';
      break;
    case '건강/요리':
      CTGR = 'HEALTH_COOKING';
      break;
    case '여행':
      CTGR = 'TRAVEL';
      break;
    case '기타':
      CTGR = 'ETC';
      break;
    default:
  }
  return CTGR;
};
export const getPreInfo = (preinfo: string) => {
  let PREINFO = '';
  switch (preinfo) {
    case '미리 읽어와주세요':
      PREINFO = 'PRE_READING';
      break;
    case '발췌문을 드려요':
      PREINFO = 'PROVIDE_EXCERPT';
      break;
    case '편하게 와주세요':
      PREINFO = 'COMFORTABLE_COMING';
      break;
    case '질문을 준비해주세요':
      PREINFO = 'PREPARE_QUESTION';
      break;
    default:
  }
  return PREINFO;
};
