import React from "react";
import CustomButton from "./CustomButton";
import { styled } from "@mui/material";
import useInput from "../hooks/useInput";


const CustomFormComponent = () => {

    const validateName = name => name.trim() !== "";
    const [ 
        nameValue, 
        isNameInputInvalid, 
        isNameValid, 
        nameInputChangeHandler, 
        nameInputBlurHandler, 
        resetNameInputValue
    ] 
    =  useInput(validateName);

    const validateEmail = email => email.includes('@');
    const [ 
        emailValue, 
        isEmailInputInvalid, 
        isEmailValid, 
        emailInputChangeHandler, 
        emailInputBlurHandler, 
        resetemailInputValue
    ] 
    =  useInput(validateEmail);

    let isFormValid = false;

    if (isNameValid && isEmailValid) {
        isFormValid = true;
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        console.log('submit: ', nameValue, emailValue);
        resetNameInputValue();
        resetemailInputValue();
    };


    const inputNameClasses = isNameInputInvalid ? 'bg-red-300' : 'bg-white';
    const inputEmailClasses = isEmailInputInvalid ? 'bg-red-300' : 'bg-white';

    return (
        <CustomForm onSubmit={formSubmitHandler}>
            <div className="flex flex-col gap-3">
                <label htmlFor='name'>Enter your name</label>
                <Input
                    className={inputNameClasses}
                    value={nameValue}
                    type="text"
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {isNameInputInvalid && <p className="text-red-500 font-bold">Name field cant be empty</p>}
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor='email'>Enter your email</label>
                <Input
                    className={inputEmailClasses}
                    value={emailValue}
                    type="email"
                    id='email'
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                />
                {isEmailInputInvalid && <p className="text-red-500 font-bold">Email field must contain @ character</p>}
            </div>

            <CustomButton disabled={!isFormValid} type={'submit'} title={'Send'} />
        </CustomForm>
    );
}

export default React.memo(CustomFormComponent);

const CustomForm = styled('form')`
    display: flex;
    flex-direction:column;
    gap: 25px;
    width: 50%;
    margin: auto;
    background: #bbdefb;
    padding: 20px;
    border-radius: 12px;
    margin-top: 50px;
`
const Input = styled('input')`
    max-width: 200px;
    box-shadow: 0px 0px 5px 5px #e8eaf6;
    border-radius: 10px;
    padding: 10px;

    &:focus {
        outline: none;
        border: 2px solid blue;
    }
    
`