import React, {useEffect} from 'react';
import styles from './FeedModal.module.css';
import Error from "../../../Helper/Error/Error.jsx";
import Loading from "../../../Helper/Loading/Loading.jsx";
import PhotoContent from "../../../Photo/PhotoContent/PhotoContent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../../../store/actions/ui.jsx";

const FeedModal = () => {
    const {modal} = useSelector(state => state.ui);
    const {loading, error, data} = useSelector(state => state.photo);
    const dispatch = useDispatch();

    function handleOutsideClick(event){
        if (event.target === event.currentTarget) dispatch(closeModal());
    }

    useEffect(() => {
        dispatch(closeModal());
    }, [dispatch]);

    if (!modal) return null;

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