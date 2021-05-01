import React from 'react';
import {useParams} from 'react-router-dom';
import Exam from '../Exam/Exam';
import Quiz from "../Quiz/Quiz";

const ActivityFactory = () => {
    const {type, id} = useParams<{ type: string, id: string }>();
    
    switch (type) {
        case 'quiz':
            return <Quiz title="Prueba de Quiz" description={type} url={"/activity/" + id + "/" + type + "/start"}/>
        case 'exam':
            return <Exam title="Prueba de Examen" description={type} url={"/activity/" + id + "/" + type + "/start"}/>
        default:
            throw new Error('Something bad happened here');
    }
    
}

export default ActivityFactory;