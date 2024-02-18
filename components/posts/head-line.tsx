import Image from "next/image";
import { Post } from "../../models/Post";
import { rawMarkup } from "../../utils";

export default function HeadLine ({ headline }: { headline: Post }) {
    return (
        <div className="card">
            <div className="card-img-top overflow-hidden">
                {headline && headline.featured ? (
                    <Image
                        loader={() => `https://mhc9dmh.com/newweb/public/${headline.featured}`}
                        src={`https://mhc9dmh.com/newweb/public/${headline.featured}`}
                        alt="image"
                        width={500}
                        height={500}
                        className="w-full h-[300px]"
                    />
                ) : (
                    <Image
                        src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_960_720.jpg"
                        alt="image"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                )}
            </div>
            <div className="card-body bg-gray-200">
                <div className="opacity-60 w-full">
                    <h1 className="font-medium text-xl text-gray-800" dangerouslySetInnerHTML={rawMarkup(headline?.title!)}></h1>
                    <p className="lg:text-sm text-gray-600" dangerouslySetInnerHTML={rawMarkup(headline?.intro_text!)}></p>
                </div>
            </div>
        </div>
    )
}
