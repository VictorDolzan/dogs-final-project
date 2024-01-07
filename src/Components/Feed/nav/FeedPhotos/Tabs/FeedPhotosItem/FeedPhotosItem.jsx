import React, {useEffect} from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({photo, chave}) => {
    return (
        <li key={chave} className={styles.photo}>
            <img src={photo.src} alt={photo.title}/>
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;