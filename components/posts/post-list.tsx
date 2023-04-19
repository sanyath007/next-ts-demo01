import HeadLine from "./head-line";
import PostItem from "./post-item";

export default function PostList () {
    return (
        <div className="p-2 mb-2">
            <h1 className="title text-3xl">ข่าวกิจกรรม</h1>

            <hr className="my-2" />

            <HeadLine />

            <div className="post-list md:columns-2 lg:columns-4 mt-4 h-full space-y-2">
                {[1,2,3,4].map((item, index) => (
                    <PostItem key={index} />
                ))}
            </div>
        </div>
    )
}
