import { useParams } from "react-router-dom";

import SlideViewer from "../components/Viewer/SlideViewer";



const images = import.meta.glob(
    "../assets/presentations/**/*.{png,jpg,jpeg,webp}",
    {
        eager:true,
        import:"default"
    }
);





function PresentationPage(){


    const { folder } = useParams();





const slides = Object.entries(images)

    .filter(([path]) =>
        path.includes(`/presentations/${folder}/`)
    )

    .sort(([pathA], [pathB]) => {

        const fileA = pathA.split("/").pop() || "";
        const fileB = pathB.split("/").pop() || "";

        const numA = parseInt(fileA.match(/\d+/)?.[0] || "0", 10);
        const numB = parseInt(fileB.match(/\d+/)?.[0] || "0", 10);

        return numA - numB;

    })

    .map(([_, url], index) => ({

        id: index,

        image: url as string

    }));








    const presentation = {


        id: folder || "unknown",


        folder: folder || "",



        thumbnail:

            slides.length > 0

            ?

            slides[0].image

            :

            "",




        title:


            (folder || "")

            .replaceAll("_"," ")

            .replaceAll("-"," "),




        slides

    };








    return (

        <SlideViewer

            presentation={
                presentation
            }

        />

    );


}





export default PresentationPage;