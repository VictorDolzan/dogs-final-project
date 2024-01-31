import createAsyncSlice from "../helper/createAsyncSlice.jsx";
import {TOKEN_POST} from "../../Api.jsx";

const slice = createAsyncSlice({
    name: 'token',
    fetchConfig: (user) => TOKEN_POST(user)
});

export const fetchToken = slice.asyncAction;

export default slice.reducer;