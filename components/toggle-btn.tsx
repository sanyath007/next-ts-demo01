import { GiHamburgerMenu } from 'react-icons/gi'

export default function ToggleBtn ({ toggle, handleToggle, ...props }: { toggle: boolean, handleToggle: any }) {
    return (
        <button
            className="lg:hidden inline-flex items-center justify-center border h-10 w-10 rounded-md text-white outline-none focus:outline-none ml-auto"
            onClick={() => handleToggle(!toggle)}
        >
            <GiHamburgerMenu />
        </button>
    )
}
