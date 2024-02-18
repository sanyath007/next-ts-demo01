import Image from "next/image";
import { Post } from "../../models/Post";
import { rawMarkup, stripHtml } from "../../utils";

export default function PostItem ({ item }: { item: Post }) {
    return (
        <div className="bg-white flex flex-row justify-center items-start mb-2">
            <div className="w-[40%] h-[110px] object-contain rounded-sm overflow-hidden">
                {item.featured ? (
                    <Image
                        loader={() => `https://mhc9dmh.com/newweb/public/${item.featured}`}
                        src={`https://mhc9dmh.com/newweb/public/${item.featured}`}
                        alt="image"
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                ) : (
                    <Image
                        src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_960_720.jpg"
                        alt="image"
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                )}
            </div>
            <div className="w-[60%] px-3">
                {/* <h1 className="font-medium text-xl" dangerouslySetInnerHTML={rawMarkup(item?.wdName!)}></h1> */}
                {item?.title! ? (
                    <h1 className="font-medium text-sm">
                        {item?.title! ? stripHtml(item?.title!) : ''}
                    </h1>
                ) : null}
                {/* <p className="text-sm sm:text-sm text-gray-600" dangerouslySetInnerHTML={rawMarkup(item?.intro_text!)}></p> */}
            </div>
        </div>
    )
}
