import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../../../components/Layout/Layout";
import Details from "../../../components/Details/Details";

const Activity = () => {
    
    const {id} = useParams<{ id: string }>();

    return <div>
        <Layout>
            <Details
                url={"activity" + id}   
                title="Quiz de Matematicas"
                description="Quiz peluisimo de Mate"
                start={"/activity/exam/id/"+ id +"/start"}
            />
        </Layout>
    </div>
}

export default Activity;