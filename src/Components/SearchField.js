import styled from "styled-components/macro";

export default function SearchField({
  onCreateSearch,
  onShowAll,
  handleClearSearch,
}) {
  const searchHandler = (event) => {
    event.preventDefault();

    onCreateSearch(event.target.characterinput.value);

    event.target.reset();
  };

  return (
    <SearchWrapper>
      <form onSubmit={searchHandler}>
        <label htmlFor="characterinput">
          <input
            name="characterinput"
            type="text"
            placeholder="Search for character"
          />
        </label>
      </form>
      <div>
        <button onClick={onShowAll}>Show all</button>
        <button onClick={handleClearSearch}>Clear Search</button>
      </div>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 2vh;
  width: 90%;
  z-index: 999;

  label {
    padding: 0;
    margin: 0;

    input {
      width: 100%;
    }
  }

  button {
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    background-color: #a3c259;
    border: 0;
  }

  div {
    display: flex;
    justify-content: center;
  }

  input {
    height: 30px;
    padding: 10px;
    text-align: center;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid white;
    margin: 10px 0;
  }
`;
