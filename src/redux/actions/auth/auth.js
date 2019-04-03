import { SET_LOGIN } from './auth-type';

export const setLogin = (value) => {
    return {
        type: SET_LOGIN,
        payload: value
    }
}