import * as types from './actionType'
import axios from 'axios'


const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (token) => ({
    type: types.LOGIN_SUCCESS,
    payload: token,
});

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

export const logoutInitiate = () => ({
    type: types.LOGOUT_USER,
})


const registerStart = () => ({
    type: types.REGISTER_START,
});

const registerSuccess = (token) => ({
    type: types.REGISTER_SUCCESS,
    payload: token,
});

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
});

 export const setErrorEmpty = () => ({
    type: types.SET_ERROR_EMPTY,
})

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        axios
            .post("http://localhost:5000/api/auth/login", {
                email,
                password,
            })
            .then((response) => {
                console.log("response", response);
                dispatch(loginSuccess(response.data.access_token))
            })
            .catch((error) => dispatch(loginFail(error.response.data.message)));
    };
};


export const registerInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(registerStart());
        axios
            .post("http://localhost:5000/api/auth/register", {
                email,
                password,
            })
            .then((response) => {
                console.log("response", response);
                dispatch(registerSuccess(response.data.access_token));
            })
            .catch((error) => dispatch(registerFail(error.response.data.message)));
    };
};