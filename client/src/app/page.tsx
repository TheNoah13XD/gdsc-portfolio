'use client'

import Link from "next/link";

// auth
import { useAuth } from "@/context/AuthContext"
import Auth from "@/components/Auth"
import { Ring } from '@uiball/loaders'

// components
import IconButton from "@/components/ui/IconButton";

export default function Home() {

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
			<div className="display-f justify-b h-full">
				<div className="display-f flex-column justify-b index-container">
					<p className="index-headline">Hey! Noah here,<br />a full-stack developer. </p>
					<p className="index-detail">I've been doing freelance in motion, graphic, web design and development for about four years now. Here are some of my works.</p>
				</div>
				<div className="index-thumbnail">
					<img src="/index-thumbnail.png" alt="index-thumbnail" className="thumbnail unselectable" />
					<Link href="/work" className="index-btn"><IconButton icon="north_east" /></Link>
				</div>
			</div>
		</>
	)
}
