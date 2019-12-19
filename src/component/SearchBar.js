import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    
  return (
    
    <div className="SearchBar">
      <form className="searchForm">
          <label htmlFor="bar" className="search-label">
              Search:
              <input type="text"
              placeholder="something"
              id="search-input"
              
              ></input>
            
              </label>
           <button type="submit"
           className="search-button"
           onClick={e => {this.props.handleSubmit(e)}}
            >Search</button>   
          </form>
      
    </div>
  );
  }
}

export default SearchBar;