import { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

function PriceRange({ onChange }) {
    const [value, setValue] = useState({ min: 0, max: 1000 });

    function handleChange(value) {
        setValue(value);
        onChange(value);
    }

    return (
        <InputRange
            className='bg-gray-300 h-10'
            minValue={0}
            maxValue={1000}
            value={value}
            onChange={handleChange}
        />
    );
}

export default PriceRange;