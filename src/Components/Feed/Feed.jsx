import React, {useEffect, useState} from 'react';
import FeedModal from "./nav/FeedModal/FeedModal.jsx";
import FeedPhotos from "./nav/FeedPhotos/FeedPhotos.jsx";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {loadNewPhotos, resetFeedState} from "../../store/actions/feed.jsx";
import Loading from "../Helper/Loading/Loading.jsx";
import Error from "../Helper/Error/Error.jsx";

const Feed = ({user}) => {
    const {infinite, loading, list, error} = useSelector(state => state.feed);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetFeedState());
        dispatch(loadNewPhotos({user: user, total: 6}));
    }, [dispatch, user]);

    useEffect(() => {
        let wait = false;

        function infiniteScroll() {
            if (infinite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                if (scroll > height * .75 && !wait) {
                    dispatch(loadNewPhotos({user: user, total: 6}));
                    wait = true;
                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);
        return () => {
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
        }
    }, [infinite, dispatch, user]);

    return (
        <div>
            <FeedModal />
            {loading && (
                <Loading/>
            )}
            {list.length > 0 && (
                <FeedPhotos />
            )}
            {error && (
                <Error error={error}/>
            )}
            {!infinite && !user && (
                <p style={{
                    textAlign: 'center',
                    padding: '2rem 0 4rem 0',
                    color: '#888'
                }}>
                    Não existem mais postagens
                </p>
            )}
        </div>
    );
};

Feed.defaultProps = {
    user: 0
}

Feed.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
}

export default Feed;