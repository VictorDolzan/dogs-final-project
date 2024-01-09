import React, {useContext, useEffect, useRef, useState} from 'react';
import {UserContext} from "../../../Context/UserContext.jsx";
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm.jsx";
import styles from './PhotoComments.module.css'

const PhotoComments = ({id, comentarios}) => {
    const [comments, setComments] = useState(() => comentarios);
    const commentsSection = useRef(null);
    const {login} = useContext(UserContext);

    useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ul ref={commentsSection} className={styles.comments}>
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