import Projects from "./MainBody Components/Projects.js";
import Welcome from "./MainBody Components/Welcome.js";
import Skills from "./MainBody Components/Skills.js";
import Form from "./MainBody Components/Form.js";

const MainBody = () => {
    return (
        <main className="main-body">
            <Welcome />
            <Projects />
            <Skills />
            <Form />
        </main>
    );
};

export default MainBody;
