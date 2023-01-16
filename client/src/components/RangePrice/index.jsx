import { useEffect, useState } from "react";
import styles from './range.module.css'
import { useDispatch } from 'react-redux'
import { rangePrice } from "../../store/slices/books";

const priceGap = 1000;
const valueMin = 0;
const valueMax = 100000;

function RangePrice() {

<<<<<<< HEAD
    const [minPrice, setMinPrice] = useState(valueMin);
    const [maxPrice, setMaxPrice] = useState(valueMax);
=======
    const dispach = useDispatch()

    const [minPrice, setMinPrice] = useState(15000);
    const [maxPrice, setMaxPrice] = useState(85000);
>>>>>>> 1fd86a8de323056ffa998a85d46eaa5c5cb1a1f1
    const [range, setRange] = useState({ left: '25%', right: '75%' });

    const dispach = useDispatch();

    useEffect(()=>{
        dispach(rangePrice({minPrice,maxPrice}));
    },[minPrice,maxPrice])

    const handleInput = (e, inp) => {
        let value = (e.target.value);
        if (inp === 'min') {
            value = Math.min(value, maxPrice - priceGap);
            setMinPrice(value);
        } else {
            value = Math.max(value, minPrice + priceGap);
            setMaxPrice(value);
        }
        setRange({
            left: `${(minPrice / valueMax) * 100}%`,
            right: `${100 - (maxPrice / valueMax) * 100}%`,
        });
    };


    return (
        <div className={styles.divContSide}>
            <div className={styles.wrapper}>
                <h2 className='text-lg'>Price Range</h2>
                <div className={styles.priceInput}>
                    <div className={styles.field}>
                        <button className="btn gap-2">
                            Min
                            <div className="badge">{minPrice}</div>
                        </button>
                    </div>
                    <div className={styles.field}>
                        <button className="btn gap-2">
                            Max
                            <div className="badge">{maxPrice}</div>
                        </button>
                    </div>

                </div>
                <div className={styles.slider}>
                    <div className={styles.progress} style={range} />
                </div>
                <div className={styles.rangeInput}>
                    <input
                        type="range"
                        className={styles.rangeTe}
                        min={valueMin}
                        max={valueMax}
                        value={minPrice}
                        step={100}
                        onChange={(e) => handleInput(e, 'min')}
                    />
                    <input
                        type="range"
                        className={styles.rangeTe}
                        min={valueMin}
                        max={valueMax}
                        value={maxPrice}
                        step={100}
                        onChange={(e) => handleInput(e, 'max')}
                    />
                </div>
            </div>
        </div>
    );
};
export default RangePrice;