import React from 'react';
import Wrapper from './Wrapper';
import Project from './Project';
import projects from '../projects.json';

function ProjectContainer() {
    return (
        <Wrapper>
            <Project 
            image={projects[0].image}
            title={projects[0].title}
            description={projects[0].description}
            deployedLink={projects[0].deployedLink}

            />
            <Project 
            image={projects[1].image}
            title={projects[1].title}
            description={projects[1].description}
            deployedLink={projects[1].deployedLink}

            />

            <Project 
            image={projects[2].image}
            title={projects[2].title}
            description={projects[2].description}
            deployedLink={projects[2].deployedLink}

            />

            <Project 
            image={projects[3].image}
            title={projects[3].title}
            description={projects[3].description}
            deployedLink={projects[3].deployedLink}

            />

            <Project 
            image={projects[4].image}
            title={projects[4].title}
            description={projects[4].description}
            deployedLink={projects[4].deployedLink}

            />
            <Project 
            image={projects[5].image}
            title={projects[5].title}
            description={projects[5].description}
            deployedLink={projects[5].deployedLink}

            />


        </Wrapper>
    );
    
}

export default ProjectContainer;



    