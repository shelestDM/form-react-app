const UserInput = (props) => {

    const getInputValue = (event) =>{
        props.setValue(event.target.value);
    }

    return (  
        <div className="space-y-2">
            <label htmlFor={props.data.htmlFor}>
                {props.data.label}
            </label>
            <input 
            name={props.data.htmlFor}
            value={props.value}
            onChange={getInputValue}
            className="border border-blue-500 rounded-md py-2 px-3 w-full focus:border-green-500 focus:outline-none" 
            type={props.data.type} 
            placeholder={props.data.placeholder}/>
        </div>
    );
}
 
export default UserInput;