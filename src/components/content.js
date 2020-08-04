import React from "react";
import PropTypes from "prop-types";

import Search from "./search";
import User from "./user";
import Actions from "./actions";
import Repos from "./repos";

const Content = ( {userinfo, repos, starred, handleSearch} ) => {
    return (
        <div className="app">
        <Search  handleSearch={handleSearch} />
        {!!userinfo && <User userinfo={userinfo} />}
        {!!userinfo && <Actions />}

        {!!repos.length && <Repos
          className="repos"
          title="Repositórios:"
          inforepos={repos}
        />}

        {!!repos.length && <Repos
          className="starred"
          title="Favoritos:"
          inforepos={starred}
        />}
      </div>
    ) 
}

Content.prototype = {
    userinfo: PropTypes.object, 
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
  }

export default Content;
