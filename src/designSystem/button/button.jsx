import './button.scss'

const Button = (props) => {

    const btnType = () => {
        switch(props.type)
        {
            case "rounded":
                return "button-rounded";
            case "long":
                return "button-long";
            case "cancel":
                return "button-cancel";
        }
    }

    return (
        <button {...props} className={`button ${btnType()} ${props.className}`}title={props.title}>{props.children}</button>
    )
}

export default Button