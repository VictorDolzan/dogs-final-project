import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer.jsx";
import {defaultMiddleware} from "../middleware/defaultMiddleware.jsx";

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(defaultMiddleware)
});

export default store;