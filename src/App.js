import GlobalStyles from "./GlobalStyles";
import styled from "styled-components/macro";
import CharacterCard from "./Components/CharacterCard";
import { useState, useEffect } from "react";
import SearchField from "./Components/SearchField";
import getCharacterPages from "./services/getCharacterPages";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState([]);

  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (cardId) => {
    const characterToAdd = characters.find(
      (character) => character.id === cardId
    );

    const checkForBookmark = bookmarks.includes(characterToAdd);

    console.log("checkForBookmaks", checkForBookmark);

    if (checkForBookmark === false) {
      setBookmarks([...bookmarks, characterToAdd]);
    } else {
    }
  };

  const removeFromBookmark = (cardId) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== cardId
    );

    setBookmarks(updatedBookmarks);
  };

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
      {bookmarks.map((bookmark) => {
        return (
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(100,100,100, 0.3)",
              alignItems: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <button
              style={{ width: "10px", fontSize: "6px" }}
              onClick={() => removeFromBookmark(bookmark.id)}
            >
              X
            </button>
            <p style={{ color: "white", fontSize: "11px" }}>{bookmark.name}</p>
            <img src={bookmark.image} width="40px" alt="" />
          </div>
        );
      })}
      {search.map(({ image, name, status, species, location, origin, id }) => (
        <CharacterCard
          imgUrl={image}
          name={name}
          status={status}
          species={species}
          location={location.name}
          origin={origin.name}
          addBookmark={() => addBookmark(id)}
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