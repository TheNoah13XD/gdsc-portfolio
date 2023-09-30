import { FC } from 'react';

interface SceneProps {
    children: React.ReactNode;
    className?: string;
}

const Scene: FC<SceneProps> = ({children, className}) => {

    const combinedClassName = `scene${className ? ` ${className}` : ''}`;

    return(
        <>
            <div className={combinedClassName}>
                {children}
            </div>
        </>
    )
}

export default Scene;