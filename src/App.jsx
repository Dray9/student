import { useState, useEffect } from "react";
import './App.css'
import  {Navbar}  from "./components/Navbar";
import { Home } from "./components/section/Home";
import { MobileMenu } from "./components/MobileMenu";
import { About } from "./components/section/About";
import { Background } from "./components/Background";

import "./index.css";


function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Ensure background covers the entire page even when scrolling
    useEffect(() => {
        document.body.classList.add('bg-black');
        return () => {
            document.body.classList.remove('bg-black');
        };
    }, []);

    return (
        <>
            {/* Fixed background gradient that covers viewport */}
            <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
                <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
                {/* Optional: Add subtle animated noise overlay for texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-repeat bg-[length:200px_200px]"
                     style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC44Ii8+PC9zdmc+')" }}></div>
            </div>

            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Background/>
            <Home/>
            <About/>
        </>
    )
}

export default App


