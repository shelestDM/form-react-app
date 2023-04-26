const Button = (props) => {
    return (
        <button type={props.data.type} className="w-full rounded-xl bg-blue-900 text-white py-2">
           {props.data.text}
        </button>
     );
}
 
export default Button;