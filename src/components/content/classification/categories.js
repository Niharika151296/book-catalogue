import React from 'react';
import { connect } from 'react-redux';
import BookGrid from '../../books/bookGrid';
import '../../books/books.css';
import { changeRoute } from '../../../redux/actions/books';


const Categories = ({bookList,category , listView}) => {
  
    

    let books;
    if(bookList.length>0){
    books = bookList.filter(b => {
        return (b.categories.includes(category))
      
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



export default connect(mapStateToProps)(Categories)