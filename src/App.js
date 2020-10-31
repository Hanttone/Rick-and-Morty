import GlobalStyles from "./GlobalStyles";
import styled from "styled-components/macro";
import CharacterCard from "./Components/CharacterCard";
import { useState, useEffect } from "react";
import SearchField from "./Components/SearchField";
import getCharacterPages from "./services/getCharacterPages";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getCharacterPages().then(chars => setCharacters(chars))
  }, []);

  const onCreateSearch = (searchValue) => {
    const searchResponse = characters.filter((char) =>
      char.name.toUpperCase().includes(searchValue.toUpperCase())
    );

    setSearch(searchResponse);
  };

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