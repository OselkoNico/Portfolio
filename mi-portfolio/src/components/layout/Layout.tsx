import { Outlet } from "react-router";

export default function Layout() {
    return(
        <div className="min-h-screen bg-slate-900 text-white">
            {/*Aquí irá <Navbar /> más adelante */}
            <Outlet />
            {/*Aquí irá <Footer /> más adelante */}
        </div>
    )
}