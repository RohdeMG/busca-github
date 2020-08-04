import React from "react";
import PropTypes from "prop-types";

const Repos = ({ className, title, inforepos }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {inforepos.map((repos) => (
          <li key={repos.link}>
            <a href={repos.link}>{repos.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
  Repos.defaultProps = {
      className: ''
  }
};


Repos.prototype = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    inforepos: PropTypes.array
}

export default Repos;
