import HeadLine from "./head-line";
import PostItem from "./post-item";
import { Post } from "../../models/Post";

export default function PostList ({ contents, headline } : { contents: Post[], headline: Post }) {
    return (
        <div className="p-2 mb-2">
            <h1 className="title text-3xl">ข่าวกิจกรรม</h1>

            <hr className="my-2" />

            <div className="row">
                <div className="col-md-8">
                    <HeadLine headline={headline} />
                </div>
                <div className="col-md-4 p-0">
                    {contents && contents.map((item: Post) => (
                        <PostItem key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <div className="text-center mt-4">
                <a href="#" className="text-xs border hover:border-0 rounded-sm py-1 px-3 hover:bg-blue-400 hover:text-white">
                    ข่าวทั้งหมด
                </a>
            </div>
        </div>
    )
}
