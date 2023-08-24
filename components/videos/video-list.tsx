import VideoHero from "./video-hero";


export default function VideoList () {
    return (
        <div className="p-2 mb-2">
            <h1 className="title text-3xl">สื่อสุขภาพจิต</h1>

            <hr className="my-2" />

            <div className="flex flex-row max-lg:flex-col gap-2 bg-white rounded-md overflow-hidden">
                <div className="left w-2/3 max-lg:w-full border rounded-tl-md rounded-bl-md max-lg:rounded-tl-md max-lg:rounded-tr-md overflow-hidden">
                    <VideoHero />
                </div>
                <div className="right w-1/3 max-lg:w-full flex flex-col gap-4 bg-gray-400 p-3">
                    {[1,2,3].map((video, index) => (
                        <div className="w-full flex flex-row gap-3">
                            <div className="w-1/2 max-lg:w-3/12 max-lg:h-[80px] flex justify-center items-center bg-white h-[135px] rounded-md">
                                Video {index+1}
                            </div>
                            <div className="flex flex-col w-1/2 max-lg:w-3/4 relative">
                                <p className="font-thin text-sm text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, fugiat?</p>
                                <div className="absolute bottom-0">
                                    <button className="p-[5px] px-4 mt-4 bg-indigo-400 hover:bg-indigo-700 hover:text-white rounded-full">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}