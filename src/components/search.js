import React from "react";
import PropTypes from "prop-types";


const Search = ( {handleSearch} ) => {
  return (
    <div className="search">
      <input type="search" onKeyUp={handleSearch} placeholder="Digite o nome do usuário" />
    </div>
  )
};

  Search.prototype = {
    handleSearch: PropTypes.func.isRequired
  }

export default Search;
