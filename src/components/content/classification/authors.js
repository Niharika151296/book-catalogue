import React from 'react';
import { connect } from 'react-redux';
import BookGrid from '../../books/bookGrid';
import '../../books/books.css';

import { fetchBooks } from '../../../redux/actions/books';

const Authors = ({bookList,author,listView,fetchBooks}) => {
    
    let books;
    if(bookList.length>0){
    books = bookList.filter(b => {
        return (b.authors.includes(author))
      })      
    }

    let bookCard;
    bookCard =  books.map(b=>(<BookGrid key={b.id} bookDetail={b}/>))

return(
    <div className={!listView?"cards":null}>{bookCard}</div>
    
)
}


const mapStateToProps = state => {
    const {bookList,listView,route} = state.book
    return{
        bookList,
        listView,
        route
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchBooks:()=>dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Authors)