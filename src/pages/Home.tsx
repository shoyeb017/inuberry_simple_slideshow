import PresentationCard from "../components/Home/PresentationCard";

import "./Home.css";


interface PresentationData {

    id:string;

    title:string;

    folder:string;

    image:string;

    slides:number;

}





const images = import.meta.glob(
    "../assets/presentations/**/*.{png,jpg,jpeg,webp}",
    {
        eager:true,
        import:"default"
    }
);



function generatePresentations(){

    const data:Record<string,string[]>={};


    Object.entries(images).forEach(([path,url])=>{


        const parts = path.split("/");


        const folder =
            parts[
                parts.length-2
            ];



        if(!data[folder]){

            data[folder]=[];

        }


        data[folder].push(
            url as string
        );


    });





    return Object.entries(data).map(
        ([folder,slides],index)=>(


        {

            id:String(index),

            title:
                folder
                .replaceAll("_"," ")
                .replaceAll("-"," "),

            folder,

            image:
                slides[0],

            slides:
                slides.length


        } as PresentationData


        )

    );


}







function Home(){


    const presentations =
        generatePresentations();





return (


<div className="home">


<section className="hero">


<div className="hero-content">


<span>
PRESENTATION HUB
</span>


<h1>
Explore Interactive
<br/>
Slide Experiences
</h1>


<p>

Choose a presentation
and experience it as a
full interactive slideshow.

</p>


</div>


</section>






<section className="library">


<div className="library-header">


<div>

<h2>
Presentations
</h2>


<p>
    {`${presentations.length} available presentations`}
</p>


</div>


</div>







{

presentations.length === 0 ?


<div className="empty-state">


<h2>
No Presentations Found
</h2>


<p>
Add folders inside
assets/presentations
to display slides.
</p>


</div>


:


<div className="card-grid">


{

presentations.map(item=>(


<PresentationCard

key={item.id}

presentation={item}

/>


))


}


</div>


}





</section>


</div>


);


}


export default Home;