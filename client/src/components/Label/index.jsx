function Label({ classNameSpan, classNameInput, titleSpan, placeholder, value, handleChange, name, type }) {
    return (
        <label className={classNameSpan}>
            <span>{titleSpan}</span>
            <input
                className={classNameInput}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                name={name}
            />
        </label>
    );
};
export default Label;