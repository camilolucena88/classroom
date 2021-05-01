import React from 'react';
import {useParams} from 'react-router-dom';
import Layout from "../../../components/Layout/Layout";
import Details from "../../../components/Details/Details";


const Book = () => {
    const {id} = useParams<{ id: string }>();

    return <div>
        <Layout>
            <Details
                url={"book" + id}
                title={"Libro de Ciencias sociales" + id}
                description="Libro peluisimo de Mate"
            />
        </Layout>
    </div>
}

export default Book;