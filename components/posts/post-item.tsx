import Image from "next/image";

export default function PostItem () {
    return (
        <div className="card w-full bg-white border rounded-md overflow-hidden">
            <div className="w-full">
                <img
                    src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_960_720.jpg"
                    className="w-full"
                    height={120}
                    alt="image"
                />
            </div>
            <div className="card-body p-3 sm:mt-4 md:mt-0 space-y-2">
                <h1 className="font-medium text-xl">News Topic</h1>
                <p className="font-normal sm:text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, velit nam facere nostrum dolor saepe dicta necessitatibus architecto molestias distinctio.
                </p>
            </div>
        </div>
    )
}
