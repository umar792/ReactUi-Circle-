﻿
# Welcome to ReactUi Circle!

The ReactUi Circle package provides you with a comprehensive UI for the frontend, along with fully customizable UI components.
With this package, you can effortlessly tailor your user interface to suit your specific needs.
Furthermore, it offers a seamless integration process, ensuring smooth operation across various platforms and devices

- **Live url.**
     available soon..


# prerequisites.

**React**, **React DOM**, and **React Icons**





## Use of Sidebar 

    import { SideBar} from  "reactui-circle";
    
    <SideBar iconStyle={{iconColor:  "black",
    right  :  10,
    top  :  15,
    size  :  30,
    position: ["fixed"]
    }}
    
    sideBarStyle={{
    backgroundColor  :  "purple",right  :  0,
    }}>
    // here pass your side bar all compoent as child
    <p>hello</p>
    </SideBar>

















## Props for sidebar


   iconStyle : {{
   crossIocn?:  React.ReactNode,
    iconColor?:  string,
    size?:  number,
    top?:  number,
    right?:  number,
    left?:  number,
    position?: ["absolute"  |  "fixed"]
    }}
    
   sideBarStyle?: {
backgroundColor?:  string,
left?:  number,
right?:  number
}
children?:  // your component

## Use of LeftNavbar

  

      import { LeftNavbar} from  "reactui-circle";
        
       <LeftNavbar
         bgColor='Gray'
         px={20}
       showNavbar={show}
       py={20}
    >
    <p  onClick={()=>  setshow(false)}>Helo</p>
    </LeftNavbar>

















