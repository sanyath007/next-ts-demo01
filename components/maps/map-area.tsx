import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import('./dynamic-map'), {
    ssr: false
})

export default function MapArea(props: any) {
    return (
        <section className="p-2">
            <h1 className="title text-3xl">Section&apos;s Title</h1>

            <div style={{ aspectRatio: props.width / props.height }}>
                <DynamicMap {...props} />
            </div>
        </section>
    )
}
