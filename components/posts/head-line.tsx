import Image from "next/image";
import { Post } from "../../models/Post";
import { rawMarkup } from "../../utils";

export default function HeadLine ({ headline }: { headline: Post }) {
    return (
        <div className="card w-full bg-white border rounded-md overflow-hidden relative">
            <div className="w-auto h-[400px]">
                <picture>
                    {headline && headline.featured ? (
                        <img
                            src={`https://mhc9dmh.com/newweb/public/${headline.featured}`}
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
                <h1 className="font-medium text-2xl text-gray-800" dangerouslySetInnerHTML={rawMarkup(headline?.title!)}></h1>
                <p className="lg:text-lg text-gray-600" dangerouslySetInnerHTML={rawMarkup(headline?.intro_text!)}></p>
            </div>
        </div>
    )
}
