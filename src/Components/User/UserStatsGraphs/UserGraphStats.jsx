import React, {useEffect, useState} from 'react';
import styles from "./UserGraphStats.module.css";

const UserGraphStats = ({data}) => {
    const [graph, setGraph] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        setTotal(data.map(
            ({acessos}) => Number(acessos))
            .reduce((prev, next) => prev + next, 0));

    }, [data]);

    return (
        <section className={`${styles.graph} animeLeft`}>
            <div className={styles.total}>
                <p>Acessos: {total}</p>
            </div>
        </section>
    );
};

export default UserGraphStats;