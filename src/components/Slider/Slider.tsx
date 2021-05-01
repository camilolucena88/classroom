import * as React from "react";
import {Frame, Page} from "framer"
import OverlayCard from "../OverlayCard/OverlayCard";

type Props = {
    top: string
}


export default function Slider ( children:Props ): JSX.Element {
    return (
            <Page
                overflow={"visible"}
                currentPage={1}
                width={550}
                height={350}
                radius={80}
                className={children.top}
            >
                <Frame><OverlayCard/></Frame>
                <Frame><OverlayCard/></Frame>
                <Frame><OverlayCard/></Frame>
                <Frame><OverlayCard/></Frame>
            </Page>
    );
};