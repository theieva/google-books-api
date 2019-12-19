import React, { Component } from 'react';
import SearchBar from './component/SearchBar';
import FilterList from './component/FilterList';
import BookList from './component/BookList';
import './App.css';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("search-input").value;
    this.processFetch(input);
  }  

  processFetch  = (input) => {
    const apiKey = 'AIzaSyBcW9UxQpoNzco9I4r99heXWBnW76YDo5E';
    const q = input;
    const myURL = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${apiKey}`

  fetch(myURL)
    .then(result => {
      return result.json();
    }).then(resultJson => {
      this.setState({
      books: resultJson.items
      })
      console.log(this.state.books);
  })
    .catch(error => console.log(error));
  }

  handlePrintTypeFilterChange = (e) => {
    const printType = e.target.value;
    if(printType === 'ALL'){
      return this.state.books
    } else {
      const filteredResult = this.state.books.filter(book => book.volumeInfo.printType === printType)
    //update state with the filtered result or add filterResults object to state
    this.setState({
      filteredResult: filteredResult,
    })
    }
  }

  render() {
  return (
    <div className="App">
      <header className="header">
        <h1>Google Book Search</h1>
      </header>
      <SearchBar
      handleSubmit = {this.handleSubmit}
      />
      <FilterList 
        printType={this.handlePrintTypeFilterChange}
      />
      <BookList 
        books={this.state.filteredResult ? this.state.filteredResult : this.state.books}
        />
    </div>
  );
  }
}

export default App;
