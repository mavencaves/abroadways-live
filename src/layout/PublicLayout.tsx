import {Outlet} from "react-router";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";

export default function PublicLayout() {
    return (
        <div className={"min-h-screen flex flex-col"}>
            <Navbar/>
            <div className={"grow"}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}