const Modal = ({isOpen, children})=>{
    return(
        <>{isOpen ? children : "false"}</>
    )
}

export default Modal