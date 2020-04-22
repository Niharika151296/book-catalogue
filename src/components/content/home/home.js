import React from 'react';
import Books from '../../books/books';
import Sort from '../../sort/sort';
import ChangeView from '../../changeView/changeView';
import './home.css';
import '../../content/content.css';

const Home = () => {
   
    return(
        <>
        <div className="sort"> <Sort/> </div> 
        <div className="changeView"> <ChangeView/></div>
        <div className="books"><Books data="home"/></div> 
        </>
    )
}

export default Home