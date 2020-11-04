import styled from "styled-components/macro";
import { useState } from 'react';

export default function Bookmark({ image, name, id, characterInfo, addBookmark}) {

  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (cardId) => {
    const characterToAdd = characterInfo.find(
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

  return (
    <BookmarkItem>
      <div className="wrapper">
        <img src={bookmarks.image} width="70px" alt="" />
        <p>{bookmarks.name}</p>
      </div>
      <button onClick={removeFromBookmark}>X</button>
    </BookmarkItem>
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
