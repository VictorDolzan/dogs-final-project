import React from 'react';
import styles from './PhotoDelete.module.css';
import {PHOTO_DELETE} from "../../../Api.jsx";
import useFetch from "../../../Hooks/useFetch.jsx";

const PhotoDelete = ({id}) => {
    const {loading, request} = useFetch();

    async function handleClick(event) {
        event.preventDefault();
        const confirm = window.confirm('Deseja realmente deletar?');
        if (confirm) {
            const {url, options} = PHOTO_DELETE(id);
            const {response} = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }

    return (
        <>
            {loading
                ? (
                    <button className={styles.delete} disabled>Deletando...</button>
                )
                : (
                    <button onClick={handleClick} className={styles.delete}>Delete</button>
                )
            }
        </>
    );
};

export default PhotoDelete;