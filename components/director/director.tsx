
import CalendarWrapper from "../calendar/calendar";

export default function Director() {
    return (
        <div className="p-2 mb-2">
            {/* Director */}
            <h1 className="title text-3xl">ผู้อำนวยการ</h1>

            <hr className="my-2" />

            <div className="border rounded-md p-2 mb-5 flex flex-col items-center justify-center space-y-2">
                <img
                    src="https://www.mhc9dmh.com/data/photo/807_%e0%b8%9c%e0%b8%ad%20%e0%b8%95%e0%b8%b8%e0%b9%88%e0%b8%a1.jpg"
                    alt="director-image"
                    className="w-[200px] mt-4 mb-2"
                />
                <h2 className="text-lg xl:text-xl">นางสาวศิริลักษณ์ แก้วเกียรติพงษ์</h2>
                <h4 className="text-md xl:text-lg">ผู้อำนวยการศูนย์สุขภาพจิตที่ 9</h4>
            </div>

            {/* Calendar */}
            <div className="border rounded-md p-2 h-auto">
                <h1 className="title text-xl">ปฏิทินกิจกรรม</h1>

                <hr className="mt-2" />

                <CalendarWrapper fullscreen={false} />

            </div>
        </div>
    )
}
