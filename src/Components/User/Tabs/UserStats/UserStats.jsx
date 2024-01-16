import React, {useEffect} from 'react';
import Head from "../../../Helper/Head/Head.jsx";
import useFetch from "../../../../Hooks/useFetch.jsx";
import {STATS_GET} from "../../../../Api.jsx";
import Loading from "../../../Helper/Loading/Loading.jsx";
import Error from "../../../Helper/Error/Error.jsx";
import UserGraphStats from "../../UserStatsGraphs/UserGraphStats.jsx";

const UserStats = () => {
    const {data, error, loading, request} = useFetch();

    useEffect(() => {
        async function getData() {
            const {url, options} = STATS_GET();
            await request(url, options);
        }

        getData();
    }, [request]);

    return (
        <div>
            <Head title="Estatísticas"/>
            {loading && (
                <Loading/>
            )}
            {error && (
                <Error error={error}/>
            )}
            {data && (
                <>
                    <UserGraphStats data={data}/>
                    <h1>Estatísticas</h1>
                </>
            )}
        </div>
    );
};

export default UserStats;