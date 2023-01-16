import Filters from "../Filters"

function MiniNavBar() {
    return (
        <div className="h-7 bg-[#00443B] w-full">
            <div className="dropdown ">
                <label tabIndex={0} className="badge badge-success m-1">Filters</label>
                <ul className="dropdown-content p-2 bg-base-100 rounded-box w-52">
                    <Filters />
                </ul>
            </div>
        </div >
    )
}
export default MiniNavBar