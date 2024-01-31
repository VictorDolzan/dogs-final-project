import {combineReducers} from "redux";
import photo from "../modules/photo/index.jsx";
import token from "./token.jsx";
import user from './user.jsx';

const reducer = combineReducers({
    photo,
    token,
    user
});

export default reducer;