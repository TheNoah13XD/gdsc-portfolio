import { FC } from "react";
import { MaterialSymbol } from "material-symbols";

// components
import Icon from "./Icon";

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    type?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    icon?: MaterialSymbol;
}

const Button: FC<ButtonProps> = ({ children, disabled, className, type = 'filled', icon }) => {
    
    const buttonClassName = `${type}-btn`;
    const iconElement = icon ? <Icon className="btn-icon" icon={icon} /> : null;

    return (
        <div className={className}>
            <button className={buttonClassName} disabled={disabled}>
                {iconElement}
                <span className="btn-label">{children}</span>
            </button>
        </div>
    )
}

export default Button;