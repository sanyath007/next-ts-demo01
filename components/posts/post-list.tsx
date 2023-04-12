import CalendarWrapper from "../calendar/calendar";
import HeadLine from "./head-line";
import PostItem from "./post-item";

export default function PostList () {
    return (
        <div className="p-2">
            <h1 className="title text-3xl">ข่าวประชาสัมพันธ์</h1>

            <hr className="my-2" />

            <div className="flex gap-4">
                <div className="w-full lg:w-3/4 xl:4/6">
                    <HeadLine />

                    <div className="post-list md:columns-2 lg:columns-4 mt-4 h-full space-y-2">
                        {[1,2,3,4].map((item, index) => (
                            <PostItem key={index} />
                            ))}
                    </div>
                </div>

                <div className="lg:w-1/4 xl:w-2/6 flex flex-col text-center pl-4 pb-4 mb-2 space-y-2 sm:hidden lg:block">
                    {/* Director */}
                    <div className="border rounded-md p-2 mb-4 flex flex-col items-center justify-center space-y-2">
                        <img
                            src="https://www.mhc9dmh.com/data/photo/807_%e0%b8%9c%e0%b8%ad%20%e0%b8%95%e0%b8%b8%e0%b9%88%e0%b8%a1.jpg"
                            alt="director-image"
                            className="w-[180px] mt-4"
                        />
                        <h2 className="text-lg xl:text-xl">นางสาวศิริลักษณ์ แก้วเกียรติพงษ์</h2>
                        <h4 className="text-md xl:text-lg">ผู้อำนวยการศูนย์สุขภาพจิตที่ 9</h4>
                    </div>

                    {/* Calendar */}
                    <div className="border rounded-md p-2 mb-4 h-auto">
                        <CalendarWrapper fullscreen={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}
