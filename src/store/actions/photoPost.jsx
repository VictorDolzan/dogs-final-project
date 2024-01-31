import createAsyncSlice from "../helper/createAsyncSlice.jsx";
import {PHOTO_POST} from "../../Api.jsx";

const slice = createAsyncSlice({
    name: 'photoPost',
    fetchConfig: ({formData, token}) => PHOTO_POST({formData, token})
});

export const photoPost = slice.asyncAction;

export default slice.reducer;