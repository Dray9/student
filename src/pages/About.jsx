import { RevealOnScroll } from "../components/RevealOnScroll";
import ImageSrc from "../assets/lebron.png";

export const About = () => {

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 "
        >
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">

                    {/* Left: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={ImageSrc}
                            alt="Jet Goose"
                            className="rounded-lg w-full max-w-md object-cover shadow-lg"
                        />
                    </div>

                    {/* Right: Text */}
                    <div className="md:w-1/2 max-w-3xl text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-300 to-teal-200 bg-clip-text text-transparent">
                            About Us
                        </h2>

                        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                            <p className="text-gray-300 mb-6">
                                We’re more than just students — we’re builders and learners. Our goal is to develop solutions that are both technically strong and user-focused. Whether it's a mobile app, a web dashboard, or a database system, we aim to make tech more accessible and practical for everyday use.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
