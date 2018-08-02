Const LOGIN_USER = 'LOGIN_USER';
Const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
Const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const auth = (state, action = {}) => {
    switch (action.type) {
        case LOGIN_USER: 
            return Object.assign({}, state, {
                user: action.data,
                token: null,
                error: null
            })
        case LOGIN_USER_SUCCESS: 
            return Object.assign({}, state, {
                token: action.token,
                error: null
            })
        case LOGIN_USER_FAILURE: 
            return Object.assign({}, state, {
                token: null,
                error: action.data
            })
        default: 
            return Object.assign({}, state);

    }
}