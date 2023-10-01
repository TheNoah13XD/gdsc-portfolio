'use client'

import { FC, useState } from "react";
import Link from "next/link";

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import Toast from "../ui/Toast";

interface ElementOneProps {
    className?: string;
    data: any;
}

const ElementOne: FC<ElementOneProps> = ({ className, data }) => {

    const [visible, setVisible] = useState(false);

    const { attributes } = data.data[0];
    const combinedClassName = `element-1${className ? ` ${className}` : ''}`;

    const share = () => {
        navigator.clipboard.writeText(window.location.href);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 2000);
    }

    return (
        <>
            <Toast visible={visible}  message="Copied to cliboard! Thanks!" />
            <div className={combinedClassName}>
                <div className="display-f align-i-e">
                    <img src="/shapes/1.png" alt="one" />
                    <Link href={attributes.link}><IconButton icon="north_east" /></Link>
                </div>
                <div className="element-1-column">
                    <div onClick={share}><Button icon="share" type="filled">Share</Button></div>
                </div>
            </div>
        </>
    )
}

export default ElementOne;