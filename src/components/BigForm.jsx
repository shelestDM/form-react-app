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

    console.log(useMyInput(value => value.trim().length >= 3));


    const submitHandler = (e) => {
        e.preventDefault();
        console.log('name: ', nameValue);
        resetNameInputStates();
    };

    const nameInputClasses = !isNameInputInvalid ? 'bg-green-200' : 'bg-red-200';

    return (
        <form onSubmit={submitHandler} className="flex items-end flex-row gap-5 bg-blue-500 py-4 px-5 mt-10 rounded-xl w-1/2 mx-auto">
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
            <div>
                <CustomButton disabled={false} type={'submit'} title={'Send'} />
            </div>
        </form>
    );
}

export default BigForm;

const FormBlock = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 40%;
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