import axios from 'axios';

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USERS = "FETCH_USERS";
export const ENABLE_PREVIOUS = "ENABLE_PREVIOUS";
export const DISABLED_LINK = "DISABLED_LINK";
//json placeholder
export const FETCH_USERS_JSON = "FETCH_USERS_JSON";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_USER_ALBUMS = "FETCH_USER_ALBUMS";


const basePath = "https://randomuser.me/api";
const jsonplaceholder = "https://jsonplaceholder.typicode.com/";


export const fetchUserData = () => {
    return axios
        .get(basePath)
        .then(({
            data
        }) => {
            console.log(JSON.stringify(data.results));
            return {
                type: FETCH_USER,
                payload: data
            };
        })
        .catch(error => console.log(error));
};

export const fetchUsers = (pageNumber, itemsCount) => {
    return axios
        .get(basePath + "?page=" + pageNumber + "&results=" + itemsCount + "&seed=")
        .then(({
            data
        }) => {
            // console.log(JSON.stringify(data.results));
            return {
                type: FETCH_USERS,
                payload: data.results
            };
        })
        .catch(error => console.log(error));
};

export const fetchPosts = () => {
    return axios.get(jsonplaceholder + 'posts/')
        .then(({ data }) => {
            return {
                type: FETCH_USERS_JSON,
                payload: data
            };
        })
        .catch(error => {
            return {
                type: FETCH_USERS_JSON,
                payload: error
            };
        });
};