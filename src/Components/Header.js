import styled from "styled-components/macro"

export default function Header () {
    return (
        <HeaderWrapper>
            <h1>RICK AND MORTY</h1>
            <p>Always hating it when you forget a charcater from Rick and Morty?</p>
            <p>Don't despair no more!</p>
            <p>With this handy app you can search and bookmark your favourite characters, so you will never forget them again.</p>
            <p>Click on "Search" at the bottom to get started.</p>
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`

h1 {
  height: 53px;
  color: #a3c259;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 10vh;
  font-weight: 500;
}

p {
    margin-bottom: 5vh;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 700;
    color: white;
    opacity: 1;
    z-index: 101;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
`;