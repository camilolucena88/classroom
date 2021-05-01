import React from 'react';
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import Layout from '../../components/Layout/Layout';

const Books = () => {
    return <div>
        <Layout>
            <h1>Books</h1>
            <Container>
                <Card
                    url="/book/id/1"
                    title="Quiz de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
                <Card
                    url="/book/id/1"
                    title="Quiz de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
                <Card
                    url="/book/id/1"
                    title="Quiz de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
                <Card
                    url="/book/id/1"
                    title="Quiz de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
                <Card
                    url="/book/id/1"
                    title="Quiz de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
            </Container>
        </Layout>
    </div>
}

export default Books;