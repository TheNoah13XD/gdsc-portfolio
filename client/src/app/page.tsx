import Link from "next/link";

// components
import IconButton from "@/components/ui/IconButton";

export default function Home() {
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
