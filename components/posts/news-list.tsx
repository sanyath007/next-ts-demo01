import { useEffect, useState } from "react";
import { ContentItem } from "../../models/ContentItem";
import NewsItems from "./news-items";

export default function NewsList ({ news }: { news: ContentItem[] }) {
    const [jobNews, setJobNews] = useState<ContentItem[]>([]);
    const [poNews, setPoNews] = useState<ContentItem[]>([]);
    const [othNews, setOthNews] = useState<ContentItem[]>([]);

    useEffect(() => {
        if (news) {
            setJobNews(news.filter((item: ContentItem) => item.wdType === "Job").slice(4));
            setPoNews(news.filter((item: ContentItem) => item.wdType === "Purchase2"));
            setOthNews(news.filter((item: ContentItem) => item.wdType === "Gallery").slice(4));
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