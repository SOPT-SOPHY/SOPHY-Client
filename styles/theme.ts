const colors = {
  // blackOpacity 지우지 마세요!!
  blackOpacity70: '#111',
  blackOpacity80: '#112',
  primary: '#57BEBC',
  green01: '#FAFAFC',
} as const;

interface Font {
  weight: 300 | 400 | 500 | 600 | 700 | 800;
  size: number;
  lineHeight: number;
  letterSpacing?: number;
}

function FONT({ weight, size, lineHeight, letterSpacing }: Font): string {
  return `
      font-family: 'pretendard'
      font-weight: ${weight};
      font-size: ${size}rem;
      line-height: ${lineHeight}rem;
      ${letterSpacing && `letter-spacing: -0.0${letterSpacing}rem;`}
    `;
}

const fonts = {
  title1: FONT({ weight: 700, size: 4, lineHeight: 5.4 }),
  title2: FONT({ weight: 700, size: 3, lineHeight: 4.1 }),
  title3: FONT({ weight: 700, size: 2, lineHeight: 3.2 }),
  title4: FONT({ weight: 700, size: 2.6, lineHeight: 3.5 }),
  subtitle1: FONT({ weight: 500, size: 3, lineHeight: 5 }),
  title4Semibold: FONT({ weight: 600, size: 2, lineHeight: 2.7 }),
  title5Semibold: FONT({ weight: 600, size: 1.8, lineHeight: 2.5 }),
  body1: FONT({ weight: 400, size: 1.8, lineHeight: 3 }),
  body2: FONT({ weight: 400, size: 1.4, lineHeight: 1.9 }),
  body3: FONT({ weight: 500, size: 2.4, lineHeight: 3.3 }),
  body4: FONT({ weight: 500, size: 1.6, lineHeight: 3.8 }),
  body5: FONT({ weight: 700, size: 2.2, lineHeight: 3.0 }),
  body6: FONT({ weight: 500, size: 2.6, lineHeight: 3.5 }),
  body7: FONT({ weight: 500, size: 2.2, lineHeight: 3.0 }),
  body8: FONT({ weight: 600, size: 2.2, lineHeight: 3.8 }),
  caption: FONT({ weight: 400, size: 1.4, lineHeight: 3.2 }),
  caption1: FONT({ weight: 600, size: 1.8, lineHeight: 2.5 }),
  tooltip: FONT({ weight: 400, size: 1.2, lineHeight: 1.8, letterSpacing: 6 }),
  sizetag: FONT({ weight: 700, size: 1.6, lineHeight: 2.2 }),
  button1: FONT({ weight: 800, size: 4, lineHeight: 5.4 }),
  card1: FONT({ weight: 600, size: 1.6, lineHeight: 1.9 }),
  card2: FONT({ weight: 500, size: 1.4, lineHeight: 1.9 }),
  body2_DSB: FONT({ weight: 600, size: 1.4, lineHeight: 1.9 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
