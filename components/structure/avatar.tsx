import React from 'react'

const StructureAvatar = ({ size }: { size?: string | null }) => {
    return (
        <div className="relative border rounded-full overflow-hidden bg-white" style={{ width: size || '60px' }}>
            <img src="./executive-01.png" alt="executive-pic" style={{ width: size || '60px' }} />
        </div>
    )
}

export default StructureAvatar