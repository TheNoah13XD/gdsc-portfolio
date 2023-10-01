'use client'

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// auth
import { useAuth } from "@/context/AuthContext";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface ScenarioProps {
    className?: string;
}

const Scenario: FC<ScenarioProps> = ({ className }) => {

    const pathname = usePathname();

    const { user, loading } = useAuth();

    const contextTexts: { [key: string]: string } = {
        '/': 'It\'s hot!',
        '/work': 'Portfolio',
        '/human': 'Oh, Me!',
        '/contact': 'Hyped?',
    }

    const contextText = contextTexts[pathname] || 'It\'s hot!';

    return(
        <>
            <div className={`scenario${className ? ` ${className}` : ''}`}>
                <div className='display-f flex-column grid-margin-1'>
                    <img src='/logo.png' alt='logo' className='grid-column-width-1 unselectable' />
                    <div className='socials'>
                        <Link href="#" className='on-surface-text'><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link href="#" className='on-surface-text'><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link href="#" className='on-surface-text'><FontAwesomeIcon icon={faEnvelope} /></Link>
                    </div>
                </div>
                <div className="context grid-margin-1">
                    <p className='context-text'>{!user ? 'Hello!' : contextText}</p>
                </div>
            </div>
        </>
    )
}

export default Scenario;