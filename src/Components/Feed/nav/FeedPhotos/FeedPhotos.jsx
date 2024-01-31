import React, {useEffect} from 'react';
import FeedPhotosItem from "./Tabs/FeedPhotosItem/FeedPhotosItem.jsx";
import styles from './FeedPhotos.module.css';
import {useSelector} from "react-redux";

const FeedPhotos = ({setModalPhoto}) => {
    const {list} = useSelector(state => state.feed);

    return (
        <>
            <ul className={`${styles.feed} animeLeft`}>
                {list && (
                    list.map(photo => (
                        <FeedPhotosItem
                            photo={photo}
                            chave={photo.id}
                            setModalPhoto={setModalPhoto}
                        />
                    ))
                )}
            </ul>
        </>
    );
};

export default FeedPhotos;