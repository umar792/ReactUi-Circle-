import * as React from 'react';
import { ReactNode, useState } from "react";
import "./styles/Navebar.css";


interface Navebar {
    bgColor?: string,
    py?: number,
    px?: number,
    children: ReactNode,
    showNavbar: boolean,

}

const LeftNavbar = ({ bgColor, children, px, py, showNavbar }: Navebar) => {

    return (

        <div className={`w-full ${showNavbar ? "react_ui_circle_navbar_div_collapes react_ui_circle_navbar_div" : "react_ui_circle_navbar_div"}`}
            style={{
                backgroundColor: bgColor,
                padding: `${py}px ${px}px`,
            }}
        >
            {children}
        </div>
    )
}


export {LeftNavbar};
