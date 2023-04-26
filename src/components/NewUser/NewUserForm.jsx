import UserForm from "./UserForm";
import Modal from "../UI/Modal";
import { useState } from "react";

const NewUserForm = (props) => {

    const [isInvalid, setIsInvalid] = useState('');

    const getInputsDataHandler = (inputsData) => {
        props.getNewUser(inputsData);
    }

    return ( 
        <div className="w-1/2 h-auto min-h-[300px] shadow-sm shadow-cyan-500/50 rounded-xl mx-auto mt-10 py-10 px-5">
            <UserForm setIsInvalid={setIsInvalid} getInputsData={getInputsDataHandler}/>
            {
                isInvalid ? <Modal validationMessage={isInvalid} setIsInvalid={setIsInvalid}/> : ''
            }
        </div>
    );
}
 
export default NewUserForm;