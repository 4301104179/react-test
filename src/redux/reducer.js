import { userActionType } from "./actionTypes";

const initialState = {
    modal_signin: false,
    modal_signup: false,
    user_list: []
}
console.log(initialState)

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionType.TOGGLE_SIGNIN:
            return {
                ...state,
                modal_signin: !state.modal_signin
            }

        case userActionType.TOGGLE_SIGNUP:
            return {
                ...state,
                modal_signup: !state.modal_signup
            }
        case userActionType.SIGN_UP:
            return {
                ...state,
                user_list: [...state.user_list, action.payload]
            }
        default:
            return state
    }
}

export default userReducer