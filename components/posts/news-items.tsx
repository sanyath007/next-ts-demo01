

export default function NewsItems() {
    return (
        <div className="px-2">
            <ul className="mt-2">
                {[1,2,3,4,5].map((item, index) => (
                    <li key={index}>
                        <span className="font-thin text-gray-400 text-sm">19-04-2566</span>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

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
