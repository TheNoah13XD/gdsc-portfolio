import { FC } from "react";
import { MaterialSymbol } from "material-symbols";

interface IconProps {
    type?: 'outlined' | 'rounded' | 'sharp';
    icon?: MaterialSymbol;
    className?: string;
}

const Icon: FC<IconProps> = ({type = 'outlined', icon, className}) => {

    const iconClassName = `material-symbols-${type} ${className} unselectable`;

    return (
        <span className={iconClassName}>{icon}</span>
    )
}

export default Icon;