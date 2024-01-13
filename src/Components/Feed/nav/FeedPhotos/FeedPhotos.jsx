import React, {useEffect} from 'react';
import FeedPhotosItem from "./Tabs/FeedPhotosItem/FeedPhotosItem.jsx";
import useFetch from "../../../../Hooks/useFetch.jsx";
import {PHOTOS_GET} from "../../../../Api.jsx";
import Error from "../../../Helper/Error/Error.jsx";
import Loading from "../../../Helper/Loading/Loading.jsx";
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({setModalPhoto, user, page, setInfinite}) => {

    const {data, loading, error, request} = useFetch();

    useEffect(() => {
        async function fetchPhotos() {
            const total = 3;
            const {url, options} = PHOTOS_GET({page, total, user});
            const {response, json} = await request(url, options);
            if (response && response.ok && json.length < total) setInfinite(false);
        }

        fetchPhotos();
    }, [request, user, page, setInfinite]);

    return (
        <>
            {loading && (
                <Loading/>
            )}
            <Error error={error}/>
            <ul className={`${styles.feed} animeLeft`}>
                {data && !loading && (
                    data.map(photo => (
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