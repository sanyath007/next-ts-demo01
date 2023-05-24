import Image from "next/image";
import { ContentItem } from "../../models/ContentItem";
import { rawMarkup } from "../../utils";

export default function HeadLine ({ headline }: { headline: ContentItem }) {
    console.log(headline);

    return (
        <div className="card w-full bg-white border rounded-md overflow-hidden relative">
            <div className="w-auto h-[400px]">
                <picture>
                    {headline && headline.wdPic ? (
                        <img
                            src={`https://www.mhc9dmh.com/data/photo/${headline.wdPic}`}
                            className="w-full h-[155px]"
                            alt="image"
                        />
                    ) : (
                        <img
                            src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_960_720.jpg"
                            className="w-full"
                            alt="image"
                        />
                    )}
                </picture>
            </div>
            <div className="card-body p-3 mt-4 space-y-1 absolute bg-gray-200 opacity-60 bottom-0 w-full">
                <h1 className="font-medium text-2xl text-gray-800" dangerouslySetInnerHTML={rawMarkup(headline?.wdName!)}></h1>
                <p className="lg:text-lg text-gray-600" dangerouslySetInnerHTML={rawMarkup(headline?.wdDesc!)}></p>
            </div>
        </div>
    )
}
