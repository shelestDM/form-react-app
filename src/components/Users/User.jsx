const User = (props) => {
    return ( 
        <div className="w-[90%] mx-auto text-white bg-blue-500 rounded-xl px-4 py-3 ">
            Name: {props.user.name} - Age: {props.user.age}
        </div>
     );
}
 
export default User;