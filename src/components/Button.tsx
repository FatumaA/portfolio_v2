import { IconBaseProps } from 'react-icons'

type props = {
    btnText: string;
    icon?: IconBaseProps;
}

const Button = ( { btnText, icon }: props ) => {
    return (
        <button className="btn-primary flex flex-row justify-center">
             { icon && <div> {icon} </div> }
            <div> {btnText} </div>     
        </button>
    )
}

export default Button
