import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div>
            <input 
            type="search" 
            placeholder="Search Robot" 
            onChange={searchChange} 

            />
        </div>
    );
};

export default SearchBox;