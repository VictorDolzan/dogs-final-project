import createAsyncSlice from "../helper/createAsyncSlice.jsx";
import {USER_GET} from "../../Api.jsx";
import {fetchToken, resetTokenState} from "./token.jsx";

const slice = createAsyncSlice({
    name: 'user',
    fetchConfig: (token) => USER_GET(token),
});

export const fetchUser = slice.asyncAction;
const {resetState: resetUserState, fetchError} = slice.actions;

export const userLogin = (user) => async (dispatch) => {
    const {payload} = await dispatch(fetchToken(user));
    if (payload.token) {
        window.localStorage.setItem('token', payload.token);
        await dispatch(fetchUser(payload.token));
    }
}

export const userLogOut = () => async (dispatch) => {
    dispatch(resetUserState());
    dispatch(resetTokenState());
    window.localStorage.removeItem('token');
}

export const autoLogin = () => async (dispatch, getState) => {
    const {token} = getState();
    if (token?.data?.token) {
        const {type} = await dispatch(fetchUser(token.data.token));
        if (type === fetchError.type) dispatch(userLogOut());
    }
}

export default slice.reducer;