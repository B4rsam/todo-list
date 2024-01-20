import './checkbox.scss'

const Checkbox = (props) => {
    return (
        <input {...props} id={props.id} type='checkbox' className={`checkbox ${props.className}`} defaultChecked={props.state} />
    )
}

export default Checkbox