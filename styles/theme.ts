const colors = {
  // blackOpacity 지우지 마세요!!
  blackOpacity70: '#111',
  blackOpacity80: '#112',
  primary: '#57BEBC',
  green01: '#FAFAFC',
  green02: '#eef9f8',
  green03: '#e6f5f5',
  green04: '#cbebea',
  green05: '#57bebc',
  green06: '#4eaba9',
  green07: '#469896',
  green08: '#418f8d',
  green09: '#347271',
  green10: '#275555',
  green11: '#1E4342',
  gray01: '#36393C',
  gray02: '#4F5357',
  gray03: '#7c8389',
  gray04: '#959ca4',
  gray05: '#959CA4',
  gray06: '#AFB8C1',
  gray07: '#bdc5cc',
  gray08: '#cdd2d8',
  gray09: '#dde0e4',
  gray10: '#ECEEF0',
  gray11: '#fafac',
  black: '#181818',
  white: '#ffffff',
  dangerRed: '#ec2d30',
  warningOrange: '#fe9b0e',
  successBlue: '#3a70e2',
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
  headline3_medium: FONT({ weight: 'medium', size: 2.2, lineHeight: 2.8 }),
  subhead1_bold: FONT({ weight: 'bold', size: 2, lineHeight: 2.6 }),
  subhead1_medium: FONT({ weight: 'medium', size: 2, lineHeight: 2.6 }),
  subhead2_bold: FONT({ weight: 'bold', size: 1.8, lineHeight: 2.2 }),
  subhead2_semibold: FONT({ weight: 'semibold', size: 1.8, lineHeight: 2.4 }),
  subhead2_medium: FONT({ weight: 'medium', size: 1.8, lineHeight: 2.4 }),
  subhead3_semibold: FONT({ weight: 'semibold', size: 1.6, lineHeight: 2.4 }),
  subhead4_bold: FONT({ weight: 'bold', size: 1.5, lineHeight: 2.4 }),
  subhead4_semibold: FONT({ weight: 'semibold', size: 1.5, lineHeight: 2.4 }),
  body1_medium: FONT({ weight: 'medium', size: 1.5, lineHeight: 2.4 }),
  body2_bold: FONT({ weight: 'bold', size: 1.4, lineHeight: 1.6 }),
  body2_medium: FONT({ weight: 'medium', size: 1.4, lineHeight: 2 }),
  body2_regular: FONT({ weight: 'regular', size: 1.4, lineHeight: 2 }),
  body3_medium: FONT({ weight: 'medium', size: 1.2, lineHeight: 1.6 }),
  body3_regular: FONT({ weight: 'regular', size: 1.2, lineHeight: 1.6 }),
  caption: FONT({
    weight: 'medium',
    size: 1,
    lineHeight: 1.6,
    letterSpacing: 0.04,
  }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
