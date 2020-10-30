import GlobalStyles from "./GlobalStyles";
import styled from "styled-components/macro";
import CharacterCard from "./Components/CharacterCard";
import getData from "./services/getData";
import { useState,useEffect } from "react";


function App() {     
  
  const [characters, setCharacters]=useState([])

  useEffect(() => {
    getData().then(data => setCharacters(data.results))
  }, [])
  console.log(characters)
  return (
    <AppWrapper>
      <GlobalStyles />
     {characters.map(character => <CharacterCard/>)}
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  height: 100vh;
`;
