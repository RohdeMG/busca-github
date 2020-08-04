import React from "react";
import PropTypes from 'prop-types';


const User = ({ userinfo }) => (
    <div className="user-info">
      <img
        className="user_image"
        src={userinfo.photo}
      />
      <h1>
        <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </h1>

      <div className="repos-info">
        <ul>
          <li>Repositórios: {userinfo.repos}</li>
          <li>Seguidores: {userinfo.followers}</li>
          <li>Seguindo: {userinfo.following}</li>
        </ul>
      </div>
    </div>
  )


  User.prototype = {
    userinfo: PropTypes.shape({
      userinfo: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      repos: PropTypes.number.isRequired,
      followers: PropTypes.string.isRequired,
      following: PropTypes.string.isRequired
    })
  }

export default User;
