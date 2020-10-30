import GlobalStyles from "./GlobalStyles";
import styled from "styled-components/macro";
import CharacterCard from "./Components/CharacterCard";

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <CharacterCard />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  height: 100vh;
`;
