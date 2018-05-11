import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import PictureList from './picture_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <PictureList />
      </div>
    );
  }
}
