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
					<p className="index-headline">we are not new here, but <br /> we're constantly evolving!</p>
					<p className="index-detail">Embark on a captivating journey where fashion meets art, showcasing elegance, creativity, and the embodiment of individuality.</p>
				</div>
				<div className="index-thumbnail">
					<img src="/index-thumbnail.png" alt="index-thumbnail" className="thumbnail unselectable" />
					<Link href="/work/one" className="index-btn"><IconButton icon="north_east" /></Link>
				</div>
			</div>
		</>
	)
}
