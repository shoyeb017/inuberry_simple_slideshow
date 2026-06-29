import "./ProgressBar.css";


interface Props{

    current:number;

    total:number;

}



function ProgressBar({
    current,
    total
}:Props){


const percentage=
(current/total)*100;



return(

<div className="progress-wrapper">


<div

className="progress"

style={{
    width:`${percentage}%`
}}

>


</div>


</div>


);


}


export default ProgressBar;