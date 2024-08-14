import { lighten, darken, readableColor } from 'polished';

export const theme = {
  colors: {
    primary: {
      main: '#227a88',
    },
    success: {
      main: '#005e0a',
      dark: '#00f71e',
    },
    text: {
      primary: '#424242',
      secondary: '#4e566d',
    },
    navbar: {
      main: '#1A5761',
      contrastText: 'white'
    },
  },
  sidebar: {
    backgroundColor: '#fafafa',
    width: '260px',
  },
  tocPanel: {
    width: '240px',
  },
  typography: {
    fontSize: '14px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontFamily: '"Source Sans Pro", sans-serif',
    headings: {
      fontWeight: '600',
    },
    heading2: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2a2b2e',
    },
    code: {
      fontFamily: '"Source Code Pro", sans-serif',
      color: '#e53935',
      backgroundColor: '#ededf2',
    },
  },
  codeBlock: {
    backgroundColor: '#fbfbfc',
    tokens: {},
  },
};