import axios from '../axios-posts';


export const FETCH_POST_POST = 'FETCH_POST_POST';
export const FETCH_GET_POST = 'FETCH_GET_POST';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';


export const fetchPostSucces = (posts) => {
    return {type: FETCH_POST_SUCCESS, posts}
};



export const fetchGetPost = () => {
    return (dispatch) => {
        return axios.get('/posts').then((response) => {
            dispatch(fetchPostSucces(response.data))
        })
    }
};
export const fetchPostPost = (posts) => {
    return (dispatch, getState) => {
        return axios.post('/posts', posts).then(() => {
            dispatch(fetchGetPost())
        })
    }
};

export const fetchPostError = () => {
    return {type: FETCH_POST_ERROR}
};