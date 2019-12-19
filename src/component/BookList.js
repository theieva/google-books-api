import React, { Component } from 'react';
import BookCard from "./BookCard";

class BookList extends Component {
  static defaultProps = {
    books: []
  }

  render() {
  return (
    <div className="BookList">
      {/* Maybe map through bookcard components? */}
      { this.props.books.slice(0,3).map(book => {
        return (
          <BookCard book={book} />
        )
      })}
    </div>
  );
  }
}

export default BookList;
