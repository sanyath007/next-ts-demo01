import { useEffect, useState } from "react";
import { Post } from "../../models/Post";
import NewsItems from "./news-items";

export default function NewsList ({ news }: { news: Post[] }) {
    const [jobNews, setJobNews] = useState<Post[]>([]);
    const [poNews, setPoNews] = useState<Post[]>([]);
    const [othNews, setOthNews] = useState<Post[]>([]);

    useEffect(() => {
        if (news) {
            setJobNews(news.filter((item: Post) => item.category_id === 3).slice(4));
            setPoNews(news.filter((item: Post) => item.category_id === 4));
            setOthNews(news.filter((item: Post) => item.category_id === 5).slice(4));
        }
    }, [news]);

    return (
        <div className="p-2 mb-2">
            <h1 className="title text-3xl">ข่าวประชาสัมพันธ์</h1>

            <hr className="my-2" />

            <div className="flex gap-4 mt-4">
                <div className="lg:w-1/4 xl:w-2/6">
                    <h3>ข่าวรับสมัครงาน</h3>

                    <NewsItems news={jobNews} />
                </div>

                <div className="lg:w-1/4 xl:w-2/6">
                    <h3>ข่าวจัดซื้อจัดจ้าง</h3>

                    <NewsItems news={poNews} />
                </div>

                <div className="lg:w-1/4 xl:w-2/6">
                    <h3>ข่าวประกาศอื่นๆ</h3>

                    <NewsItems news={othNews} />
                </div>
            </div>
        </div>
    )
}