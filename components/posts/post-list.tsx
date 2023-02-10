import HeadLine from "./head-line";
import PostItem from "./post-item";

export default function PostList () {
    return (
        <section className="p-2">
            <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">
                <h1 className="title text-3xl my-2">ข่าวประชาสัมพันธ์</h1>

                <div>
                    <HeadLine />

                    <div className="post-list md:columns-2 lg:columns-4 my-4 h-full space-y-2">
                        {[1,2,3,4].map((item, index) => (
                            <PostItem key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
