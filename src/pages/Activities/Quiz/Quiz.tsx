import React from 'react';
import {useHistory} from 'react-router-dom';
import Layout from "../../../components/Layout/Layout";

type Props = {
    title: string,
    description: string;
    url: string
}

const Quiz = ({title, description, url}: Props) => {
    let history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    return <div>
        <Layout>
            QUIZ
            <div>
                <button onClick={handleClick}>Back</button>
            </div>
            <img src={url} alt=""/>
            <h1>{title}</h1>
            <p>{description}</p>
        </Layout>
    </div>
}

export default Quiz;