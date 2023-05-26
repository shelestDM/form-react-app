import { useState } from "react";

const useInput = (validateValueFunc) => {
    const [value, setValue] = useState('');
    const [wasInputTouched, setWasInputTouched] = useState(false);

    const isValueValid = validateValueFunc(value);
    const isInputInValid = !isValueValid && wasInputTouched;

    const inputChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const inputBlurHandler = () => {
        setWasInputTouched(true);
    }

    const resetInputValues = () => {
        setValue('');
        setWasInputTouched(false);
    }

    return [value, isInputInValid, isValueValid, inputChangeHandler, inputBlurHandler, resetInputValues ]
};

export default useInput;