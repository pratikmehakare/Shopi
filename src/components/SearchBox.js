import React from 'react';

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-xs mx-auto my-4">
      <input
        type="text"
        placeholder="Search a product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-4 border border-black rounded-lg shadow-sm "
      />
    </div>
  );
};

export default SearchBox;
