import { useState } from "react";
import Button from "../UI/Button";
import UserInput from "../UI/UserInput";

const UserForm = (props) => {

    const [nameInputValue, setNameInputValue] = useState('');
    const [ageInputValue, setAgeInputValue] = useState('');

    const getDataFromInputsHandler = (event) => {
        event.preventDefault();
        inputValidation();
    };

    const inputValidation = () => {
        if (!nameInputValue.trim() && !ageInputValue.trim()) {
            props.setIsInvalid('Please, set values in inputs');
            return;
        } else if (!nameInputValue.trim()) {
            props.setIsInvalid('Name area cant be empty');
            return;
        } else if (!ageInputValue.trim()) {
            props.setIsInvalid('Age area cant be empty');
            return;
        } else {
            sendInputsDataToParent();
        }
    };

    const sendInputsDataToParent = () => {
        clearInputs();
        props.getInputsData(createUserObj());
    }

    const createUserObj = () => {
        return {
            name: nameInputValue,
            age: ageInputValue,
            id: new Date().toISOString()
        };
    }

    const clearInputs = () => {
        setNameInputValue('');
        setAgeInputValue('');
    }


    const dataForInputs = [
        {
            label: 'Name',
            type: 'text',
            htmlFor: 'name',
            placeholder: 'Enter your name'
        },
        {
            label: 'Age',
            type: 'number',
            htmlFor: 'age',
            placeholder: 'Enter your age'
        },
    ];

    const dataForButton = {
        text: 'Add user',
        type: 'submit'
    };

    return (

        <form onSubmit={getDataFromInputsHandler} >
            <div className="flex flex-col gap-y-5">
                <UserInput setValue={setNameInputValue} value={nameInputValue} data={dataForInputs[0]} />
                <UserInput setValue={setAgeInputValue} value={ageInputValue} data={dataForInputs[1]} />
                <Button data={dataForButton} />
            </div>
        </form>
    );
}

export default UserForm;