import GlobalStyles from "./GlobalStyles";
import styled from "styled-components/macro";
import CharacterCard from "./Components/CharacterCard";
import { useState, useEffect } from "react";
import SearchField from "./Components/SearchField";
import getCharacterPages from "./services/getCharacterPages";
import Bookmark from "./Components/Bookmark";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Header from "./Components/Header"

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState({ response: [], failed: true});

  useEffect(() => {
    getCharacterPages().then((chars) => setCharacters(chars));
  }, []);

  const [bookmarkIds, setBookmarks] = useState([]);

  function handleBookmarkChange(bookmarkId) {
    if (!bookmarkIds.includes(bookmarkId)) {
    setBookmarks([...bookmarkIds, bookmarkId]);
    }
  }

  function handleDeleteBookmark(indexDelete) {
    const indexToDelete = bookmarkIds.map(bookmark => bookmark).indexOf(indexDelete);
    const secondPart = bookmarkIds.splice(indexToDelete + 1)
    const firstPart = bookmarkIds.splice(0, indexToDelete)
    setBookmarks([...firstPart, ...secondPart])
  }

  function onCreateSearch(searchValue) {
    const searchResponse = characters.filter((char) =>
      char.name.toUpperCase().includes(searchValue.toUpperCase())
    );

    if (searchResponse.length === 0) {
      alert("nothing found!");
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

  return (
    <>
      <Router>
        <GlobalStyles />
        <AppWrapper>
          <Switch>
            <Route exact path="/">
              <Header></Header>
            </Route>
            <Route path="/search">
                <SearchField
                  onCreateSearch={onCreateSearch}
                  handleClearSearch={clearSearch}
                  onShowAll={showAll} />
                <CharCardWrapper>
                {search.response.map(
                  ({ image, name, status, species, location, origin, id }) => (
                    <CharacterCard
                      imgUrl={image}
                      name={name}
                      status={status}
                      species={species}
                      location={location.name}
                      origin={origin.name}
                      key={id}
                      id={id}
                      onBookmarkChange={handleBookmarkChange}
                    />
                  )
                )}
              </CharCardWrapper>
            </Route>
            <Route path="/bookmarks">
                <Bookmark characterInfo={characters} bookmarksLog={bookmarkIds} onDeleteBookmark={handleDeleteBookmark}/>
            </Route>
          </Switch>
          <FooterStyled>
              <nav>
              <NavLinkStyled
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLinkStyled>
              <NavLinkStyled
                activeClassName="active"
                to="/search"
              >
                Search
              </NavLinkStyled>
              <NavLinkStyled
                activeClassName="active"
                to="/bookmarks"
              >
                Bookmarks
              </NavLinkStyled>
            </nav>
        </FooterStyled>
        </AppWrapper>
      </Router>
    </>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CharCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  width: 100%;
  position: fixed;
  bottom: 8vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-left: 5%;
  padding-right: 5%;
`;

const FooterStyled = styled.footer`
position: fixed;
bottom: 0;
width: 100%;
display: flex;
justify-content: center;
background-color: hsla(263, 79%, 33%, 0.5);
z-index: 100;

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 8vh;
  }
`;


const NavLinkStyled = styled(NavLink)`
color: white;
text-decoration: none;
padding: 8px;
font-weight: 600;

&.active {
background-color: #a3c259;
color: black;
border-radius: 5px;
font-weight: 600;
}
`;