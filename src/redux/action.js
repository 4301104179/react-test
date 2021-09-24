import { userActionType } from "./actionTypes";

export const toggleSignin = () => ({
    type: userActionType.TOGGLE_SIGNIN
})

export const toggleSignup = () => ({
    type: userActionType.TOGGLE_SIGNUP
})

export const signUp = EmailandPassword => ({
  type: userActionType.SIGN_UP,
  payload: EmailandPassword
})