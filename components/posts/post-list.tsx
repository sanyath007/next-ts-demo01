import HeadLine from "./head-line";
import PostItem from "./post-item";

interface ContentItem {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export default function PostList ({ contents } : { contents: any }) {
    return (
        <div className="p-2 mb-2">
            <h1 className="title text-3xl">ข่าวกิจกรรม</h1>

            <hr className="my-2" />

            <HeadLine />

            <div className="post-list md:columns-2 lg:columns-3 mt-4 h-full space-y-2">
                {contents && contents.map((item: ContentItem) => (
                    <PostItem key={item.id} item={item} />
                ))}
            </div>
            <div className="text-center mt-4">
                <a href="#" className="text-xs border hover:border-0 rounded-sm py-1 px-3 hover:bg-blue-400 hover:text-white">
                    ข่าวทั้งหมด
                </a>
            </div>
        </div>
    )
}
