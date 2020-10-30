import GlobalStyles from "./GlobalStyles";
import styled from "styled-components/macro";
import CharacterCard from "./Components/CharacterCard";
import getData from "./services/getData";
import { useState,useEffect } from "react";
import SearchField from "./Components/SearchField";


function App() {     
  
  const [characters, setCharacters]=useState([])

  useEffect(() => {
    getData().then(data => setCharacters(data.results))
  }, [])
  console.log(characters)
  return (
    <AppWrapper>
      <GlobalStyles />
      <SearchField />
     {characters.map(({image, name, status, species, location, origin, id}) =>
      <CharacterCard imgUrl={image} name={name} status={status} species={species} location={location.name} origin={origin.name} key={id}/>
     )}
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  height: 100vh;
`;
