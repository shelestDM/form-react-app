const Modal = (props) => {

    const hideModal = (event) => {
        if(event.target.localName !== 'p'){
            props.setIsInvalid('');
        }
    }

    return (
        <div onClick={hideModal} className="w-screen h-screen backdrop-blur-sm absolute top-0 left-0 flex items-center justify-center">
            <div className="w-1/2 h-[200px] mb-20 bg-blue-500 text-white text-xl rounded-xl text-center">
                <p className="h-[60%] flex justify-center items-center">
                    {props.validationMessage}
                </p>
                <button
                    onClick={hideModal}
                    className="rounded-xl bg-green-500 py-2 px-3 hover:bg-green-700 active:scale-90">
                    Close modal
                </button>
            </div>
        </div>
    );
}

export default Modal;