import React from 'react'

const VideoHero = () => {
    return (
        <div className="w-100 h-[460px] relative">
            <div className="flex justify-center items-center relative">
                <iframe
                    width="873"
                    height="420"
                    src="https://www.youtube.com/embed/b5YsSxrnZb8"
                    title="3 รู้...อยู่...รอด อำเภอเนินสง่า จังหวัดชัยภูมิ"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="absolute bottom-0 h-11 w-full bg-gray-300 flex flex-row justify-between items-center px-4">
                <a href="#" className="hover:text-white">3 รู้...อยู่...รอด อำเภอเนินสง่า จังหวัดชัยภูมิ</a>
                <a href="#" className="text-black rounded-full bg-white px-4 py-[3px] hover:bg-gray-500 hover:text-white hover:border hover:border-white">
                    View
                </a>
            </div>
        </div>
    );
}

export default VideoHero