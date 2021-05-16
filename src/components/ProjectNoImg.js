import React from 'react';

function ProjectNoImg(props) {
    return (
        

        
        <div className='card'>
           
            <div className="projectContent">
                <div>
                    <strong>{props.title}</strong>
                </div>
                <div className= 'description'>
                    {props.description}
                </div>
                <div>
                    {props.deployedLink}
                </div>


            </div>
        </div>
        
        
    );
    
}

export default ProjectNoImg;