import styled from "styled-components/macro";
import PropTypes from "prop-types";

export default function CharacterCard() {
  return (
    <>
      <CharacterCardWrapper>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/8.jpeg"
          alt=""
        />
        <div className="characterCardContent">
          {" "}
          <h1>Morty</h1> <h2>Dead - Human</h2>
          <p>
            Last known loaction: <span>Citadellll</span>
          </p>
          <p>
            First seen in: <span>lmfösdmfödlmf</span>
          </p>
        </div>

        <button>Bookmark +</button>
      </CharacterCardWrapper>
    </>
  );
}

const CharacterCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  //grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;

  background-color: hsla(263, 79%, 33%, 0.9);

  color: white;
  border-radius: 20px;
  margin-top: 20px;

  -webkit-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 1.5rem;
    text-align: left;
    color: #a3c259;
    margin-bottom: 5px;
  }
  img {
    grid-column: 1;
    align-self: center;
    justify-self: stretch;
    width: 100%;

    border-radius: 20px 0 0 0;
    object-fit: cover;
  }
  div.characterCardContent {
    //grid-column: 1;
    align-self: center;
  }
  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    margin-top: 10px;
    color: #b0c384;
    font-size: 0.6rem;
  }
  span {
    font-weight: bold;
  }

  button {
    width: 100%;
    height: 30px;
    border: 0;

    font-size: 0.8rem;
    color: white;

    -webkit-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);

    border-radius: 0 0 15px 15px;
    border-top: 1px white dotted;
    grid-column: 1 / span 3;
    grid-row: 2;

    background-color: hsla(263, 79%, 33%, 0.9);

    :active {
      background-color: #b0c384;
    }
  }
`;
