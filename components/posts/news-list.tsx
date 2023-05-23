import { ContentItem } from "../../models/ContentItem";
import NewsItems from "./news-items";

export default function NewsList ({ news }: { news: ContentItem[] }) {
    console.log(news);

    return (
        <div className="p-2 mb-2">
            <h1 className="title text-3xl">ข่าวประชาสัมพันธ์</h1>

            <hr className="my-2" />

            <div className="flex gap-4 mt-4">
                <div className="lg:w-1/4 xl:w-2/6">
                    <h3>ข่าวรับสมัครงาน</h3>

                    <NewsItems news={news} />
                </div>

                <div className="lg:w-1/4 xl:w-2/6">
                    <h3>ข่าวจัดซื้อจัดจ้าง</h3>

                    <NewsItems news={news} />
                </div>

                <div className="lg:w-1/4 xl:w-2/6">
                    <h3>ข่าวประกาศอื่นๆ</h3>

                    <NewsItems news={news} />
                </div>
            </div>
        </div>
    )
}