import { useNavigate } from "react-router-dom";

import "./PresentationCard.css";


interface Props {

    presentation:any;

}



function PresentationCard({
    presentation
}:Props){


    const navigate = useNavigate();



    return (

        <div

            className="presentation-card"

            onClick={()=>


                navigate(
                    `/presentation/${presentation.folder}`
                )


            }

        >



            <div className="preview">


                <img

                    src={
                        presentation.image
                    }

                    alt={
                        presentation.title
                    }

                />


                <div className="overlay">


                    <span>
                        View Slides
                    </span>


                </div>


            </div>





            <div className="card-content">


                <h3>

                    {presentation.title}

                </h3>




                <div className="meta">


                <span>

                {presentation.slides}{" "}
                Slides

                </span>
                                    


                    {/* <span>

                    Interactive

                    </span> */}


                </div>


            </div>




        </div>


    );

}


export default PresentationCard;