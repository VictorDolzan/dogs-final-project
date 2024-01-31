import {combineReducers} from "redux";
import photo from "../modules/photo/index.jsx";
import token from "../actions/token.jsx";
import user from '../actions/user.jsx';
import feed from "../actions/feed.jsx";
import ui from "../actions/ui.jsx";

const reducer = combineReducers({
    photo,
    token,
    user,
    feed,
    ui
});

export default reducer;