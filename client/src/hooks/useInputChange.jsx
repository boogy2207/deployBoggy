import { useState } from "react";
import validate from "../helpers/validates";

function useInputChange(initialStateValues = {}, initialStateErrors = {}) {

    const [values, setValues] = useState(initialStateValues);
    const [errors, setErrors] = useState(initialStateErrors);

    const handleChange = (e, extraData) => {
        if (!!extraData) {
            setValues({
                ...values,
                [e.target.name]: extraData,
            });
            setErrors(
                validate({
                    ...errors,
                    [e.target.name]: extraData,
                })
            );
            return;
        }
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate({
                ...errors,
                [e.target.name]: e.target.value,
            })
        );
    }

    return { values, errors, handleChange };
}
export default useInputChange;