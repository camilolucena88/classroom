import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterNavBar from "../../components/Filter/FilterNavBar";
import Layout from "../../components/Layout/Layout";

type ActivityDetail = {
    url: string,
    title: string,
    message: string,
    img: string
}

type State = {
    text: string
    type: string
}

class Activities extends React.Component {
    state: State = {
        text: "",
        type: "",
    }

    activities = [
        {
            url: "/activity/id/1",
            title: "Quiz de Matematicas",
            type: "quiz",
            message: "Este es el primer quiz",
            img: "https://dummyimage.com/200x200"
        },
        {
            url: "/activity/id/2",
            title: "Quiz de Fisica",
            type: "test",
            message: "Este es el primer quiz",
            img: "https://dummyimage.com/200x200"
        },
        {
            url: "/activity/id/3",
            title: "Quiz de Lenguaje",
            type: "test",
            message: "Este es el primer quiz",
            img: "https://dummyimage.com/200x200"
        },
        {
            url: "/activity/id/4",
            title: "Quiz de Ciencias Sociales",
            type: "test",
            message: "Este es el primer quiz",
            img: "https://dummyimage.com/200x200"
        },
        {
            url: "/activity/id/4",
            title: "Practica de Dibujo",
            type: "quiz",
            message: "Este es el primer quiz",
            img: "https://dummyimage.com/200x200"
        },
        {
            url: "/activity/id/4",
            title: "Quiz de Ciencias Artisticas",
            type: "quiz",
            message: "Este es el primer quiz",
            img: "https://dummyimage.com/200x200"
        }
    ]

    filterByInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            text: event.target.value
        })
    }

    filterByClick = (event: React.MouseEvent): void => {
        this.setState({
            type: event.currentTarget.getAttribute('data-filter')
        })
    }

    removeFilter = (event: React.MouseEvent): void => {
        this.setState({
            type: ""
        })
    }

    render() {
        const filteredActivities = this.activities.filter((activity) => {
            return activity.title.toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1 && activity.type.indexOf(this.state.type) !== -1
        })

        const cards = filteredActivities.map((activity: ActivityDetail) => {
            return <Card
                url={activity.url}
                title={activity.title}
                message={activity.message}
                img={activity.img}
            />
        })

        return <div>
            <Layout>
            <h1>Activities</h1>
            <SearchBar value={this.state.text} onChange={(e) => this.filterByInput(e)}/>
            <FilterNavBar removeFilter={(event: React.MouseEvent) => this.removeFilter(event)} filters={this.state.type}
                          onClick={(event: React.MouseEvent) => this.filterByClick(event)}/>
            <Container>
                {cards}
            </Container>
            </Layout>
        </div>
    }
}

export default Activities;