'use client'

// strapi
import useFetch from "@/lib/strapi"

// auth
import { useAuth } from "@/context/AuthContext"
import Auth from "@/components/Auth"
import { Ring } from '@uiball/loaders'

// components
import ElementOne from "@/components/elements/ElementOne"
import ElementTwo from "@/components/elements/ElementTwo"
import ElementThree from "@/components/elements/ElementThree"
import ElementFour from "@/components/elements/ElementFour"

const WorkPage = () => {

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

    const { fetching, error, data } = useFetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/works`);

    if (fetching) return (
        <div className="display-f w-full h-full justify-c align-i-c">
            <Ring />
        </div>
    )
    if (error) return <Ring />

    return (
        <>
            <div className="work-container">
                <div className="work-row">
                    <ElementOne data={data} />
                    <ElementTwo data={data} />
                </div>
                <div className="work-row">
                    <ElementThree data={data} />
                    <ElementFour data={data} />
                </div>
            </div>
        </>
    )
}

export default WorkPage;