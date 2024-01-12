import React, {useContext} from 'react';
import styles from './PhotoContent.module.css'
import {Link} from "react-router-dom";
import PhotoComments from "../PhotoComments/PhotoComments.jsx";
import {UserContext} from "../../../Context/UserContext.jsx";
import PhotoDelete from "../PhotoDelete/PhotoDelete.jsx";

const PhotoContent = ({data}) => {
    const user = useContext(UserContext);
    const {photo, comments} = data;

    return (
        <div className={styles.photo}>
            <div className={styles.img}>
                <img src={photo.src} alt={photo.title}/>
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.data && user.data.username === photo.author
                            ? (
                                <PhotoDelete id={photo.id} />
                            )
                            : (
                                <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                            )
                        }
                        <span className={styles.visualizacoes}>{photo.acessos}</span>
                    </p>
                    <h1 className="title">
                        <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade} anos</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} comentarios={comments} />
        </div>
    );
};

export default PhotoContent;