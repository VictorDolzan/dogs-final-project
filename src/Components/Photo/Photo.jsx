import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Error from "../Helper/Error/Error.jsx";
import Loading from "../Helper/Loading/Loading.jsx";
import PhotoContent from "./PhotoContent/PhotoContent.jsx";
import Head from "../Helper/Head/Head.jsx";
import {useSelector} from "react-redux";
import * as photoActions from '../../store/modules/photo/action.jsx';

const Photo = () => {
    const {id} = useParams();
    const {loading, error, data} = useSelector(state => state.photo);

    useEffect(() => {
        photoActions.fetchPhoto(id);
    }, [id]);

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
                    <PhotoContent single={true}/>
                </section>
            )}
        </div>
    );
};

export default Photo;