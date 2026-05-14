import { useState } from "react"    
import { FaCut } from "react-icons/fa";
import { FiHome, FiInfo, FiStar } from "react-icons/fi";
import { Link } from 'react-scroll';
import styled from "styled-components";

const Links = styled(Link)`
    position: relative;
    color: white;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        opacity: 0;
        transition: .3s;
    }

    &:hover::before {
        opacity: 1;
    }
`;


export const NavBarHeader = () => {
    const [lis]= useState([
        { label: 'Home', href: 'home', icon: <FiHome size={20} />, id: 1 },
        { label: 'Barbeiros', href: 'barbers', icon: <FiInfo size={20} />, id: 2 },
        { label: 'Avaliar', href: 'schedule', icon: <FiStar size={20} />, id: 3 },
        { label: 'Ver cortes', href: 'courteous', icon: <FaCut size={17} />, id: 4, style: 'md:flex hidden' },
    ]);

    

    return (
        <>
            <aside className="w-[90%] m-auto">
                <nav className="w-full">
                    <ul className="flex justify-center items-center w-full gap-7 flex-wrap">
                        {lis.map((item) => (
                            <li key={item.id} className="text-black">
                                <Links to={item.href} className={`flex items-center justify-between group gap-2 ${item.style}`}><i className="group-hover:scale-110 transition-all duration-300">{item.icon}</i> {item.label}</Links>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}