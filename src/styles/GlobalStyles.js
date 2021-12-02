import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #F3F3F5;
    }

    html {
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyle;
