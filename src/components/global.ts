import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    ${reset}

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    li {
        list-style: none;
    }

    body, input, button {
        font-family: "Roboto", sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }

    img {
        width: 100%;
    }

    a {
        cursor: pointer;
    }
`
