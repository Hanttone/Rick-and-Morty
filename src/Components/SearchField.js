import styled from "styled-components/macro";

export default function SearchField({ onCreateSearch, onShowAll }) {
  const searchHandler = (event) => {
    event.preventDefault();

    onCreateSearch(event.target.characterinput.value);

    event.target.reset();
  };

  const handleShowAll = () => {
    onShowAll();
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
        <div className="flex">
          <button>Search</button>
          <button onClick={handleShowAll}>Show all</button>
        </div>
      </form>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    label {
      padding: 0;
      margin: 0;
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
