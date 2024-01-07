import React, {useEffect} from 'react';
import FeedPhotosItem from "./Tabs/FeedPhotosItem/FeedPhotosItem.jsx";
import useFetch from "../../../../Hooks/useFetch.jsx";
import {PHOTOS_GET} from "../../../../Api.jsx";
import Error from "../../../Helper/Error/Error.jsx";
import Loading from "../../../Helper/Loading/Loading.jsx";
import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {

    const {data, loading, error, request} = useFetch();

    useEffect(() => {
        async function fetchPhotos() {
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
            const {response, json} = await request(url, options);
        }

        fetchPhotos();
    }, [request]);

    return (
        <>
            {loading && (
                <Loading/>
            )}
            <Error error={error}/>
            <ul className={`${styles.feed} animeLeft`}>
                {data && !loading && (
                    data.map(photo => (
                        <FeedPhotosItem photo={photo} chave={photo.id}/>
                    ))
                )}
            </ul>
        </>
    );
};

export default FeedPhotos;