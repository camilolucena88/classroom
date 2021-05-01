import React from 'react';
import { Link, useHistory } from 'react-router-dom';

type Props = {
    title: string,
    description: string;
    url: string
    start?: string
}

const Details = ({title, description, url, start}: Props) => {
    let history = useHistory();

    const handleClick = () => {
        history.goBack();
    }
    
    return <div>
            <div><button onClick={handleClick}>Back</button></div>
            <img src={url} alt=""/>
            <h1>{title}</h1>
            <p>{description}</p>
        {start ? <Link to={start} className="btn btn-danger">Start</Link> : ''}
    </div>
}

export default Details;
