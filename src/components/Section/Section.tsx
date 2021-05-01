import React from 'react';
import SliderContainer from "../SliderContainer/SliderContainer";

export default function Section() {
    return <div>
        <main>
            <div className="grid">
                <div className="pb-20">
                    <SliderContainer title={"Actividades"}/>
                </div>
                <div className="py-20 my-20">
                    <SliderContainer title={"Libros"}/>
                </div>
                <div className="py-20 my-20">
                    <SliderContainer title={"Videos"}/>
                </div>
            </div>
        </main>
    </div>
}