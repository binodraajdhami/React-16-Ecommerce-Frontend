import { FETCH_PRODUCT, NEW_PRODUCT, SET_IS_LOADING, SET_PAGE_NUMBER } from './../actions/products/types';

const initialState = {
    data: [],
    isLoading: false,
    pageSize: 5,
    pageNumber: 1
}



export default function (state = initialState, action) {
    console.log('at reducers >', action);

    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                data: action.payload
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload
            }
        default:
            return state;
    }

}