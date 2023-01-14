import { useDispatch, useSelector } from "react-redux";
import { filter, price, rangePrice } from "../../store/slices/books";
import RangePrice from "../RangePrice";


export default function Filtros() {

    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    function handleSelect(e) {

        if (e.target.value === 'ASC' || e.target.value === 'DESC' || e.target.value === 'A-Z' || e.target.value === 'Z-A') {
            dispatch(price(e.target.value))
        }
        else {
            dispatch(filter(e.target.value))
        }

    }



    return (
        <div className='m-10 homeCards'>

            <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='ASC'>
                <option disabled>Price</option>
                <option value="ASC">Mayor a Menor </option>
                <option value="DESC">Menor a Mayor</option>
            </select>

            <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='A-Z'>
                <option disabled>Alphabetic</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>

            {
                books.allBookys.length > 0 ? (
                    <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='ALL'>
                        <option disabled>Genre</option>
                        <option value="ALL">ALL</option>
                        {
                            books?.allBookys?.map(e => {
                                return <option value={e.category} key={e.id}>{e.category}</option>
                            })
                        }
                    </select>
                ) : <h2>If you see this text, reload the page {`(press F5)`}</h2>
            }

            <RangePrice />

        </div>
    )

}