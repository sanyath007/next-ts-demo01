import Image from "next/image";
import { ContentItem } from "../../models/ContentItem";

export default function HeadLine ({ headline }: { headline: ContentItem }) {
    console.log(headline);

    return (
        <div className="card w-full bg-white border rounded-md overflow-hidden relative">
            <div className="w-auto h-[400px]">
                <picture>
                    <img
                        src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_960_720.jpg"
                        className="w-full"
                        alt="image"
                    />
                </picture>
            </div>
            <div className="card-body p-3 mt-4 space-y-1 absolute bg-gray-200 opacity-60 bottom-0">
                <h1 className="font-medium text-2xl text-gray-800">{headline && headline.wdName}</h1>
                <p className="lg:text-lg text-gray-600">
                    {headline && headline.wdDesc}
                </p>
            </div>
        </div>
    )
}
