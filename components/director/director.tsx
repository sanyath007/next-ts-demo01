
// import CalendarWrapper from "../calendar/calendar";

export default function Director() {
    return (
        <div className="p-2 mb-2">
            {/* Director */}
            <h1 className="title text-3xl">ผู้อำนวยการ</h1>

            <hr className="my-2" />

            <div className="flex flex-col items-center justify-center space-y-2 pb-2">
                <div className="rounded-md overflow-hidden w-[180px] h-[240px] border mt-4 mb-2">
                    <img
                        src="https://www.mhc9dmh.com/data/photo/boss67.jpg"
                        alt="director-image"
                        className="w-full h-full"
                    />
                </div>
                <h2 className="font-bold">นายนิตย์ ทองเพชรศรี</h2>
                <h4>ผู้อำนวยการศูนย์สุขภาพจิตที่ 9</h4>
            </div>

            {/* Calendar */}
            {/* <div className="border rounded-md p-2 h-auto">
                <h1 className="title text-xl">ปฏิทินกิจกรรม</h1>

                <hr className="mt-2" />

                <CalendarWrapper fullscreen={false} />

            </div> */}
        </div>
    )
}
