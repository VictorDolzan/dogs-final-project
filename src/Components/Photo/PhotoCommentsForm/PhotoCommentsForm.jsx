import React, {useState} from 'react';
import Enviar from '../../../Assets/enviar.svg?react'
import useFetch from "../../../Hooks/useFetch.jsx";
import {COMMENT_POST} from "../../../Api.jsx";
import Error from "../../Helper/Error/Error.jsx";
import styles from './PhotoComentsForm.module.css';

const PhotoCommentsForm = ({id, setComments, single}) => {
    const [comment, setComment] = useState('');
    const {request, error} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});
        const { response, json } = await request(url, options);
        if (response.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
        }
    }

    return (
        <form
            className={`${styles.form} ${single ? styles.photoSingle : '' }`}
            onSubmit={handleSubmit}
        >
            <textarea
                className={styles.textarea}
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({target}) => setComment(target.value)}
            />
            <button className={styles.button}><Enviar/></button>
            <Error error={error} />
        </form>
    );
};

export default PhotoCommentsForm;