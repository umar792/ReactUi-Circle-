
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

## Use of Multi Carousal

  Just call the component from reactui-circle and pass it some props and it will work, you can pass any react component as Component props then you can get return item in your react component and use it easily   

  

     import {MultiCarousal} from  "reactui-circle";
     const data = [
     {
     // here your object data
     }
    ]
    // breakpoints for responsive
    const  defaultbreakpoints  = {
    
    0: {
        slidesPerView:  3,
        spaceBetween:  20
    },
    500: {
       slidesPerView: 2,
       spaceBetween: 20
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20
     },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20
     },
     1550: {
      slidesPerView: 5,
      spaceBetween: 20
     }
    };
    
    // now just call the component and pass some props to it
    <MultiCarousal
    IconSize={80}
    iconColor='blue'
    topArrow={true}
    Component={DataCom}
    data={data}
    breakPoints={defaultbreakpoints}
    Carousalheight={450}
    />
    
   // and you can pass the component like any of react component ,


    
    const  DataCom  = ({item}:any)=>{
    return (
    <div  className='w-[100%] h-[100%] border-2 rounded-lg overflow-hidden'>
    <img  src={item?.image}  alt=""  className='w-[100%] h-[250px]'  />
    <h1  className='my-2 font-bold px-3 text-[25px]'>{item?.heading}</h1>
    <p  className='px-3'>{item?.description?.slice(0,100)}...</p> 
    <p  className='my-[10px] font-extrabold px-3'>Sold {item?.sold}</p>
    </div>
    )
    };















