import styled from "styled-components/macro";
import { useState } from 'react';

export default function Bookmark({ characterInfo, bookmarksLog}) {

  const bookMarksToShow = []
  bookmarksLog.map(bookmark =>
  bookMarksToShow.push(...characterInfo.filter(char => char.id === bookmark)))
  console.log(bookMarksToShow)


    
  

  /* const removeFromBookmark = (cardId) => {
    const updatedBookmarks = bookmarInput.filter(
    (bookmark) => bookmark.id !== cardId);
    onBookmarkDelete(updatedBookmarks); 
  };

{bookmarInput.length === 0 ? (
    <h1 className="search__error">no bookmarks yet</h1>
    ) : (
      <h1 className="search__error">Bookmarks:</h1>
    )}

 */

  return ( 
      <BookmarkItem>
        {bookMarksToShow.map(bookmark => {
            return (
              <div>
                <img src={bookmark.image} alt="" />
                <p>{bookmark.name}</p>
                <button>✘</button>
              </div>)})}
      </BookmarkItem>
  );
}

const BookmarkItem = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;


  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    background-color: hsla(263, 79%, 33%, 0.8);
    width: 100%;
    padding: 2%;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  p {
    width: fit-content;
    text-align: center;
  }

  img {
    margin-bottom: 3%;
    width: 130px;
    border-radius: 5px 0px;
  }

  button {
    position: absolute;
    left: 80%;
    top: 0;

    padding: 5px;
    font-size: 1rem;
    border-radius: 0px 0px 5px 5px;

    background-color: #a3c259;
    border: 0;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
  }
`;

