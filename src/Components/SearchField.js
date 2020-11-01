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
      <div className="flex">
        <button onClick={searchHandler}>Search</button>
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
    background-color: #a3c259;
    border: 0;
    -webkit-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.5);
  }
  .flex {
    display: flex;
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
