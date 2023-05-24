import moment from "moment";
import { FaClock } from "react-icons/fa"
import { ContentItem } from "../../models/ContentItem";
import { rawMarkup, stripHtml } from "../../utils";

export default function NewsItems({ news }: { news: ContentItem[] }) {
    return (
        <div className="px-2">
            <ul className="mt-2">
                {news && news.map((item, index) => (
                    <li key={index}>
                        <div className="news-topic">
                            <FaClock size={"12px"} className="text-gray-600" />
                            <span className="font-thin text-gray-400 text-xs">{moment(item.wdDate).format('DD-MM-YYYY')}</span>
                        </div>
                        {/* <p className="text-sm" dangerouslySetInnerHTML={rawMarkup(item?.wdName!)}></p> */}
                        <p className="font-normal text-sm">
                            <span className="bg-red-500 px-1 py-[2px] rounded-lg mr-1">{item.wdId}</span>{stripHtml(item?.wdName!)}
                        </p>

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
