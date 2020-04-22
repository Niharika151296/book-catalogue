import React, { useState } from 'react';
import { changeViewLayout } from '../../redux/actions/books';
import { connect } from 'react-redux';


const ChangeView = ({changeViewLayout,listView}) => {

    const [lView,setListView] = useState(listView)
   
    const viewChange = () => {
         changeViewLayout(!listView)
         setListView(!listView)
    }

return(
    <>
     <button onClick={viewChange}>{lView?"Grid view":"List View"}</button>
    </>
)
}

const mapStateToProps =  state => {
    const {listView} = state.book
    return{
       listView
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeViewLayout:(value)=>dispatch(changeViewLayout(value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChangeView)