'use client'

import React from 'react';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MaterialSymbol } from 'material-symbols';

// Components
import Icon from './Icon';

interface NavRailProps {
    children: React.ReactNode;
}

interface NavItemProps {
    path: string;
    icon?: MaterialSymbol;
    label: string;
    isActive?: boolean;
}

const NavRail: FC<NavRailProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <nav className="rail">
            <div className="rail-content">
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { isActive: pathname === child.props.path } as { isActive: boolean } )
                    : child
            )}
            </div>
        </nav>
    );
};

const NavItem: FC<NavItemProps> = ({ path, icon, label, isActive }) => {
    
    const classNames = `destination-${isActive ? 'active' : 'item'}`;

    return (
        <Link href={path} className={classNames}>
            <div className="indicator">
                {icon && <Icon className="icon" icon={icon} />}
            </div>
            <span className="label">{label}</span>
        </Link>
    );
};

export { NavRail, NavItem };
