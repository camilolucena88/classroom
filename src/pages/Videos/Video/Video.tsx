import React from 'react';
import {useParams} from 'react-router-dom';
import Layout from "../../../components/Layout/Layout";
import Details from "../../../components/Details/Details";


const Video = () => {

    const {id} = useParams<{ id: string }>();

    return <div>
        <Layout>
            <Details
                url={"video" + id}
                title="Libro de Matematicas"
                description="Libro peluisimo de Mate"
            />
        </Layout>
    </div>
}

export default Video;