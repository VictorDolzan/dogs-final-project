import React from 'react';
import FeedModal from "./nav/FeedModal/FeedModal.jsx";
import FeedPhotos from "./nav/FeedPhotos/FeedPhotos.jsx";

const Feed = () => {
    return (
        <div>
            <FeedModal />
            <FeedPhotos />
        </div>
    );
};

export default Feed;