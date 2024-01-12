import React, {useEffect} from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from "../../../../../Helper/Image/Image.jsx";

const FeedPhotosItem = ({photo, chave, setModalPhoto}) => {
    function handleClick() {
        setModalPhoto(photo);
    }

    return (
        <li key={chave} className={styles.photo} onClick={handleClick}>
            <Image src={photo.src} alt={photo.title}/>
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;