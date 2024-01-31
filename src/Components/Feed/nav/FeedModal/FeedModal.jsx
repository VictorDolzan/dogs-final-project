import React, {useEffect} from 'react';
import styles from './FeedModal.module.css';
import Error from "../../../Helper/Error/Error.jsx";
import Loading from "../../../Helper/Loading/Loading.jsx";
import PhotoContent from "../../../Photo/PhotoContent/PhotoContent.jsx";
import {useSelector} from "react-redux";
import * as photoActions from "../../../../store/modules/photo/action.jsx";

const FeedModal = ({photo, setModalPhoto}) => {
    const {loading, error, data} = useSelector(state => state.photo);

    useEffect(() => {
        photoActions.fetchPhoto(photo.id);
    }, [photo.id]);

    function handleOutsideClick(event){
        if (event.target === event.currentTarget) setModalPhoto(null);
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && (
                <Error error={error} />
            )}
            {loading && (
                <Loading />
            )}
            {data && (
                <PhotoContent />
            )}
        </div>
    );
};

export default FeedModal;