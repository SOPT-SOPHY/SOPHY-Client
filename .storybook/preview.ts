import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../styles/theme';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: theme,
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export default preview;
