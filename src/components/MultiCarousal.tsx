import * as React from 'react'
import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination} from 'swiper/modules';
import "./styles/MultiSlideCarousal.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


interface  MultiSlideCarousalProps {
  topArrow?: boolean,
  iconColor? : string,
  topArrowBorderColor? : string
  IconSize? : number,
  breakPoints? : {},
  Component?  : any,
  data? : any[],
  Carousalheight? : number,
}


// --- default breakpoints 
const defaultbreakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20
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
}


const MultiCarousal = ({ topArrow,iconColor ,topArrowBorderColor,IconSize, breakPoints ,Component,data,Carousalheight }: MultiSlideCarousalProps) => {

  const swiperRef = useRef<any>(null);


  const goNext = () => {
    if (swiperRef.current && swiperRef?.current?.swiper) {
      swiperRef.current?.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>

      {/* ---- Top Arrow  */}
      {
        topArrow &&
        <div className='flex justify-end place-items-center gap-3 my-3 px-3'>
          <button className=' flex p-[4px] justify-center place-items-center rounded-full'
            onClick={goPrev}
            style={{
              border: `2px solid ${topArrowBorderColor || "rgba(0,0,0,.1)"}`
            }}
          >
            <IoIosArrowBack className=' duration-100'
              style={{
                color:iconColor ? iconColor : "black",
                fontSize: `${IconSize || 30}px`

              }}

            />
          </button>
          <button className='p-[4px] flex justify-center place-items-center  rounded-full'
            onClick={goNext}
            style={{
              border: `2px solid ${topArrowBorderColor || "rgba(0,0,0,.1)"}`
            }}
          >
            <IoIosArrowForward className=' duration-100'
              style={{
                color:iconColor ? iconColor : "black",
                fontSize: `${IconSize || 30}px`
              }}

            />
          </button>
        </div>


      }

      {/* ==============  */}
      <Swiper

        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination,]}
        className='mySwiper px-[10px] relative'
        ref={swiperRef}
        breakpoints={
          breakPoints? breakPoints : defaultbreakpoints
        }

      >
        {
          data?.map((item:any, index:number) => {
            return (
              <SwiperSlide className='flex justify-center place-items-center shrink-0 multiSlider_box'
                key={index}
                style={{
                  height: Carousalheight ? `${Carousalheight}px` : "400px",
                  backgroundColor: "transparent",
                }}
              >
                
                {/* <h2>Bos{index + 1}</h2> */}
                <Component item={item}/>
              </SwiperSlide>
            )
          })
        }


        {
          !topArrow &&
          <>
            <button className='absolute top-0 left-0 w-[50px]  h-[100%] z-[9999] flex justify-center place-items-center'>
              <IoIosArrowBack className=' hover:text-[38px] duration-100'
                style={{
                  color:iconColor ? iconColor : "black",
                  fontSize: `${IconSize || 35}px`
                }}
                onClick={goPrev}
                
              />
            </button>
            <button className='absolute top-0 right-0 w-[50px]  h-[100%] z-[9999] flex justify-center place-items-center'>
              <IoIosArrowForward className=' hover:text-[38px] duration-100'
                style={{
                  color:iconColor ? iconColor : "black",
                  fontSize: `${IconSize || 35}px`
                }}
                onClick={goNext}
              />
            </button>
          </>
        }




      </Swiper>
    </>

  )
}


export {MultiCarousal};
