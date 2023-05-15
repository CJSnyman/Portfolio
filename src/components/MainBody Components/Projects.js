import { FaGithub } from "react-icons/fa";
import ProjectTiles from "./ProjectTiles";
import shadecorpImg from "../../assets/shadecorp.jpg";
import rgbmixingImg from "../../assets/rgbmixing.jpg";

const Projects = () => {
    return (
        <section className="projects">
            <h2>PROJECTS</h2>
            <div className="project-items">
                <ProjectTiles
                    key="shadecorp"
                    className="shadecorp"
                    website="https://shadecorp.netlify.app"
                    github="https://github.com/CJSnyman/REACT-Concept-Web-Page-Shade-Corp-"
                    image={shadecorpImg}
                >
                    <p>High end custom shade sails delivering quality and reliable services.</p>
                </ProjectTiles>
                <ProjectTiles
                    key="rgbmixing"
                    className="rgbmixing"
                    website="https://rgbmixing.netlify.app"
                    github="https://github.com/CJSnyman/ColorFull"
                    image={rgbmixingImg}
                >
                    <p>
                        Need to know how colors mix or what the hex code is of a hex color? You are
                        at the right place.
                    </p>
                </ProjectTiles>
            </div>
            <p className="view-more-projects">
                View more on{" "}
                <a href="https://github.com/CJSnyman">
                    <span className="all-projects-github-link">
                        Github <FaGithub />
                    </span>
                </a>
            </p>
        </section>
    );
};

export default Projects;
