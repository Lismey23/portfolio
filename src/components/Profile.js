import React from 'react';
import profilePic from '../assets/profilePic.png'

function Profile () {
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-xs-10'>
                <h2>About Me</h2>

                </div>
            </div>

            <div className='row'>
                <div className='col-xs-10'>
                <img alt= "Lismey Plasencia" src={profilePic} width="370" height="370"/>
                <p className='lorem'>Motivated, energetic and reliable Industrial Engineer with a hard-working mentality. Persuasive
           communicator, a team worker and multitask-er with a positive attitude. Industrial Engineer with 3
           years of experience planning, developing and providing solutions quickly and 2 years of focusing on Product Managment and Business Development, ensuring growth QoQ and YoY and profit in all managed product lines, as well as increasing customer breadh in the region.
                </p>
                <h3>Experience</h3>
         <ul>
           <li><strong>09-2014 to 09-2016 Internship:</strong> MedSol Laboratories
             <p>Integrated quickly into the team tasked with investigating, planning and
               implementing optimization processes in the manufacture of medicines,
               specifically Enalapril. Provided steady flow of information to management,
               customers, internal personnel and direct reports as commited. Perform
               operational observation and process documentation. Worked with data to
               understand process gaps and improvement opportunities.
               </p>
           </li>
           <li><strong>09-2016 to 09-2017 Industrial Engineer:</strong> MedSol Laboratories
             <p>Accurate measurement standards and operations were developed to increase
               production, minimize time without added value and reduce the cost of producing
               medicines. Monitored and analyzed workflow, processes, procedures, and line
               activities, identifying and resolving bottlenecks to maximize efficiency.
               </p>
         
           </li>
           <li><strong>01-2019 to 08-2019 Product Manager:</strong> Solution Box LLC
             <p>Determine product pricing by utilizing market research data; reviewing
               production and sales costs; anticipating volume; costing special and customized
               orders. Determined customers need and desires by specifying the research
               needed to obtain market information. Obtain product market share by calling on
               customers with field salespeople and evaluating sales call results. Facilitates
               inventory turnover and product availability by reviewing and adjusting inventory
               levels. Worked very close to the accounting department in invoice processing.
               Maintains professional and technical knowledge by attending educational
               workshops, reviewing professional publications and establishing personal
               networks.
               </p>
               </li>
               <li><strong>08-2019 to present Business Development Manager:</strong> Tech Data 
                 <p>Responsible for working with multiple lines of business to ensure growth, profitability and maintain active customers and secure new accounts. Work closely with vendor representatives to understand and follow their developing strategies for growth accordingly. Implement and excecute marketing activities to increase brand awareness and customer breadh in the region. Maintain knowledge of market changes to make the most informed decisions possible. Conducted buddy calls with sales and field representatives to present Tech Data's offerings to key resellers of the LTAM region. </p>
               </li>
         </ul>
         <h4>Education</h4>
         <strong>09-2011 to 07-2017</strong>
         <p>The Technological University of Havana "José Antonio
           Echeverría", Bachelor of Science in Industrial Engineer</p>
         <strong>12-2020 to present</strong>
           <p>Currently completing a Coding BootCamp at University of Miami (UM)</p>
       <div className="row">
         <h5>Skills</h5>
         <div className="col-sm-4">
           <ul>
             <li>Ability to develop objetives, scope,work plan and schedule.</li>
             <li>Market Research</li>
             <li>Process Analysis</li>
             <li>Statistical Analysis</li>
             <li>Ability to adapt to many environments</li>
           </ul>
         </div>
         <div className="col-sm-4">
           <li>Passion for improvement</li>
           <li>Ethics</li>
           <li>Listening Skills</li>
           <li>Ability to work well with others</li>
           
         </div>
         <div className="col-sm-4">
           <li>Microsoft Office</li>
           <li>AutoCAD</li>
           <li>HTML, Java Script and CSS</li>
           </div>
       <h6>Languages</h6>
        <li>English</li>
         <li>Spanish</li>
        
       
            </div>
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        </div>

    )

}

export default Profile;