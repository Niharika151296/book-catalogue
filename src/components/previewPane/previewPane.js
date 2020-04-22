import React from 'react';
import { connect } from 'react-redux';
import './previewPane.css';
const PreviewPane = ({user}) => {

    return(
        <>
        <h3 className="preview">Preview Pane</h3>        
        {user.title!==undefined?
        <div className="bookDetail">
            <img src={user.thumbnailUrl}/>
            <div className="previewDetail"> <b>Title</b> : {user.title}</div>
            <div className="previewDetail"> <b>Status</b> : {user.status}</div>
            <div className="previewDetail"> <b>Page Count</b> : {user.pageCount}</div>
            <div className="previewDetail"> <b>Description</b> : {user.longDescription}</div>

        </div>
        :
        <div className="clickItem"> Click a item to see the detail </div>
        }
        </>
        
        
           
    )
}

const mapStateToProps = state => {
    const {user} = state.book
    return{
        user
    }
}
export default connect(mapStateToProps)(PreviewPane)