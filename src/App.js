import GlobalStyles from "./GlobalStyles";
import styled from "styled-components/macro";
import CharacterCard from "./Components/CharacterCard";
import { useState, useEffect } from "react";
import SearchField from "./Components/SearchField";
import getCharacterPages from "./services/getCharacterPages";
import Bookmark from "./Components/Bookmark";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState({
    response: [],
    failed: true,
  });

  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (cardId) => {
    const characterToAdd = characters.find(
      (character) => character.id === cardId
    );

    const checkForBookmark = bookmarks.includes(characterToAdd);

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
    getCharacterPages().then((chars) => setCharacters(chars));
  }, []);

  const onCreateSearch = (searchValue) => {
    const searchResponse = characters.filter((char) =>
      char.name.toUpperCase().includes(searchValue.toUpperCase())
    );

    if (searchResponse.length === 0) {
      alert("search failed!");
      setSearch({ failed: true, response: [] });
    } else {
      setSearch({ failed: false, response: searchResponse });
    }
  };

  const clearSearch = () => {
    setSearch({ failed: true, response: [] });
  };
  const showAll = () => {
    setSearch({ failed: false, response: [...characters] });
  };

  const bookmarksDisplay = bookmarks.map((bookmark) => {
    return (
      <Bookmark
        name={bookmark.name}
        image={bookmark.image}
        id={bookmark.id}
        key={bookmark.id}
        removeFromBookmark={() => removeFromBookmark(bookmark.id)}
      />
    );
  });

  const SearchDisplay = () => {
    const searchMap = search.response.map(
      ({ image, name, status, species, location, origin, id }) => (
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
      )
    );

    return searchMap;
  };
  return (
    <AppWrapper>
      <GlobalStyles />

      <Header>RICK AND MORTY</Header>
      {search.failed === true ? (
        <h1 className="search__error">Please enter something</h1>
      ) : (
        ""
      )}
      <SearchField
        onCreateSearch={onCreateSearch}
        handleClearSearch={clearSearch}
        onShowAll={showAll}
      />

      <BookmarksWrapper>{bookmarksDisplay}</BookmarksWrapper>

      <SearchDisplay />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  height: 100vh;

  .search__error {
    font-size: 1.6rem;
    color: white;
    text-align: center;
    text-shadow: 0px 0px 15px black;
  }
`;

const Header = styled.div`
  height: 53px;
  color: #a3c259;
  font-size: 2.5rem;
  text-align: center;
`;

const BookmarksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;
