// actions creators

import { FETCH_PRODUCT, SET_PAGE_NUMBER, SET_IS_LOADING } from './types';
import http from './../../utils/httpClient';
import notify from './../../utils/notify';

export const fetch_product = (pageNumber, pageSize) => (dispatch) => {
    dispatch(loading(true))
    http.post('/product/search', {
        params: {
            pageNumber,
            pageSize
        }
    })
        .then((data) => {
            console.log('BE data >>', data);
            dispatch({
                type: FETCH_PRODUCT,
                payload: data,
            })
        })
        .catch((err) => {
            notify.handleError(err);
        })
        .finally(() => {
            dispatch(loading(false));
        })
}

export const loading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: isLoading
})

export const set_page_number = (pageNumber) => ({
    type: SET_PAGE_NUMBER,
    payload: pageNumber
})