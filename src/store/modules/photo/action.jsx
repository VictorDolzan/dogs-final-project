import TYPES from "./types.jsx";
import store from "../../config/configureStore.jsx";
import {PHOTO_GET} from "../../../Api.jsx";

export function fetchPhotoStarted() {
    store.dispatch({
        type: TYPES.FETCH_PHOTO_STARTED
    });
}

export function fetchPhotoSuccess(data) {
    store.dispatch({
        type: TYPES.FETCH_PHOTO_SUCCESS,
        payload: data
    });
}

export function fetchPhotoError(error){
    store.dispatch({
        type: TYPES.FETCH_PHOTO_ERROR,
        payload: error
    })
}

export async function fetchPhoto(id){
    try {
        fetchPhotoStarted()
        const {url, options} = PHOTO_GET(id);
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok === false) throw new Error(data.message);
        fetchPhotoSuccess(data)
    } catch (error) {
        fetchPhotoError(error.message)
    }
}