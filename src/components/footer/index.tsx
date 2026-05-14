import { FaWhatsapp } from "react-icons/fa"

export const Footer = () => {
    return (
        <>
            <div className="absolute bottom-0 flex justify-between w-full bg-[#1c1c1cb9] text-white " style={{padding: '1em',}}>
                <div className="flex gap-2">
                    <b className="text-md">Nebula barber</b>
                    <b className="text-md">Copyright 2026&copy;</b>
                </div>
                <div className="flex gap-2">
                    <a href='https://wa.me/555181637935?text=Olá,%20tenho%20interesse%20em%20te%20contratar%20como%20Jovem%20Aprendiz' className="flex group gap-2 items-center justify-center hover:underline cursor-pointer" >
                        Whatsapp
                        <FaWhatsapp size={20} className="group-hover:text-emerald-500 transition-colors duration-150"/>
                    </a>
                </div>
            </div>
        </>
    )
}