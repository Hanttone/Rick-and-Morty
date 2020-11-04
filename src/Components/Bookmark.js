import styled from "styled-components/macro";

export default function Bookmark({ characterInfo, bookmarksLog, onDeleteBookmark}) {

  let bookMarksToShow = []
  bookmarksLog.map(bookmark =>
  bookMarksToShow.push(...characterInfo.filter(char => char.id === bookmark)))

  function handleClick(id) {
    
    onDeleteBookmark(id)
  }

  return ( 
      <BookmarkItem>
        {bookMarksToShow.length === 0 ? (
    <h1 className="search__error">No bookmarks yet</h1>
    ) : (
      <h1 className="search__error">Bookmarks:</h1>
    )}
          {bookMarksToShow.map((bookmark) => {
              return (
                <div>
                  <img src={bookmark.image} alt="" />
                  <p>{bookmark.name}</p>
                  <button onClick={() => handleClick(bookmark.id)
                  }>✘</button>
                </div>)})}
      </BookmarkItem>
  );
}

const BookmarkItem = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(10, 1fr);
grid-gap: 15px;
width: 100%;

h1 {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  grid-column: span 2;
}

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
  -webkit-box-shadow: 0px 0px 27px 3px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 0px 27px 3px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 27px 3px rgba(0, 0, 0, 0.7);
}

p {
  width: fit-content;
  text-align: center;
}

img {
  margin-bottom: 3%;
  width: 130px;
  border-radius: 15px 0px;
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

