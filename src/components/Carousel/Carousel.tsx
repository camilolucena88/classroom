import React, {ReactNode, MouseEvent, SFC} from 'react'
import App from "../../App";

type Props = { onClick(e: MouseEvent<HTMLElement>): void}
const Carousel: SFC<Props> = ({onClick: handleClick, children}) => (
    <button onClick={handleClick}>{children}</button>
)

export default Carousel;