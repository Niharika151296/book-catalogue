const init ={
    bookList:[],
    sortType:'',
    listView:false,
    user:{},
    authors:[],
    categories:[],
    route:"home"
}

const book = (state=init,action) =>{
    switch(action.type){
        case 'FETCH_BOOK_SUCCESS':{
            return{
                ...state,
                bookList:action.payload
            }
        }

        case 'SET_SORT_TYPE':{
            return{
                ...state,
                sortType:action.payload
            }
        }

        case 'VIEW_TYPE':{
            return{
               ...state,
               listView:action.payload
            }
        }

        case 'SET_CURRENT_USER':
            return{
                ...state,
                user:action.payload

            }

        case 'GET_AUTHORS_SUCCESS':
            return{
                ...state,
                authors:action.payload
            }

            case 'GET_CATEGORIES_SUCCESS':
                return{
                    ...state,
                    categories:action.payload
                }

            case 'CHANGE_ROUTE':
                console.log(action.payload)
                 return{
                     ...state,
                     route:action.payload,
                     sortType:'',
                     user:{}
                 }
        default:
            return state
    }
}

export default book