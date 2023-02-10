import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function ToggleBtn ({ toggle, handleToggle, ...props }: { toggle: boolean, handleToggle: any }) {
    return (
        <button
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 text-white outline-none focus:outline-none ml-auto"
            onClick={() => handleToggle(!toggle)}
        >
            {toggle ? <AiOutlineClose size="25" /> : <AiOutlineMenu size="25" />}
        </button>
    )
}
