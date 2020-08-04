import React, { Component } from "react";
import "./assets/css/style.scss";

import ajax from "@fdaciuk/ajax";
import Content from "./components/content";

class App extends Component {
  constructor () {
    super()
    this.state ={
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e){
      const value = e.target.value
      const keyCode = e.which || e.keyCode // pega a tecla digitada. O enter é 13.
      const ENTER = 13
      if(keyCode === 13){
       ajax().get(`https://api.github.com/users/${value}`).then((result) => {
         this.setState({
          userinfo:{
            username:result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
         })
       })
      }
      //console.log('change', e.target.value)}
  }

  render() {
    return (
      <Content  userinfo={this.state.userinfo} 
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      />
    )
  }
}

export default App;
