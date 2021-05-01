import React from 'react';
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";

const Videos = () => {
    return <div>
        <Layout>
            <h1>Videos</h1>
            <Container>
                <Card
                    url="/videos/id/1"
                    title="Video de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
                <Card
                    url="/videos/id/5"
                    title="Video de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
                <Card
                    url="/videos/id/2"
                    title="Video de Ciencias"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
                <Card
                    url="/videos/id/3"
                    title="Videos de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
                <Card
                    url="/videos/id/4"
                    title="Quiz de Matematicas"
                    message="Este es el primer quiz"
                    img="https://dummyimage.com/200x200"
                />
            </Container>
        </Layout>
    </div>
}

export default Videos;