import type { Presentation } from "../../types/presentation";

import "./ThumbnailBar.css";


interface Props {

    presentation: Presentation;

    current: number;

    changeSlide: (index:number)=>void;

}



function ThumbnailBar({
    presentation,
    current,
    changeSlide

}:Props){


    return (

        <div className="thumbnail-bar">


            {
                presentation.slides.map((slide,index)=>(


                    <div

                        key={slide.id}

                        className={
                            current===index
                            ?
                            "thumbnail active"
                            :
                            "thumbnail"
                        }


                        onClick={()=>
                            changeSlide(index)
                        }

                    >

                        <img
                            src={slide.image}
                            alt={`slide-${index}`}
                        />


                    </div>


                ))
            }


        </div>

    );

}


export default ThumbnailBar;