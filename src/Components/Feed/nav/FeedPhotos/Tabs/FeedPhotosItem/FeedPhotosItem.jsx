import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from "../../../../../Helper/Image/Image.jsx";
import {useDispatch} from "react-redux";
import {openModal} from "../../../../../../store/actions/ui.jsx";
import {fetchPhoto} from "../../../../../../store/modules/photo/action.jsx";

const FeedPhotosItem = ({photo, chave}) => {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(openModal());
        dispatch(fetchPhoto(photo.id));
    }

    return (
        <li key={chave} className={styles.photo} onClick={handleClick}>
            <Image src={photo.src} alt={photo.title}/>
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;