import React from 'react';
import Wrapper from './Wrapper';
import Project from './Project';
import projects from '../projects.json';
import passGen from '../assets/passGen.JPG'
import scheduler from '../assets/scheduler.JPG'
import getToKnowU from '../assets/getToKnowU.JPG'
import ActiveSiHER from '../assets/Homepage.png'
import ProjectNoImg from '../components/ProjectNoImg'
import teamProfile from '../assets/team-profile.png'

function ProjectContainer() {
    return (
        <Wrapper>
            <Project 
            image={passGen}
            title={projects[0].title}
            description={projects[0].description}
            deployedLink={projects[0].deployedLink}

            />
            <Project 
            image={scheduler}
            title={projects[1].title}
            description={projects[1].description}
            deployedLink={projects[1].deployedLink}

            />

            <Project 
            image={getToKnowU}
            title={projects[2].title}
            description={projects[2].description}
            deployedLink={projects[2].deployedLink}

            />

            <Project 
            image={ActiveSiHER}
            title={projects[3].title}
            description={projects[3].description}
            deployedLink={projects[3].deployedLink}

            />

            <ProjectNoImg 
            image={projects[4].image}
            title={projects[4].title}
            description={projects[4].description}
            deployedLink={projects[4].deployedLink}

            />
            <Project 
            image={teamProfile}
            title={projects[5].title}
            description={projects[5].description}
            deployedLink={projects[5].deployedLink}

            />


        </Wrapper>
    );
    
}

export default ProjectContainer;



    