import Cards from "../Card";
import Carousel from "../Carousel";
import { useEffect } from "react";
import RangePrice from "../RangePrice";

export default function Home() {

    return (
        <div className="flex flex-col">
            <div className="flex justify-center mt-10 mx-36 ">
                <Carousel />
            </div>
            <div>
                <RangePrice />
            </div>
            <div className="mx-36">
                <Cards />
            </div>
        </div>
    )
}
