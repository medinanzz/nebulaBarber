import { Outlet } from "react-router-dom";
import { HeaderPage } from "./components/header";
import { Footer } from "./components/footer";
import { useEffect } from "react";
import Swal from "sweetalert2";
// import { Cursor } from "./cursor";
export function Layout() {
    useEffect(() => {
        const isVisited = localStorage.getItem('visited');

        if (!isVisited) {
            Swal.fire({
                text: 'Este site foi feito apenas para aprimorar meu conhecimentos!',
                timer: 2000,
                icon: 'info'
            })
        }

        localStorage.setItem('visited', 'true');
    }, []);

    return (
        <>
            <div className="wrapper">
                {/* <Cursor /> */}
                
                <HeaderPage />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}