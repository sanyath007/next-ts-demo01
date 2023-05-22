import Image from "next/image";

export default function PostItem ({ item }: { item: any }) {
    console.log(item);

    return (
        <div className="card w-full bg-white border rounded-md overflow-hidden">
            <div className="w-full">
                <picture>
                    <img
                        src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_960_720.jpg"
                        className="w-full h-[155px]"
                        alt="image"
                    />
                </picture>
            </div>
            <div className="card-body p-3 sm:mt-4 md:mt-0 space-y-2 overflow-hidden h-[220px] border">
                <h1 className="font-medium text-xl">{item.title}</h1>
                <p className="font-normal sm:text-sm text-gray-600">
                    {item.body}
                </p>
            </div>
        </div>
    )
}
