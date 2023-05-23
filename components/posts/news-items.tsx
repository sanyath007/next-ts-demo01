import { ContentItem } from "../../models/ContentItem";
import { rawMarkup } from "../../utils";
import moment from "moment";

export default function NewsItems({ news }: { news: ContentItem[] }) {
    return (
        <div className="px-2">
            <ul className="mt-2">
                {news && news.map((item, index) => (
                    <li key={index}>
                        <span className="font-thin text-gray-400 text-sm">{moment(item.wdDate).format('DD-MM-YYYY')}</span>
                        <p className="text-sm" dangerouslySetInnerHTML={rawMarkup(item?.wdName!)}></p>

                        <hr className="my-2" />
                    </li>
                ))}
            </ul>
            <div className="text-center mt-4">
                <a href="#" className="text-xs border hover:border-0 rounded-sm py-1 px-3 hover:bg-blue-400 hover:text-white">
                    ข่าวทั้งหมด
                </a>
            </div>
        </div>
    )
}
