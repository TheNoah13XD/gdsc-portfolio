import { FC } from "react";

interface GridProps {
    children: React.ReactNode;
    className?: string;
}

interface ColProps {
    children: React.ReactNode;
    col?: string;
    start?: string;
    extraWidth?: boolean;
    extraStart?: boolean;
    extraEnd?: boolean;
    extraLMargin?: boolean;
    extraRMargin?: boolean;
    className?: string;
}

const Grid: FC<GridProps> = ({ children, className }) => {

    const combinedClassName = `grid-container${className ? ` ${className}` : ''}`;

    return (
        <div className={combinedClassName}>
            {children}
        </div>
    )
}

const Col: FC<ColProps> = ({ children, col, start, extraWidth, extraStart, extraEnd, extraLMargin, extraRMargin, className }) => {

    const classNames = [
        col ? `col-span-${col}` : '',
        start ? `col-start-${start}` : '',
        extraWidth ? 'col-extra-width' : '',
        extraStart ? 'col-extra-start' : '',
        extraEnd ? 'col-extra-end' : '',
        extraLMargin ? 'col-extra-start-margin' : '',
        extraRMargin ? 'col-extra-end-margin' : '',
    ].join(' ');

    return (
        <div className={`col ${classNames}` + (className ? ` ${className}` : '')}>
            {children}
        </div>    
    )
}

export { Grid, Col };