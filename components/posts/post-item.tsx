import Image from "next/image";
import { Post } from "../../models/Post";
import { rawMarkup, stripHtml } from "../../utils";

export default function PostItem ({ item }: { item: Post }) {
    console.log(item);

    return (
        <div className="card w-full bg-white border rounded-md overflow-hidden">
            <div className="w-full">
                <picture>
                    {item.featured ? (
                        <img
                            src={`https://www.mhc9dmh.com/newweb/public/${item.featured}`}
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
