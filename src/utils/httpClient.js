import axios from 'axios';
// base instance
const baseURL = process.env.REACT_APP_BASE_URL
console.log('base url >>', baseURL);
const http = axios.create({
    baseURL: baseURL,
    responseType: 'json'
})

const requestHeaders = {
    'Content-Type': 'application/json'
}

/**
 * http get request
 * @param {string} url 
 * @param {object} headers 
 */
function get(url, { headers = requestHeaders, params = {}, responseType = 'json' } = {}) {
    // observable TODO
    return http({
        method: "GET",
        url,
        headers,
        params,
        responseType
    })
        .then(data => data.response)
        .catch(err => err.response);
}

function put(url, { headers = requestHeaders, body = {}, params = {}, responseType = 'json' } = {}) {
    // observable TODO
    return http({
        method: "PUT",
        url,
        headers,
        data: body,
        params,
        responseType
    })
        .then(data => data.response)
        .catch(err => err.response);
}

function post(url, { headers = requestHeaders, body = {}, params = {}, responseType = 'json' } = {}) {
    // observable TODO
    return http({
        method: "POST",
        url,
        headers,
        data: body,
        params,
        responseType
    })
        .then(data => data.response)
        .catch(err => err.response);
}

function remove(url, { headers = requestHeaders, params = {}, responseType = 'json' } = {}) {
    // observable TODO
    return http({
        method: "DELETE",
        url,
        headers,
        params,
        responseType
    })
        .then(data => data.response)
        .catch(err => err.response);
}


export default {
    get,
    post,
    put,
    delete: remove
}