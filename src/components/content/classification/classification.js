import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthors, getCategories, changeRoute, fetchBooks } from '../../../redux/actions/books';
import './classification.css';
import Categories from './categories';
import Authors from './authors';
import ChangeView from '../../changeView/changeView';
import dropDown from './dropdown.png'


const Classification = ({fetchBooks,getAuthors,getCategories,authors,categories,changeRoute,bookList}) => {
    
    const [classif,setClassif] = useState('authors')
    const selectClass = (value) => {
        setClassif(value)
    }

    if(classif!='')
     changeRoute(classif)

    const [active,setActive] =  useState(null);

   const clickCategory = (id) => {
       setActive(id)
      let elem = document.getElementById(id).childNodes;    
       // elem[0].classList.toggle("active");
        let panel = elem[1];
       if (panel.style.display === "block") {
         panel.style.display = "none";
       } else {
         panel.style.display = "block";
       }
     
   }

   const clickAuthor = (id) => {
       console.log(id)
    setActive(id)
   let elem = document.getElementById(id).childNodes;    
     elem[0].classList.toggle("active");
     let panel = elem[1];
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  
}



    let l;
    if(authors.length>0 && categories.length>0)
    if(classif==="categories")
     l=categories.map((c,index)=>
       <div key={index} id={index} className="categories" onClick={()=>clickCategory(index)}>
        <button className="accordion" >{c} <img className="dropDown" src={dropDown}/> </button>
         <div className="panel" id={index}> 
            {index===active&&<Categories  category={c}/>}
    </div></div>)

    else if(classif==="authors")
    l=authors.map((a,index)=>
        <div key={index} id={index} className="authors" onClick={()=>clickAuthor(index)}>
        <button className="accordion" >{a} <img className="dropDown" src={dropDown}/> </button>
         <div className="panel" id={index}> 
            {index===active&&<Authors  author={a}/>}
    </div></div>)

    useEffect(()=>{
       fetchBooks()
        getAuthors()
        getCategories()
    },[])

    return(
        <>
        <span>
       <div className="classificationDropDown"> 
        <span>
          Classify by:
          <button id="authors" className={classif==="authors"&&"activeC"}onClick={(e)=>selectClass(e.target.id)}>By Author</button>
          <button id="categories" className={classif==="categories"&&"activeC"} onClick={(e)=>selectClass(e.target.id)}>By Category</button>
        </span>
        </div>
        <div className="changeView"><ChangeView/></div>
        </span>
       {l}
       </>
    )
}

const mapStateToProps = state => {
    const {authors,categories,bookList} = state.book
    return{
        authors,
        categories,
        bookList
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchBooks:()=>dispatch(fetchBooks()),
        getAuthors:()=>dispatch(getAuthors()),
        getCategories:()=>dispatch(getCategories()),        
        changeRoute:(status)=>dispatch(changeRoute(status))
      
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Classification)