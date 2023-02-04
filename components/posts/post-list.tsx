import PostItem from "./post-item";

export default function PostList () {
    return (
        <section>
            <h1 className="title text-3xl">Section&apos;s Title</h1>

            <div className="post-list md:columns-2 lg:columns-4 my-4 h-full space-y-2">
                {[1,2,3,4,5,6,7,8].map((item, index) => (
                    <PostItem key={index} />
                    ))}
            </div>
        </section>
    )
}
