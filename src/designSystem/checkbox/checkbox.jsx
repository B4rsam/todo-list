import './checkbox.scss'

const Checkbox = (props) => {
    return (
        <input {...props} id={props.id} type='checkbox' className='checkbox' defaultChecked={props.state}>{props.children}</input>
    )
}

export default Checkbox