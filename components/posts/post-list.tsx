import HeadLine from "./head-line";
import PostItem from "./post-item";

export default function PostList () {
    return (
        <section className="p-2">
            <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">
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
                    <div className="lg:w-1/4 xl:w-2/6 flex flex-col text-center pl-4 pb-4 mb-2 space-y-2 hidden lg:block">
                        <div className="flex flex-col text-center border rounded-md p-2 mb-2 space-y-2">
                            <img
                                src="https://www.mhc9dmh.com/data/photo/807_%e0%b8%9c%e0%b8%ad%20%e0%b8%95%e0%b8%b8%e0%b9%88%e0%b8%a1.jpg"
                                alt="director-image"
                            />
                            <h2 className="text-lg xl:text-2xl">นางสาวศิริลักษณ์ แก้วเกียรติพงษ์</h2>
                            <h4 className="text-md xl:text-xl">ผู้อำนวยการศูนย์สุขภาพจิตที่ 9</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
