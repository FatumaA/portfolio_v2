import { IconBaseProps } from 'react-icons'
import { icons } from 'react-icons/lib'

type props = {
    btnText: string;
    iconText?: string;
    icon?: IconBaseProps;
}

const Button = ({btnText, icon}: props) => {
    return (
        // <div>
            <button className="btn-primary">
                <div>{btnText}</div>
                <div>{icon}</div>
            </button>
        /* </div> */
    )
}

export default Button
