import * as types from './actionType'

const initialState = {
    users: [],
    user: {},
    loading: false,
    error: null,
};

const authReducer = (state = {users: ["a", "b"] }, action) => {
    switch (action.type) {
        case types.GET_USERS_START:
            return {
                loading: true,
                users: [],
            }
        case types.LOGIN_START:
        case types.REGISTER_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOGIN_SUCCESS:
        case types.GET_USERS_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case types.LOGIN_FAIL:
        case types.GET_USERS_FAIL:
        case types.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.LOGOUT_USER:
            return {
                ...state,
                user: null,
            };
        case types.SET_ERROR_EMPTY:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;