import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // 모바일
      sm: 601, // 태블릿
      md: 769, // 노트북
      lg: 1025, // 작은 데스크탑
      xl: 1280, // 큰 데스크탑
    },
  },
});
