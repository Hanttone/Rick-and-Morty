import GlobalStyles from "./GlobalStyles";
import styled from 'styled-components/macro'



function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <h1>Hello World</h1>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  height: 100vh;
`;