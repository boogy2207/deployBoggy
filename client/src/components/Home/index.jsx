import Cards from "../Card";
import Filters from "../Filters/Filters";
import Carousel from "../Carousel";

export default function Home() {

    return (
        <div className="mt-10 m-80">
            <Carousel />
            <Filters />
            <Cards />
        </div>
    )
}
