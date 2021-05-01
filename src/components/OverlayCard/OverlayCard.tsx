import React from 'react';
import img from "../../assets/img/img.jpg";

export default function OverlayCard() {
    return <div>
        <div className="card card-custom overlay">
            <div className="overlay-wrapper">
                <img src={img} className="w-100 rounded"/>
            </div>
            <div className="overlay-layer m-5 rounded flex-center">
                <div className="d-flex flex-column flex-center">
                    <a href="#" className="btn btn-danger">Shop</a>
                    <a href="#" className="font-size-h4 font-weight-bolder text-white text-hover-primary">Deal
                        of the Day</a>
                </div>
            </div>
        </div>
    </div>
}