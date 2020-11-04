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
  NavLink
} from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState({
    response: [],
    failed: true,
  });

  const [bookmarks, setBookmarks] = useState([]);

  function handleBookmarkChange(input) {
    setBookmarks([...bookmarks, input]);
  }


  /*function handleBookmarkDelete(input) {
    setBookmarks([...bookmarks.splice(0, input.id), ...bookmarks.splice(input.id+1)])
  } */

  useEffect(() => {
    getCharacterPages().then((chars) => setCharacters(chars));
  }, []);

  const onCreateSearch = (searchValue) => {
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

  // JSX START ##

  return (
    <>
    <Router>
    <nav className="navigation">
            <NavLink
              activeClassName="navigation--link__active"
              className="navigation--link"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="navigation--link__active"
              className="navigation--link"
              to="/search"
            >
              Search
            </NavLink>
            <NavLink
              activeClassName="navigation--link__active"
              className="navigation--link"
              to="/bookmarks"
            >
              Bookmarks
            </NavLink>
          </nav>
        <GlobalStyles />
        <AppWrapper>
        <Switch>
          <Route path="/search">
               <StickyHeader>
                <Header>RICK AND MORTY</Header>
                {search.failed === true ? (
                  <h1 className="search__error">Please enter something</h1>
                ) : (
                  ""
                )}
                <SearchField onCreateSearch={onCreateSearch} handleClearSearch={clearSearch} onShowAll={showAll} />

                {search.response.map(({ image, name, status, species, location, origin, id }) => (
                <CharacterCard imgUrl={image} name={name} status={status} species={species} location={location.name} origin={origin.name}
                 key={id} id={id} bookmarks={bookmarks} onBookmarkChange={handleBookmarkChange}/>))}

             </StickyHeader>
            </Route>
            <Route path="/bookmarks">
            </Route>
          </Switch>    
              
          </AppWrapper>
          
        
    </Router>
    </>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  height: auto;
  position: relative;
`;

const StickyHeader = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  background-image: linear-gradient(black, transparent);

  .search__error {
    font-size: 1.6rem;
    color: white;
    text-align: center;
    text-shadow: 0px 0px 15px black;
    margin-top: 15px;
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
