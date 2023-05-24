import Image from "next/image";
import { ContentItem } from "../../models/ContentItem";
import { rawMarkup, stripHtml } from "../../utils";

export default function PostItem ({ item }: { item: ContentItem }) {
    console.log(item);

    return (
        <div className="card w-full bg-white border rounded-md overflow-hidden">
            <div className="w-full">
                <picture>
                    {item.wdPic ? (
                        <img
                            src={`https://www.mhc9dmh.com/data/photo/${item.wdPic}`}
                            className="w-full h-[155px]"
                            alt="image"
                        />
                    ) : (
                        <img
                            src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_960_720.jpg"
                            className="w-full h-[155px]"
                            alt="image"
                        />
                    )}
                </picture>
            </div>
            <div className="card-body p-3 sm:mt-4 md:mt-0 space-y-2 overflow-hidden h-[220px] border">
                {/* <h1 className="font-medium text-xl" dangerouslySetInnerHTML={rawMarkup(item?.wdName!)}></h1> */}
                <h1 className="font-medium text-sm">
                    {stripHtml(item?.wdName!)}
                </h1>
                <p className="text-sm sm:text-sm text-gray-600" dangerouslySetInnerHTML={rawMarkup(item?.wdDesc!)}></p>
            </div>
        </div>
    )
}
