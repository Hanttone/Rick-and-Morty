import GlobalStyles from "./GlobalStyles";
import styled from "styled-components/macro";
import CharacterCard from "./Components/CharacterCard";
import getData from "./services/getData";
import getCharacterPages from "./services/getCharacterPages";
import { useState, useEffect } from "react";
import SearchField from "./Components/SearchField";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getData().then((data) => setCharacters(data.results));

    console.log("CHAR PAGES", getCharacterPages());
  }, []);
  console.log(characters);

  const onCreateSearch = (searchValue) => {
    const searchResponse = characters.filter((char) =>
      char.name.includes(searchValue)
    );
    console.log("########################### SEARCH RES", searchResponse);

    setSearch(searchResponse);
  };

  console.log("CHAR PAGES", getCharacterPages());

  return (
    <AppWrapper>
      <GlobalStyles />
      <Header>RICK AND MORTY</Header>
      <SearchField onCreateSearch={onCreateSearch} />
      {search.map(({ image, name, status, species, location, origin, id }) => (
        <CharacterCard
          imgUrl={image}
          name={name}
          status={status}
          species={species}
          location={location.name}
          origin={origin.name}
          key={id}
        />
      ))}
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  height: 100vh;
`;

const Header = styled.div`
  height: 53px;
  color: #a3c259;
  font-size: 2.5rem;
  text-align: center;
`;
