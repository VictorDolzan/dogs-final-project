import React, {useContext, useState} from 'react';
import {UserContext} from "../../../Context/UserContext.jsx";
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm.jsx";
import styles from './PhotoComments.module.css'

const PhotoComments = ({id, comentarios}) => {
    const [comments, setComments] = useState(() => comentarios)
    const {login} = useContext(UserContext);

    return (
        <>
            <ul className={styles.comments}>
                {comments && (comments.map(comment =>
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {login && (
                <PhotoCommentsForm id={id} setComments={setComments}/>
            )}
        </>
    );
};

export default PhotoComments;