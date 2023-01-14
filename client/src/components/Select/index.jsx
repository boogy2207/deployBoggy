function Select({ value, handleChange, optionsMap, disabledPlaceHorder, className }) {

    return (
        <select
            className={className}
            value={value}
            name='language'
            onChange={handleChange}
        >
            <option value='' disabled>{disabledPlaceHorder}</option>
            {
                optionsMap.map((opt) => {
                    return (
                        <option key={opt} value={opt}>{opt}</option>
                    )
                })
            }
        </select >
    );
};
export default Select;