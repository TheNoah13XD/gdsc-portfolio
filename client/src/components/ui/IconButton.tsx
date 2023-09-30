import { FC } from "react";
import { MaterialSymbol } from "material-symbols";

// components
import Icon from "./Icon";

interface IconButtonProps {
    disabled?: boolean;
    className?: string;
    type?: 'filled' | 'tonal' | 'outlined' | 'text';
    icon: MaterialSymbol;
}

const IconButton: FC<IconButtonProps> = ({ disabled, className, type = 'filled', icon }) => {

    const buttonClassName = `${type}-iconbtn pointer${className ? ` ${className}` : ''}`;

    return (
        <button className={buttonClassName} disabled={disabled}>
            {icon && <Icon className="icon" icon={icon} />}
        </button>
    )
}

export default IconButton;