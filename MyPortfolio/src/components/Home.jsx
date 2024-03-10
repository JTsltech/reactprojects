import React from 'react'
import { useId } from 'react'
import HobbieBox from './HobbieBox.jsx'
import CertificateBox from './CertificateBox'
import SkillBox from './SkillBox'
import EducationBox from './EducationBox'
import { Link } from 'react-router-dom'
import Resume from '../jyoti_resume.pdf'  
import Contact from './Contact.jsx'


function Home(){
    //const EduId = useId()

    return(
        <>
            <div className='w-full h-screen bg-cover bg-no-repeat'>
                <div className='columns-1 w-full h-500 p-20 main-container bg-cover bg-no-repeat flex flex-wrap justify-between items-center mx-auto max-w-screen-xl' 
                    style={{
                        backgroundImage: `url(src/assets/pexels-andrew-neel-6633920.jpg)`
                    }}
                >
                    
                    <div className='flex flex-col space-y-3 sm:space-y-6 sm:order-2 items-start text-white xl:pl-8 py-8'>
                        <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal'>
                            Hi there,
                        </p>
                        <h4 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold">
                            This is Jyoti Gupta
                        </h4>
                        <button className="text-white mt-5 w-60 p-2 text-xl rounded-lg bg-black font-medium">
                            Software Developer
                        </button>
                    </div>                    
                </div>
                <div className='columns-1 text-left justify-evenly line-space-1 bg-lightGray p-16 items-center w-full h-200' id="about">
                    <h1 className='text-3xl font-bold mb-5 sm:text-4xl'>About me</h1>
                    <div className="">
                        <img className="block mx-auto h-40 rounded-full shadow-lg p-2 ml-2 mb-5" src="src/assets/jyoti.jpg" alt="My Picture"/>
                    </div>
                    <p>
                    I am a self oriented person with professional skills of C#;JQuery;HTML;Bootstrap;CSS;ASP.NET MVC; ASP.NET CORE-Intermediate level;SQL Server;Entity Framework;
                    with over 5+ year of experience. A great work behavior and ethics with easily adaptable nature.I have done my BTech in Computer Science and Engineering from
                    Modern Institue of Technology and Research Center located in Alwar, Rajasthan.
                    </p>
                    <h2 className='text-2xl mt-10 font-bold'>I have my interest areas of</h2>
                    <div className='mt-10 md:columns-3 sm:columns-2'> 
                        <HobbieBox hobbieName='Coding'/>
                        <HobbieBox hobbieName='Music'/>
                        <HobbieBox hobbieName='Mountains'/>              
                    </div>
                </div>
                {/* style={{backgroundColor: `rgb(17 24 39 / 4)`}} */}
                <div className=' columns-1 text-center line-space-1 p-16 items-center w-full h-200 bg-gradient-to-tr from-[#add8e6]' id="education">
                    {/* <h1 className='text-2xl mb-5 font-bold mb-5 text-white'>Resume</h1> */}
                    <h2 className='text-3xl sm:text-4xl mb-10 font-bold text-white text-center' style={{textDecoration:'underline',padding:2}}>Education</h2>
                    <div className='md:columns-3 sm:columns-1'> 
                        <EducationBox
                        courseName='B.Tech - Computer Science & Engineering'
                        school='Modern Institute of Technology & Research Center, Alwar'
                        year='2014-2018'
                        />
                        <EducationBox
                        courseName='Senior Secondary'
                        school='Central Public Sr. Sec. School, Alwar'
                        year='2013-2014'
                        />
                        <EducationBox
                        courseName='Secondary'
                        school='Shree Oswal Jain Sr. Sec. School, Alwar'
                        year='2011-2012'
                        />
                    </div>
                </div>
                <div className='columns-1 text-center line-space-1 p-16 items-center w-full h-200 bg-lightGray'  id="certificate">
                    <h2 className='text-3xl sm:text-4xl mb-20 font-bold text-black text-center' style={{textDecoration:'underline',padding:2}}>Certificates</h2>
                    <div className='md:columns-3'>
                        <CertificateBox certificateImg='src/assets/openedg.png'
                        certHref='https://verify.openedg.org/?id=w3Nk.gX48.03S6'
                        certificateName='Python Certified Entry Level Programmer'
                        />
                        <CertificateBox certificateImg='src/assets/icons8-linkedin-144.png'
                        certHref='https://www.linkedin.com/in/jyoti-gupta-6b23b3168/overlay/1635472851714/single-media-viewer?type=DOCUMENT&profileId=ACoAACfs9yYBrf_p7CxEuvOe8iQsTUzAJ9jw8z0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BAB3KYknHRtio0zrPr4TEJg%3D%3D'
                        certificateName='ASP.NET MVC 5 Identity'
                        />
                        <CertificateBox certificateImg='src/assets/icons8-linkedin-144.png'
                        certHref='https://www.linkedin.com/in/jyoti-gupta-6b23b3168/overlay/1635472851716/single-media-viewer?type=DOCUMENT&profileId=ACoAACfs9yYBrf_p7CxEuvOe8iQsTUzAJ9jw8z0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BAB3KYknHRtio0zrPr4TEJg%3D%3D'
                        certificateName='Advanced ASP.NET Web API2.2'                
                        />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-col-2 items-start self-start line-space-1 p-16 items-center w-full h-200 bg-gradient-to-tr from-[#add8e6]' id="skills">
                    <h2 className='text-3xl sm:text-4xl mb-20 font-bold text-white text-center' style={{textDecoration:`underline`,padding:2}}>Skills</h2>
                    <div className='lg:columns-6 md:columns-4 sm:columns-2'>
                        <SkillBox skillIcon='src/assets/vs.jpg'/>
                        <SkillBox skillIcon='src/assets/c.jpg'/>
                        <SkillBox skillIcon='src/assets/aspnet-mvc-logo.png'/>
                        <SkillBox skillIcon='src/assets/net-core.jpg'/>
                        <SkillBox skillIcon='src/assets/net.jpg'/>
                        <SkillBox skillIcon='src/assets/jQuery.png'/>
                        <SkillBox skillIcon='src/assets/sql-server.jpg'/>
                        <SkillBox skillIcon='src/assets/net.jpg'/>
                        <SkillBox skillIcon='src/assets/jQuery.png'/>
                        
                    </div>
                </div>   
                <div className='columns-1 text-center line-space-1 p-16 items-center w-full h-200 bg-gradient-to-tr from-[#add8e6] flex'  id="resume">
                    <Link
                            to={Resume}
                            download="Jyoti-Gupta-Resume"
                            target="_blank"
                            rel="noreferrer"
                            className='text-white inline btn bg-orange-700 hover:bg-orange-800 hover:text-white m-auto font-medium rounded-lg text-md p-4 justify-content focus:outline-none'
                        >
                            <div className='p-0'><i className='fa fa-download text-20' style={{width:`1.5rem`}} alt='icon'></i>Resume</div>
                    </Link>
                </div>   
                <div className='columns-1 text-center line-space-1 p-16 items-center w-full h-200 bg-gradient-to-tr from-[#add8e6]'   id="contact">
                    <Contact/>
                </div>    
            </div>
        </>
    )
}

export default Home
