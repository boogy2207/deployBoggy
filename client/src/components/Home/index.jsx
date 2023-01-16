import Cards from "../Card";
import Filters from "../Filters/Filters";
import Carousel from "../Carousel";
import { useEffect } from "react";

export default function Home() {

    //no quitar evita un bug
    useEffect(()=>{

    },[])

    return (
        <div className="mt-10 m-80">
            <Carousel />
            <Filters />
            <Cards />
        </div>
    )
}
