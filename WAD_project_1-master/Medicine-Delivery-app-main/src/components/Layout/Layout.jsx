import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import { Header } from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Loader } from "components/Loader/Loader";
    
export const Layout = () => {
    return <>
        <Header />
        <main>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </main>
        <footer><Footer /></footer>
    </>
};