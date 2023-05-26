import { useState } from "react";

const useMyInput = (validationValueFunc) => {

    const [value, setValue] = useState('');
    const [wasInputThouched, setWasInputTouched] = useState(false);

    const isValueValid = validationValueFunc(value);
    const isInputInvalid = !isValueValid && wasInputThouched;

    const inputChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setWasInputTouched(true);
    };

    const resetInputStates = () =>{
        setValue('');
        setWasInputTouched(false);
    };

    return [value, isValueValid, isInputInvalid, inputChangeHandler, inputBlurHandler, resetInputStates ];

};

export default useMyInput;