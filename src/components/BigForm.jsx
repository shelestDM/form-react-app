import styled from "@emotion/styled";
import useMyInput from "../hooks/useMyInput";
import CustomButton from "./CustomButton";

const BigForm = () => {

    const [
        nameValue,
        isNameValueValid,
        isNameInputInvalid,
        nameInputChangeHandler,
        nameInputBlurHandler,
        resetNameInputStates
    ] = useMyInput(value => value.trim().length >= 3);

    const [
        secondNameValue,
        isSecondNameValueValid,
        isSecondNameInputInvalid,
        secondNameInputChangeHandler,
        secondNameInputBlurHandler,
        resetSecondNameInputStates
    ] = useMyInput(value => value.trim().length >= 3);

    const [
        emailValue,
        isEmailValueValid,
        isEmailInputInvalid,
        emailInputChangeHandler,
        emailInputBlurHandler,
        resetEmailInputStates
    ] = useMyInput(value => value.includes('@'));

    let isFormInalid = true;

    if(isEmailValueValid && isSecondNameValueValid && isNameValueValid){
        isFormInalid = false;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('name: ', nameValue, secondNameValue, emailValue);
        resetNameInputStates();
        resetSecondNameInputStates();
        resetEmailInputStates();
    };

    const nameInputClasses = !isNameInputInvalid ? 'bg-green-200' : 'bg-red-200';
    const secondNameInputClasses = !isSecondNameInputInvalid ? 'bg-green-200' : 'bg-red-200';
    const emailInputClasses = !isEmailInputInvalid ? 'bg-green-200' : 'bg-red-200';


    return (
        <form onSubmit={submitHandler} className="flex flex-row flex-wrap gap-5 bg-blue-500 py-4 px-5 mt-10 rounded-xl w-1/2 mx-auto">
            <FormBlock>
                <label htmlFor="name">Enter your name</label>
                <Input
                    className={nameInputClasses}
                    type="text"
                    id="name"
                    value={nameValue}
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {isNameInputInvalid && <p className="text-red-900 font-bold">The name input value cant be less 3 symbols</p>}
            </FormBlock>
            <FormBlock>
                <label htmlFor="second__name">Enter your second name</label>
                <Input
                    className={secondNameInputClasses}
                    type="text"
                    id="second__name"
                    value={secondNameValue}
                    onChange={secondNameInputChangeHandler}
                    onBlur={secondNameInputBlurHandler}
                />
                {isSecondNameInputInvalid && <p className="text-red-900 font-bold">The second name input value cant be less 3 symbols</p>}
            </FormBlock>
            <FormBlock>
                <label htmlFor="email">Enter your email</label>
                <Input
                    className={emailInputClasses}
                    type="email"
                    id="email"
                    value={emailValue}
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                />
                {isEmailInputInvalid && <p className="text-red-900 font-bold">U need enter your email</p>}
            </FormBlock>
            <div className="self-end">
                <CustomButton disabled={isFormInalid} type={'submit'} title={'Send'} />
            </div>
        </form>
    );
}

export default BigForm;

const FormBlock = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 45%;
    color: white;
`

const Input = styled('input')`
    max-width: 200px;
    box-shadow: 0px 0px 5px 2px #e8eaf6;
    border-radius: 10px;
    padding: 10px;
    color: blue;

    &:focus {
        outline: none;
        border: 2px solid blue;
    }
`