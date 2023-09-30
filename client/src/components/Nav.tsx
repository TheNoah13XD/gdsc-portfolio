import { FC } from 'react';

// components
import 'material-symbols';
import { NavRail, NavItem } from "./ui/NavRail";

const Nav: FC = () => {
    return(
        <>
            <NavRail>
                <NavItem path="/" icon="home" label="Home" />
                <NavItem path="/work" icon="work" label="Work" />
                <NavItem path="/human" icon="person" label="Human" />
                <NavItem path="/contact" icon="alternate_email" label="Contact" />
            </NavRail>
        </>
    )
}

export default Nav;