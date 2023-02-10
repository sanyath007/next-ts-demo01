

export default function VideoList () {
    return (
        <section className="p-2">
            <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">
                <h1 className="title text-3xl">สื่อสุขภาพจิต</h1>

                <hr className="my-2" />

                <div className="flex flex-row gap-2 bg-white rounded-md overflow-hidden">
                    <div className="left w-2/3 bg-gray-400 border">
                        <div className="w-100 relative" style={{ height: '360px' }}>
                            <div className="absolute bottom-0 h-10 w-full bg-gray-300 flex flex-row justify-between items-center px-4">
                                <a href="#" className="hover:text-gray-200">Video 1</a>
                                <a href="#" className="text-black hover:text-gray-500 rounded-full bg-white hover:bg-gray-300 px-4">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="right w-1/3 flex flex-col gap-4 bg-gray-400 p-3">
                        <div className="w-full flex flex-row gap-3">
                            <div className="w-1/2 flex justify-center items-center bg-white" style={{ height: '150px' }}>
                                Video 2
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p className="font-thin text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, fugiat?</p>
                                <button className="p-2 mt-4 bg-indigo-400 hover:bg-indigo-700 rounded-full">
                                    View
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-row gap-3">
                            <div className="w-1/2 flex justify-center items-center bg-white" style={{ height: '150px' }}>
                                Video 3
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p className="font-thin text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, fugiat?</p>
                                <button className="p-2 mt-4 bg-indigo-400 hover:bg-indigo-700 rounded-full">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}