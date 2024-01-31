import React, {useEffect, useRef, useState} from 'react';
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm.jsx";
import styles from './PhotoComments.module.css'
import {useSelector} from "react-redux";

const PhotoComments = (props) => {
    const [comments, setComments] = useState(() => props.comments);
    const commentsSection = useRef(null);
    const {data} = useSelector(state => state.user);

    useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ul
                ref={commentsSection}
                className={`${styles.comments} ${props.single ? styles.photoSingle : ''}`}
            >
                {comments && (comments.map(comment =>
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {data && (
                <PhotoCommentsForm
                    single={props.single}
                    id={props.id}
                    setComments={setComments}
                />
            )}
        </>
    );
};

export default PhotoComments;