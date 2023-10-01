import { FC } from "react";

interface ToastProps {
    message: string;
    visible?: boolean;
}

const Toast: FC<ToastProps> = ({message, visible = false}) => {

    return (
        <div className={visible ? "toast" : "toast-hidden"}>
            <p>{message}</p>
        </div>
    )
}

export default Toast;