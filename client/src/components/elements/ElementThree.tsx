import { FC } from "react";
import Link from "next/link";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementThreeProps {
    className?: string;
    data: any;
}

const ElementThree: FC<ElementThreeProps> = ({ className, data }) => {
    const { attributes } = data.data[2];
    const combinedClassName = `element-3${className ? ` ${className}` : ''}`;

    return (
        <div className={combinedClassName}>
            <img src={attributes.thumbnail} alt="three" />
            <Link href={attributes.link}><IconButton icon="north_east" /></Link>
        </div>
    )
}

export default ElementThree;