import React, { Component } from 'react';


class BookCard extends Component {
  render() {
  return (
    
    <div className="BookCard" key={this.props.book.accessInfo.id}>
      <h2 className="book-title">{this.props.book.volumeInfo.title}</h2>
      <div className="book-container">
          <div className="book-cover">
            <p><img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.volumeInfo.title}></img></p>
            </div>
          <div className="book-info">
              <p>Authors: {this.props.book.volumeInfo.authors}</p>
              <p>Price: Not Available</p>
              <p>Description: {this.props.book.volumeInfo.description}</p>
          </div>
      </div>
      
    </div>
  );
  }
}

export default BookCard;