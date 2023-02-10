import Image from "next/image";

export default function HeadLine () {
    return (
        <div className="card w-full bg-white border rounded-md overflow-hidden relative">
            <div className="w-auto" style={{ height: '480px' }}>
                <img
                    src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_960_720.jpg"
                    className="w-full"
                    alt="image"
                />
            </div>
            <div className="card-body p-3 mt-4 space-y-1 absolute bg-gray-200 opacity-60 bottom-0">
                <h1 className="font-medium text-2xl text-gray-800">News Topic</h1>
                <p className="lg:text-lg text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti ea, eius ullam fuga placeat, necessitatibus ratione totam ipsam quia voluptatum! Numquam corrupti et at maxime cupiditate voluptas optio commodi!
                </p>
            </div>
        </div>
    )
}
