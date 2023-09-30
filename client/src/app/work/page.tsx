'use client'

// elements
import ElementOne from "@/components/elements/ElementOne"
import ElementTwo from "@/components/elements/ElementTwo"
import ElementThree from "@/components/elements/ElementThree"
import ElementFour from "@/components/elements/ElementFour"
import useFetch from "@/lib/strapi"

const WorkPage = () => {

    const { loading, error, data } = useFetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/works`);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

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