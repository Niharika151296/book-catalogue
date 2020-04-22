import React from 'react';
import Sort from '../../sort/sort';
import Books from "../../books/books";
import ChangeView from '../../changeView/changeView';
import '../../content/content.css';

const Favourite = () => {
    return(
        <>         
        <div className="sort"> <Sort/> </div> 
        <div className="changeView"> <ChangeView/></div>
        <div className="books"><Books data="favourite"/></div> 
        </>
    )
}

export default Favourite