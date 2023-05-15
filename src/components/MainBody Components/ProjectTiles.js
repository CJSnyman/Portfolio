const ProjectTiles = ({ website, github, children, className, image }) => {
    return (
        <div className={`${className} project-item`} style={{ backgroundImage: `url(${image})` }}>
            <section>
                {children}
                <div className="project-tile-buttons">
                    <a href={website}>Website</a>
                    <a href={github}>Github</a>
                </div>
            </section>
        </div>
    );
};

export default ProjectTiles;
