'use client'

import { FC } from "react";
import Link from "next/link";

// auth
import { useAuth } from "@/context/AuthContext"
import Auth from "@/components/Auth"
import { Ring } from '@uiball/loaders'

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

const HumanPage: FC = ({}) => {

	const { user, loading } = useAuth();

	if (!user && loading) {
		return (
			<div className="display-f w-full h-full justify-c align-i-c">
				<Ring />
			</div>
		)
	} else if (!user && !loading) {
		return (
			<Auth />
		)
	}

    return (
        <>
            <div className="human-container">
                <div className="basics">
                    <p className="brand">Broken</p>
                    <p className="tagline">WAIT, WHO?</p>
                    <Link href="/work"><Button icon="arrow_forward">Work</Button></Link>
                </div>
                <div className="work-around">
                    <p>Noah, broken as an alter ego. I don't like descriptions.</p>
                    <img src="/shapes/5.png" alt="five" />
                    <Link href="/contact"><IconButton icon="north_east" /></Link>
                </div>
                <div className="redirect">
                    <p>Better choice to be noticed, is not to be noticed.</p>
                    <div>
                        <p>See my primary portfolio!</p>
                        <Link href="https://thebrokenxd.design/"><IconButton icon="north_east" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HumanPage;