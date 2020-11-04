import {createGlobalStyle, keyframes} from 'styled-components';


export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: monospace;
    }

    body {
        background-image: url("https://wallpaperaccess.com/full/401141.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 100vh;
        width: 100%;
        transition: ease-in;
    }

`;
