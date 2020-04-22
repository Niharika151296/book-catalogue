import axios from 'axios';
export const fetchBooks = () => {
    return(dispatch)=>{
        axios.get(`http://localhost:3004/books/`)
        .then(response=>{
                dispatch(fetchBooksSuccess(response.data))
            }
        )
        .catch(error=>{
                dispatch(fetchBooksFailure(error))
            }
        )
    }
}


export const fetchBooksSuccess = payload => {
    return {type:'FETCH_BOOK_SUCCESS',payload}
}

export const fetchBooksFailure = payload => ({type:'FETCH_BOOK_FAILURE',payload})


export const setSortType = payload => ({type:'SET_SORT_TYPE',payload})

export const changeViewLayout = payload => ({type:'VIEW_TYPE',payload})

export const setCurrentUser = payload => ({type:'SET_CURRENT_USER',payload})


export const manipulateFavourite = (id,status) => {
    const fav = { "isFavourite": status}
    return (dispatch)=>{
        axios.patch(`http://localhost:3004/books/${id}`,fav)
        .then(response=>{
            axios.get(`http://localhost:3004/books/`)
            .then(response=>{
                    dispatch(fetchBooksSuccess(response.data))
                }
            )
            .catch(error=>{
                    dispatch(fetchBooksFailure(error))
                }
            )
            })
        .catch(error=>{
           // dispatch(setFavouriteFailure())
        })
    }
}

export const getAuthors = () => {
    return(dispatch)=>{
        axios.get(`http://localhost:3004/authors/`)
        .then(
            response=>{
                dispatch(getAuthorsSuccess(response.data))
            }
        )
        .catch(
            error=>
            {
                dispatch(getAuthorsFailure(error))
            }
        )
    }
}

export const getAuthorsSuccess = payload => ({type:'GET_AUTHORS_SUCCESS',payload})
export const getAuthorsFailure = payload => ({type:'GET_AUTHORS_FAILURE',payload})

export const getCategories = () => {
    return(dispatch)=>{
        axios.get(`http://localhost:3004/categories/`)
        .then(
            response=>{
                dispatch(getCategoriesSuccess(response.data))
            }
        )
        .catch(
            error=>
            {
                dispatch(getAuthorsFailure(error))
            }
        )
    }
}

export const getCategoriesSuccess = payload => ({type:'GET_CATEGORIES_SUCCESS',payload})

export const changeRoute = payload => ({type:'CHANGE_ROUTE',payload})
