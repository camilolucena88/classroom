import React from 'react';
import Slider from "../Slider/Slider";

type Props = {
    title: string
}

export default function SliderContainer(children: Props): JSX.Element {
    return <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl text-left font-medium title-font mb-2 text-gray-900">
                            {children.title}
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                <Slider top={""}/>
            </div>
        </section>
    </div>
}