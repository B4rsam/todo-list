import './textfield.scss'

const TextField = (props) => {
    return (
        <input {...props} ref={props.ref} id={props.id} className={`textField ${props.className}`} placeholder={props.placeholder} onChange={props.onChange} />
    )
}

export default TextField