import React, {useState} from 'react';
import FeedModal from "./nav/FeedModal/FeedModal.jsx";
import FeedPhotos from "./nav/FeedPhotos/FeedPhotos.jsx";

const Feed = () => {
    const [modalPhoto, setModalPhoto] = useState(null);

    return (
        <div>
            {modalPhoto && (
                <FeedModal
                    photo={modalPhoto}
                    setModalPhoto={setModalPhoto}
                />
            )}
            <FeedPhotos
                setModalPhoto={setModalPhoto}
            />
        </div>
    );
};

export default Feed;