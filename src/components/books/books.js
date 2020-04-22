import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, changeRoute } from '../../redux/actions/books';
import BookGrid from './bookGrid';
import moment from 'moment';
import './books.css'
const Books = ({fetchBooks,bookList,sortType,data,listView,route,changeRoute}) => {
   console.log("sortType",sortType)
   if(data!==route)
    changeRoute(data)

  useEffect(()=>{
      fetchBooks()
    },[])

    let book;
    let bookPage;
    let bookTitle;
    let bookDate;
    let books;

    if(bookList!==undefined && data==="home")
    {
      console.log("re-render")
      books=bookList
    }
    else if(bookList!==undefined && data==='favourite'){
      books = bookList.filter(b => {
        return (b.isFavourite===true)
      })
    }
    
    if(bookList!==undefined && sortType==='' ){
      book = books
      .map(b=>(<BookGrid key={b.id} bookDetail={b}/>))
    }
   else if(bookList!==undefined && sortType==="pageCount"){
       bookPage =books.sort((a, b) => {
        if (a.pageCount < b.pageCount) return -1;
        if (a.pageCount > b.pageCount) return 1;
        return 0;
      });
      book = bookPage
      .map(b=>(<BookGrid key={b.id} bookDetail={b}/>))
    }

    else  if(bookList!==undefined && sortType==="title"){
      bookTitle =books.sort((a, b) => {
       if (a.title < b.title) return -1;
       if (a.title > b.title) return 1;
       return 0;
     });
     book = bookTitle
     .map(b=>(<BookGrid key={b.id} bookDetail={b}/>))
   }

   else  if(bookList!==undefined && sortType==="date" ){
      books = books.filter(b => {
      return (b.publishedDate!==null)
    })
    bookDate =books.sort((a, b) => {
      
      if (moment(a.publishedDate.$date,"YYYY-MM-DDTHH:mm:ss.ss").format("YYYY MM DD") < moment(b.publishedDate.$date,"YYYY-MM-DDTHH:mm:ss.ss").format("YYYY MM DD")) return -1;
      if (moment(a.publishedDate.$date,"YYYY-MM-DDTHH:mm:ss.ss").format("YYYY MM DD") > moment(b.publishedDate.$date,"YYYY-MM-DDTHH:mm:ss.ss").format("YYYY MM DD")) return 1;

       return 0;
    });
    book = bookDate
    .map(b=>(<BookGrid key={b.id} bookDetail={b}/>))
}

    else
      book="Loading"

    return(
    <div className={listView===false?"cards":null} >{book}</div>
    )
}

const mapStateToProps = (state) => {
  const {bookList,sortType,listView,route} = state.book
    return{
       bookList,
       sortType,
       listView,
       route
    }
  
}

const mapDispatchToProps = dispatch => {
    return{
        fetchBooks:()=>dispatch(fetchBooks()),
        changeRoute:(route)=>dispatch(changeRoute(route))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books)