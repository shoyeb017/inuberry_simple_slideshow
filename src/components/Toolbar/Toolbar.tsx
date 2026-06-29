import {
    MdFullscreen,
    MdFullscreenExit,
    MdArrowBack,
    MdArrowForward
} from "react-icons/md";


import "./Toolbar.css";



interface Props {

    title:string;

    nextSlide:()=>void;

    previousSlide:()=>void;

    fullscreen:()=>void;

    isFullscreen:boolean;

}



function Toolbar({
    title,
    nextSlide,
    previousSlide,
    fullscreen,
    isFullscreen

}:Props){


return(

<div className="toolbar">


    <h3>
        {title}
    </h3>



    <div className="toolbar-actions">


        <button onClick={previousSlide}>
            <MdArrowBack/>
        </button>


        <button onClick={nextSlide}>
            <MdArrowForward/>
        </button>



        <button onClick={fullscreen}>

            {
                isFullscreen

                ?

                <MdFullscreenExit/>

                :

                <MdFullscreen/>

            }

        </button>


    </div>


</div>

);


}


export default Toolbar;