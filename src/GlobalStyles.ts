import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap');
    font-family: 'Noto Sans KR', 'Encode Sans Expanded', sans-serif;
  }
`
export default GlobalStyles