import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { Presentation } from "../../types/presentation";

import useKeyboard from "../../hooks/useKeyboard";
import useFullscreen from "../../hooks/useFullscreen";

import Toolbar from "../Toolbar/Toolbar";
import ProgressBar from "../ProgressBar/ProgressBar";
import ThumbnailBar from "../Thumbnail/ThumbnailBar";

import "./SlideViewer.css";


interface Props {
    presentation: Presentation;
}


function SlideViewer({
    presentation
}: Props) {


    const [current, setCurrent] = useState(0);

    const [showControls, setShowControls] = useState(true);

    const [isHoveringPanel, setIsHoveringPanel] = useState(false);


    const hideTimer = useRef<number | null>(null);



    const clearHideTimer = () => {

        if(hideTimer.current){

            clearTimeout(hideTimer.current);

            hideTimer.current = null;

        }

    };




    const resetControls = () => {


        setShowControls(true);


        clearHideTimer();



        hideTimer.current = window.setTimeout(()=>{


            if(!isHoveringPanel){

                setShowControls(false);

            }


        },1000);


    };





    const keepControls = () => {


        setIsHoveringPanel(true);


        setShowControls(true);


        clearHideTimer();


    };





    const releaseControls = () => {


        setIsHoveringPanel(false);


        resetControls();


    };







    useEffect(()=>{


        resetControls();



        return()=>{

            clearHideTimer();

        };


    },[]);









    const nextSlide = useCallback(()=>{


        setCurrent(prev =>

            Math.min(
                prev + 1,
                presentation.slides.length - 1
            )

        );


    },[
        presentation.slides.length
    ]);







    const previousSlide = useCallback(()=>{


        setCurrent(prev =>

            Math.max(
                prev - 1,
                0
            )

        );


    },[]);







    useKeyboard({

        nextSlide,

        previousSlide

    });







    const {
        toggleFullscreen,
        isFullscreen

    } = useFullscreen();







    const changeSlide = (index:number)=>{


        setCurrent(index);


        resetControls();


    };








    return (


        <div


            className="viewer"


            onMouseMove={resetControls}


        >





            <AnimatePresence mode="wait">


                <motion.img


                    key={current}


                    className="main-slide"


                    draggable={false}



                    initial={{

                        opacity:0

                    }}



                    animate={{

                        opacity:1

                    }}



                    exit={{

                        opacity:0

                    }}



                    transition={{

                        duration:.3

                    }}



                    src={
                        presentation
                        .slides[current]
                        .image
                    }



                    alt={`slide-${current+1}`}


                />


            </AnimatePresence>









            {
                showControls &&

                <motion.div


                    className="toolbar-wrapper"


                    initial={{
                        opacity:0
                    }}


                    animate={{
                        opacity:1
                    }}



                    onMouseEnter={keepControls}


                    onMouseLeave={releaseControls}


                >


                    <Toolbar


                        title={
                            presentation.title
                        }


                        nextSlide={
                            nextSlide
                        }


                        previousSlide={
                            previousSlide
                        }


                        fullscreen={
                            toggleFullscreen
                        }


                        isFullscreen={
                            isFullscreen
                        }


                    />


                </motion.div>


            }









            {
                showControls &&


                <motion.div


                    className="thumbnail-wrapper"


                    initial={{
                        opacity:0
                    }}


                    animate={{
                        opacity:1
                    }}



                    onMouseEnter={keepControls}


                    onMouseLeave={releaseControls}



                >


                    <ThumbnailBar


                        presentation={
                            presentation
                        }


                        current={
                            current
                        }


                        changeSlide={
                            changeSlide
                        }


                    />


                </motion.div>


            }









            {
                showControls &&


                <motion.div


                    className="bottom-info"


                    initial={{
                        opacity:0
                    }}


                    animate={{
                        opacity:1
                    }}



                    onMouseEnter={keepControls}


                    onMouseLeave={releaseControls}



                >



                    <div className="slide-number">


                        {current + 1}

                        /

                        {presentation.slides.length}


                    </div>





                    <ProgressBar


                        current={
                            current + 1
                        }


                        total={
                            presentation.slides.length
                        }


                    />



                </motion.div>


            }





        </div>


    );

}


export default SlideViewer;