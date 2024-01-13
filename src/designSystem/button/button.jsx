import './button.scss'

const Button = (props) => {
    return (
        <button {...props} className={`button ${props.rounded ? 'button-rounded' : ''}`}title={props.title}>{props.children}</button>
    )
}

export default Button