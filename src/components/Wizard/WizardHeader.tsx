import React from 'react';
import {useHistory} from 'react-router-dom';

type Props = {
    title: string
}

const Activity = ({title} : Props) => {

    let history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    const progressWidth = {
        width: "25%"
    }
    
    return <div>
        <header className="w-100 p-3 my-3">
            <div className="flex justify-content-around">
                <div>
                    <button className="p-3  rounded-lg border-pink-500 border hover:bg-pink-400 hover:text-white" onClick={handleClick}>Regresar</button>
                </div>
                <div className="flex flex-column"><h1 className="sm:h-1/2 inline">{title}</h1>
                    <div className="progress">
                        <div className="bg-pink-500 progress-bar" style={progressWidth} role="progressbar"
                             aria-valuenow={50} aria-valuemin={0}
                             aria-valuemax={100}></div>
                    </div>
                </div>
                <div>
                    <button className="p-3 text-white rounded-lg bg-pink-500 hover:bg-pink-400" onClick={handleClick}>Siguiente</button>
                </div>
            </div>
        </header>
    </div>
}

export default Activity;