import { useState } from "react";
import styles from './range.module.css'

const priceGap = 1000;
const valueMin = 0;
const valueMax = 10000;

function RangePrice() {

    const [minPrice, setMinPrice] = useState(2500);
    const [maxPrice, setMaxPrice] = useState(7500);
    const [range, setRange] = useState({ left: '25%', right: '75%' });

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