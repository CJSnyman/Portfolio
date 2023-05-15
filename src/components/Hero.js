import { useEffect, useState } from "react";
import { ReactComponent as CJSnyman } from "../assets/CJSnyman.svg";

const Hero = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isHeroState, setIsHeroState] = useState("text");

    useEffect(() => {
        if (isBusy === true) return;
        if (isHovering === true) {
            if (isHeroState !== "logo") {
                setIsHeroState("logo");
                setIsBusy(true);
            }
            return;
        }
        if (isHeroState !== "text") {
            setIsHeroState("text");
            setIsBusy(true);
        }
    }, [isBusy, isHovering, isHeroState]);

    return (
        <header>
            <nav className="primary-navigation">
                <CJSnyman className="primary-navigation-logo" />
                <a href="#contact" className="call-to-action">
                    CONTACT
                </a>
            </nav>
            <section
                className={"hero-section"}
                onPointerEnter={() => setIsHovering(true)}
                onPointerLeave={() => setIsHovering(false)}
                onTransitionEnd={() => setIsBusy(false)}
            >
                <div
                    className={`hero-text hero-overlay ${
                        isHeroState === "logo" ? "transitioning" : ""
                    }`}
                >
                    <h1>
                        CRAIG
                        <br />
                        SNYMAN
                    </h1>
                    <h2>FRONT-END WEB DEVELOPER</h2>
                </div>
                <div
                    className={`hero-logo hero-overlay ${
                        isHeroState === "logo" ? "transitioning" : ""
                    }`}
                >
                    <CJSnyman></CJSnyman>
                </div>
            </section>
        </header>
    );
};

export default Hero;
