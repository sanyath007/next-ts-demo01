import Image from "next/image";

export default function PostItem () {
    return (
        <div className="card file:w-full bg-white border rounded-md overflow-hidden">
            <div className="w-full" style={{ minHeight: '120px' }}>
                <img
                    src="https://cdn.pixabay.com/photo/2021/07/27/11/22/mountains-6496638_640.jpg"
                    className="w-full h-full"
                    alt="image"
                />
            </div>
            <div className="card-body p-3 mt-4 space-y-2">
                <h1>News Topic</h1>
                <p className="font-light text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, asperiores!
                </p>
            </div>
        </div>
    )
}
