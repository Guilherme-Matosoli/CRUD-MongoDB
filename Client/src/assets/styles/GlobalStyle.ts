import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 10px;
        font-family: 'Lato', sans-serif;
    }

    :root{
        --color-background: #EBEBEB;
        --color-primary: #A882DD;
        --color-primary-hover: #49416D;
    }

    @media(max-width: 950px){
        html{
            font-size: 9.5px;
        }
    }
`;