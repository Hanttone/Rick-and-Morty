import styled from "styled-components/macro";
import { useState } from 'react';

export default function Bookmark() {

  /*const [bookmarklog, setBookmarklog] = useState([]
    )
  
    function handleChange() {
      setBookmarklog(bookmarInput)
    }*/

  /* const removeFromBookmark = (cardId) => {
    const updatedBookmarks = bookmarInput.filter(
    (bookmark) => bookmark.id !== cardId);
    onBookmarkDelete(updatedBookmarks); 
  };*/

  return ( 
    <div>
    
    <BookmarkItem>
      
    </BookmarkItem>
    </div>
  );
}

const BookmarkItem = styled.div`
  background-color: hsla(263, 79%, 33%, 0.8);
  position: relative;
  padding: 5px;

  margin: 20px;
  color: white;

  .wrapper {
    max-width: 180px;
  }

  button {
    position: absolute;
    right: 0;

    top: 0;

    padding: 5px;
    font-size: 1rem;
    margin: 5px;
    background-color: #a3c259;
    border: 0;
    -webkit-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);
  }
`;

/*
{bookmarInput.length === 0 ? (
    <h1 className="search__error">no bookmarks yet</h1>
    ) : (
      <h1 className="search__error">Bookmarks:</h1>
    )}

{bookmarInput.map(bookmark => { 
        return (
        <div className="wrapper">
        <img src={bookmarInput.image} width="70px" alt="" />
        <p>{bookmarInput.name}</p>
        <button>X</button>)
        </div>)})} */