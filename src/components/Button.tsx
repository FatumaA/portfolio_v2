import { IconBaseProps } from 'react-icons'

type props = {
    btnText: string;
    icon?: IconBaseProps;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button = ( { btnText, icon, type }: props ) => {
    return (
        <button type={type} className="btn-primary flex flex-row justify-center">
             { icon && <div> {icon} </div> }
            <div> {btnText} </div>     
        </button>
    )
}

export default Button
