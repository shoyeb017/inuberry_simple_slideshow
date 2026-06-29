import { useEffect } from "react";


interface Props {

    nextSlide:()=>void;

    previousSlide:()=>void;

}



export default function useKeyboard({

    nextSlide,

    previousSlide

}:Props){


useEffect(()=>{


const handleKey=(e:KeyboardEvent)=>{


    switch(e.key){


        case "ArrowRight":

        case " ":

        case "Enter":

            nextSlide();

            break;



        case "ArrowLeft":

            previousSlide();

            break;



        case "Home":

            previousSlide();

            break;



        case "End":

            nextSlide();

            break;


    }


};



window.addEventListener(
    "keydown",
    handleKey
);



return()=>{

window.removeEventListener(
    "keydown",
    handleKey
);


};


},[
    nextSlide,
    previousSlide
]);


}