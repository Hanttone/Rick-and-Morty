import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

export default function CharacterCard({
  bookmarkAdd,
  imgUrl,
  name,
  status,
  species,
  location,
  origin,
  id,
}) {
  let deadOrAlive = "";
  if (status.includes("Dead")) {
    deadOrAlive = "red";
  } else if (status.includes("Alive")) {
    deadOrAlive = "green";
  } else {
    deadOrAlive = "yellow";
  }

  function handleClick(event) {
    bookmarkAdd(event);
  }

  return (
    <CharacterCardWrapper>
      <div className="imageContainer">
        <img src={imgUrl} alt="" />
        <h2 style={{ color: `${deadOrAlive}` }}>
          {status} - {species}
        </h2>
      </div>
      <div className="characterCardContent">
        <h1>{name}</h1>
        <p>
          Location: <br></br>
          <span>{location}</span>
        </p>
        <p>
          Origin: <br></br>
          <span>{origin}</span>
        </p>
      </div>
      <button onClick={handleClick}>Bookmark +</button>
    </CharacterCardWrapper>
  );
}

const CharacterCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;

  background-color: hsla(263, 79%, 33%, 0.9);

  color: white;
  border-radius: 20px;
  margin-top: 20px;

  -webkit-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.8);

  div.imageContainer {
    position: relative;
  }

  h1 {
    font-size: 1.2rem;
    text-align: left;
    color: #a3c259;
    margin-bottom: 5px;
  }

  h2 {
    grid-column: 1;
    margin-left: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 7px;
    background-color: hsla(263, 79%, 33%, 0.9);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    font-weight: 400;
  }

  img {
    grid-column: 1;
    align-self: start;
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
    font-size: 0.9rem;
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
