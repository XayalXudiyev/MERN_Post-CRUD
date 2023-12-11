export const postReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return { ...state, posts: action.payload }

        case 'CREATE_POSTS':
            return {
                posts: [...state.posts, action.payload],
            }

        case 'UPDATE_POSTS':
            return {
                ...state,
                posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
            };

        case 'DELETE_POSTS':
            return {
                posts: state.posts.filter((post) => post._id !== action.payload),
            }


        default:
            return state;
    }
}