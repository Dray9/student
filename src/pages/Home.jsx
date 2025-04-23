import { RevealOnScroll } from "../components/RevealOnScroll.jsx";
import ImageSrc from "../assets/react.svg";
import { About } from "./About";

export const Home = () => {
    return (
        <div className="relative">
            {/* Home section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center relative px-6 md:px-12 z-10"
            >
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                        {/* Left: Text */}
                        <div className="text-left z-10 max-w-3xl md:w-1/2">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                                Nuh uh
                            </h1>
                            <p className="text-gray-300 text-lg mb-8 max-w-lg">
                                We are a team of passionate software developers dedicated to building innovative, efficient, and user-friendly solutions. With a strong foundation in HTML, CSS, PHP, we collaborate closely to turn ideas into functional applications that solve real-world problems and create value for users.
                            </p>
                            <div className="flex space-x-4"></div>
                        </div>

                        {/* Right: Image */}
                        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                            <img
                                src={ImageSrc}
                                alt="Crocodile Bomber"
                                className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-lg"
                            />
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
            
            {/* Include About section directly */}
            <About />
        </div>
    );
};