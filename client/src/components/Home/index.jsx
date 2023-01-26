import Cards from "../Card";
import Carousel from "../Carousel";
import RangePrice from "../RangePrice";
import wall0 from "../../assets/wallpaper0.jpg";
import wall1 from "../../assets/wallpaper1.jpg";
import Filters from "../Filters";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {

    return (
        <div className="flex flex-col">
            <div className="justify-center mt-10 mx-10 carrApear mb-20">
                <Carousel />
            </div>
            {/* <div className="hero min-h-screen" style={{ backgroundImage: `url(${wall0})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello World!</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}


            {/* <h1 className="mb-5 text-5xl font-bold mt-10 text-center">Discover our Collections</h1>
            <div className="justify-center mt-10 mx-36 carrApear">
                <Carousel />
            </div>
            <div>
                <RangePrice />
            </div>
            <div className="mx-36">
                <Cards />
            </div> */}

            <div className="card flex justify-center lg:card-side bg-base-100 mb-20">
                <div className="flex justify-center lg:card-side lg:card lg:w-full lg:max-w-sm">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <Filters />
                        <RangePrice />
                    </div>
                </div>
                <div className="card-body">
                    <h1 className="text-2xl">Search your next adventure</h1>
                    <SearchBar />
                    <Cards />
                </div>
            </div>




            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={wall1} className="max-w-xs rounded-lg shadow-2xl md:max-w-md xl:max-w-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">We expand our stock weekly!</h1>
                        <p className="py-6 text-2xl">If you can't find the book you are looking for, or if you have any questions, please contact us!</p>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea type="text" placeholder="Message 📩" className="textarea textarea-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
