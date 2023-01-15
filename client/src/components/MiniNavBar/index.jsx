function MiniNavBar() {
    return (
        <div className="h-7 bg-[#00443B] w-full">
            <div className="dropdown ">
                <label tabIndex={0} className="badge m-1">Alphabetic</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="dropdown ">
                <label tabIndex={0} className="badge m-1">Categorie</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="dropdown ">
                <label tabIndex={0} className="badge m-1">Price</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div >
    )
}
export default MiniNavBar