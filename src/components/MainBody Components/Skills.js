import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const Skills = () => {
    return (
        <section className="skills">
            <h2>SKILLS</h2>
            <div className="skills-grid">
                <div className="skill-item">
                    <FaHtml5 size="4rem" />
                    <h3>HTML</h3>
                </div>
                <div className="skill-item">
                    <FaCss3Alt size="4rem" />
                    <h3>CSS</h3>
                </div>
                <div className="skill-item">
                    <FaJs size="4rem" />
                    <h3>Javascript</h3>
                </div>
                <div className="skill-item">
                    <FaReact size="4rem" />
                    <h3>React</h3>
                </div>
            </div>
        </section>
    );
};

export default Skills;
