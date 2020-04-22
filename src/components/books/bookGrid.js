import React, { useState } from 'react';
import moment from 'moment';
import './books.css'
import { connect } from 'react-redux';
import { manipulateFavourite, setCurrentUser } from '../../redux/actions/books';
const BookGrid = ({listView,bookDetail,manipulateFavourite,setCurrentUser}) => {

   const addFav = (id,status) =>{
     manipulateFavourite(id,status)
   }

   const remove = (id,status) =>{
    manipulateFavourite(id,status)
}  

const handleUser = (currentUser) => {
    setCurrentUser(currentUser)
}

return ( 
        <div className={listView?"listView":"card"} onClick={()=>handleUser(bookDetail)}>
          <div className={listView?"c1":"r1"}><img  className={listView?"listImage":"cardImage"} src={bookDetail.thumbnailUrl}/></div> 
          <div className={listView?"c2":"r2"}>
          <div className={listView&&"listTitle"}>Title: {bookDetail.title}</div>
          <div>Page Count: {bookDetail.pageCount}</div>
          {bookDetail.publishedDate!==null && <div>Publish date: {moment(bookDetail.publishedDate.$date,"YYYY-MM-DDTHH:mm:ss.ss").format("DD MMM YYYY")}</div> }
          </div>
          <div className={listView?"c3":"r3"}>
          {bookDetail.isFavourite === false ?
            <button id={bookDetail.id} onClick={(e)=>addFav(e.target.id,true)}>Add to Fav</button>
            :
            <button id={bookDetail.id} onClick={(e)=>remove(e.target.id,false)}>Remove from Fav</button>
         }
         </div>
        </div>
       )

}

const mapStateToProps = state => {
    const { listView } = state.book
 return{
     listView
 }
}

const mapDispatchToProps = dispatch => {
    return{
        manipulateFavourite:(id,status)=>dispatch(manipulateFavourite(id,status)),
        setCurrentUser:(currentUser)=>dispatch(setCurrentUser(currentUser))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookGrid)