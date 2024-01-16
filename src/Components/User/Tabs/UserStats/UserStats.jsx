import React, {lazy, Suspense, useEffect} from 'react';
import Head from "../../../Helper/Head/Head.jsx";
import useFetch from "../../../../Hooks/useFetch.jsx";
import {STATS_GET} from "../../../../Api.jsx";
import Loading from "../../../Helper/Loading/Loading.jsx";
import Error from "../../../Helper/Error/Error.jsx";

const UserGraphStats =
    lazy(() => import("../../UserStatsGraphs/UserGraphStats.jsx"))

const UserStats = () => {
    const {data, error, loading, request} = useFetch();

    useEffect(() => {
        async function getData() {
            const {url, options} = STATS_GET();
            await request(url, options);
        }

        getData();
    }, [request]);

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;
    if (data)
    return (
        <Suspense fallback={<div></div>}>
            <Head title="Estatísticas"/>
            <UserGraphStats data={data}/>
        </Suspense>
    );
    else return null;
};

export default UserStats;