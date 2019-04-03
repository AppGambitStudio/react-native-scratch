import { SET_LOGIN } from '../../actions/auth/auth-type';

const initialState = {
    isLoggedIn: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;