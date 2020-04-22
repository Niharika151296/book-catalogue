import React from 'react';
import { connect } from 'react-redux';
import { setSortType } from '../../redux/actions/books';
const Sort = ({setSortType}) => {

    const handleSort = (value) => {
        setSortType(value)
    }

return(
    <span>
    Select sort Type:
    <select 
            name="destination"
            onChange={(e)=>handleSort(e.target.value)}>
            <option defaultValue value="">Default</option>
            <option  value="title">Title</option>
            <option  value="date">Date</option>
            <option  value="pageCount">pageCount</option>
        </select>
    </span>
)
}


const mapDispatchToProps = dispatch => {
    return{
        setSortType:(value)=>dispatch(setSortType(value))
    }
}
export default connect(null,mapDispatchToProps)(Sort)