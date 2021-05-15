import React from 'react';

function Project(props) {
    return (
        <div className='card'>
            <div className="image-container">
                <img alt={props.title} src={props.image}/>
            </div>
            <div className="projectContent">
                <div>
                    <strong>{props.title}</strong>
                </div>
                <div>
                    {props.description}
                </div>
                <div>
                    {props.deployedLink}
                </div>


            </div>
        </div>
    );
    
}

export default Project;