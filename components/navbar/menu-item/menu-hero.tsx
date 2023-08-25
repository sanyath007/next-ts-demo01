import React from 'react'

const MenuHero = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <div className="hero">
            <div className="wrapper lazy-bg">
                <h2 className="color0">รู้จักเรา</h2>
                <p className="color0"></p>
                <picture>
                    <img
                        className="lazy-img"
                        src={imgSrc}
                        alt=""
                    />
                </picture>
            </div>
        </div>
    )
}

export default MenuHero