import Link from "next/link"

export default function NavLogo() {
    return (
        <a href="/" className="flex items-center justify-between gap-2">
            <picture className="logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88.png"
                    alt="logo"
                />
            </picture>
            <div className="flex flex-col justify-center max-md:hidden">
                <h2 className="p-0 text-3xl">ศูนย์สุขภาพจิตที่ 9</h2>
                <p className="p-0 text-sm">Mental Health Center 9</p>
            </div>
        </a>
    )
}