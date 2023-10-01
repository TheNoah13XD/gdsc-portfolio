import { FC } from "react";
import Link from "next/link";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementFourProps {
    className?: string;
    data: any;
}

const ElementFour: FC<ElementFourProps> = ({ className, data }) => {
    const { attributes } = data.data[3];
    const combinedClassName = `element-4${className ? ` ${className}` : ''}`;

    return (
        <div className={combinedClassName}>
            <Link href="/shapes/4.png"><IconButton icon="north_east" /></Link>
            <img src={attributes.thumbnail} alt="four" />
        </div>
    )
}

export default ElementFour;