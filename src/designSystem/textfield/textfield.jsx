const TextField = (props) => {
    return (
        <input {...props} ref={props.ref} id={props.id} className={props.className} placeholder={props.placeholder} />
    )
}

export default TextField