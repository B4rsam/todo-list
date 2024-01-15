import './button.scss'

const Button = (props) => {
    return (
        <button {...props} className={`button ${props.rounded ? 'button-rounded' : ''} ${props.cancel ? 'button-cancel' : ''} ${props.long ? 'button-long' : ''}`}title={props.title}>{props.children}</button>
    )
}

export default Button