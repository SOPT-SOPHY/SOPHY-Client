const colors = {
  // blackOpacity 지우지 마세요!!
  blackOpacity70: '#111',
  blackOpacity80: '#112',
  primary: '#57BEBC',
  green01: '#FAFAFC',
} as const;

interface Font {
  weight: string;
  size: number;
  lineHeight: number;
  letterSpacing?: number;
}

function FONT({ weight, size, lineHeight, letterSpacing }: Font): string {
  return `
      font-family: 'Pretendard-Regular';
      font-weight: ${weight};
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-style: normal;
      font-size: ${size}rem;
      line-height: ${lineHeight}rem;
      ${letterSpacing && `letter-spacing: -0.0${letterSpacing}rem;`}
    `;
}

const fonts = {
  display: FONT({ weight: 'bold', size: 3.2, lineHeight: 4 }),
  headline1: FONT({ weight: 'bold', size: 2.8, lineHeight: 3.6 }),
  headline2: FONT({ weight: 'bold', size: 2, lineHeight: 3.2 }),
  headline3_bold: FONT({ weight: 'bold', size: 2.2, lineHeight: 2.8 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
