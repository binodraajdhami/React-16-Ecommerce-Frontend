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


const requestHeadersWithToken = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}

/**
 * http get request
 * @param {string} url 
 * @param {object} headers 
 */
function get(url, { headers = requestHeaders, params = {}, responseType = 'json' } = {}, secured = false) {
    // observable TODO
    return http({
        method: "GET",
        url,
        headers: secured ? requestHeadersWithToken : requestHeaders,
        params,
        responseType
    })
        .then(data => data.data)
        .catch(err => err.response);
}

function put(url, { headers = requestHeaders, body = {}, params = {}, responseType = 'json' } = {}, secured = false) {
    // observable TODO
    return http({
        method: "PUT",
        url,
        headers: secured ? requestHeadersWithToken : requestHeaders,
        data: body,
        params,
        responseType
    })
        .then(data => data)
}

function post(url, { headers = requestHeaders, body = {}, params = {}, responseType = 'json' } = {}, secured = false) {
    // observable TODO //
    return http({
        method: "POST",
        url,
        headers: secured ? requestHeadersWithToken : requestHeaders,
        data: body,
        params,
        responseType
    })
        .then(data => data.data);

}

function remove(url, { headers = requestHeaders, params = {}, responseType = 'json' } = {}, secured = false) {
    // observable TODO
    return http({
        method: "DELETE",
        url,
        headers: secured ? requestHeadersWithToken : requestHeaders,
        params,
        responseType
    })
        .then(data => data.response)
        .catch(err => err.response);
}

function upload(method, url, data, files) {
    debugger;
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    if (files.length) {
        formData.append('img', files[0], files[0].name)
    }
    for (let key in data) {
        formData.append(key, data[key]);
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log('check response >>', xhr.response);
        }
    }
    xhr.open(method, url, true);
    xhr.send(formData);
}


export default {
    get,
    post,
    put,
    delete: remove,
    upload
}