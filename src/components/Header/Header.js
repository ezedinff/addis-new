import React from 'react';
import Link from "next/link";

const Header = () => {
    const menus = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Malls",
            path: "/malls"
        },
        {
            title: "Hotels",
            path: "/hotels"
        },
        {
            title: "Shops",
            path: "/shops"
        }
    ]
    return (
        <div className="container max-width md:items-end">
            <ul className="flex md:items-end justify-end py-4">
                {
                    menus.map((menu) => <li className="mr-6" key={menu.title}>
                                            <Link href={menu.path} >
                                                <a >{menu.title}</a>
                                            </Link>
                                        </li>
                        )
                }

            </ul>
        </div>
    )
}

export default Header;