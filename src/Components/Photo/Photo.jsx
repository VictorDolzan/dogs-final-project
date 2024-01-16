import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch.jsx";
import {PHOTO_GET} from "../../Api.jsx";
import Error from "../Helper/Error/Error.jsx";
import Loading from "../Helper/Loading/Loading.jsx";
import PhotoContent from "./PhotoContent/PhotoContent.jsx";
import Head from "../Helper/Head/Head.jsx";

const Photo = () => {
    const {id} = useParams();
    const {data, loading, error, request} = useFetch();

    useEffect(() => {
        const {url, options} = PHOTO_GET(id);

        request(url, options);
    }, [request, id]);

    return (
        <div>
            {error && (
                <Error error={error}/>
            )}
            {loading && (
                <Loading/>
            )}
            {data && (
                <section className="container mainContainer">
                    <Head title={data.photo.title} />
                    <PhotoContent single={true} data={data} />
                </section>
            )}
        </div>
    );
};

export default Photo;