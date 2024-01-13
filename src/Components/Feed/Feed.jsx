import React, {useEffect, useState} from 'react';
import FeedModal from "./nav/FeedModal/FeedModal.jsx";
import FeedPhotos from "./nav/FeedPhotos/FeedPhotos.jsx";

const Feed = ({user}) => {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);

    useEffect(() => {
        let wait = false;

        function infiniteScroll() {
            if (infinite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                if (scroll > height * .75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
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
    }, [infinite]);

    return (
        <div>
            {modalPhoto && (
                <FeedModal
                    photo={modalPhoto}
                    setModalPhoto={setModalPhoto}
                />
            )}
            {pages.map(page => (
                <FeedPhotos
                    setModalPhoto={setModalPhoto}
                    user={user}
                    page={page}
                    key={page}
                    setInfinite={setInfinite}
                />
            ))}
        </div>
    );
};

export default Feed;