import styled from 'styled-components/macro';


export default function SearchField({lol}) {

    return (
        <SearchWrapper>
            <form onSubmit={lol}>
                <label htmlFor="characterinput">
                    <input name="characterinput" type="text" placeholder="Search for character"/>
                </label>
                <button>Search</button>
            </form>
        </SearchWrapper>
    )
    
}


const SearchWrapper = styled.div`

`;
