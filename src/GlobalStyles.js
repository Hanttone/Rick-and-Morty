import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0 auto;
        font-size: 16px;
        font-family: monospace;
    }

    body {
        background-image: url("https://wallpaperaccess.com/full/401141.jpg");
        background-size: cover;
        height: 100vh;
        width: 100%;
    }

`;