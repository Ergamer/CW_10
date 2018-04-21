import {FETCH_POST_ERROR, FETCH_POST_POST, FETCH_POST_REQUEST, FETCH_POST_SUCCESS} from "./actions";


const initialState = {
    posts: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_POST:
            let newPosts = [...state.posts];
            newPosts.push(action.posts);
            return {...state, posts: newPosts};
        case FETCH_POST_SUCCESS:
            return {...state, posts: action.posts};
        case FETCH_POST_REQUEST:
            return {...state, loading: true};
        case FETCH_POST_ERROR:
            return {...state, loading: false};
        default:
            return state;
    }
};

export default reducer;