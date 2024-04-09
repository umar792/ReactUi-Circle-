import * as React from 'react';
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

type PropsTye = {
    iconStyle?: {
        menuIocn?: React.ReactNode,
        crossIocn?: React.ReactNode,
        iconColor?: string,
        size?: number,
        top?: number,
        right?: number,
        left?: number,
        position?: ["absolute" | "fixed"]
    },
    sideBarStyle?: {
        backgroundColor?: string,
        left?: number,
        right?: number
    },
    children?: React.ReactNode,
}

const SideBar = ({ iconStyle, sideBarStyle, children }: PropsTye) => {
    const [ShowIocn, setShowIocn] = useState(false)

    return (
        <>
            <div className={`cursor-pointer ${iconStyle?.position || "absolute"}`}
                style={{
                    fontSize: iconStyle?.size || 20,
                    top: iconStyle?.top || 15,
                    left: iconStyle?.left,
                    right: iconStyle?.right,
                    color: iconStyle?.iconColor,
                }}
                onClick={() => setShowIocn(!ShowIocn)}
            >
                {
                    !ShowIocn ?
                        iconStyle?.menuIocn || <IoMenuSharp />
                        :
                        iconStyle?.crossIocn || <RxCross2 />

                }
            </div>

            {
                ShowIocn && <div className="fixed z-[100] inset-0 bg-[rgba(0,0,0,.4)] transition-opacity"></div>

            }
            <div id="sidebar-multi-level-sidebar" className={`fixed top-0  z-[111] w-64 h-screen duration-[500] transition-transform -translate-x-full 
            ${ShowIocn ? "translate-x-0" : (sideBarStyle?.right || sideBarStyle?.right === 0 ? "translate-x-[100%]" : "translate-x-[-100%]")
                }
                    ${sideBarStyle?.backgroundColor === "white" ? "!text-black border-l-[rgba(0,0,0,.4)]" : "text-white"}
            `} aria-label="Sidebar"
                style={{
                    backgroundColor: sideBarStyle?.backgroundColor || "black",
                    left: sideBarStyle?.left,
                    right: sideBarStyle?.right,
                    width: 300,


                }}

            >
                <div className="h-full px-3 py-4 overflow-y-auto "

                >
                    <p className={`cursor-pointer absolute top-[15px] right-[15px]`}
                        style={{
                            fontSize: iconStyle?.size || 20,
                            color: iconStyle?.iconColor,
                        }}
                        onClick={() => setShowIocn(!ShowIocn)} >
                        {iconStyle?.crossIocn || sideBarStyle?.right || sideBarStyle?.right === 0 ? <MdArrowForwardIos /> : <MdArrowBackIosNew />}
                    </p>
                    {children}
                </div>
            </div>



        </>
    )
}

export { SideBar };
