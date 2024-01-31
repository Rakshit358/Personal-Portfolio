import React from "react";


const About = () => {
    return (
        <div id='codingprofiles'  className='py-5 px-40 flex flex-col gap-4'>
            <h1 className="text-3xl text-white ms-8">Coding Profiles</h1>
            <div className="flex flex-row justify-between">
            <div className="flex justify-center items-end m-6 box-content h-60 w-60 p-4 border-4 rounded-lg ...">
                
                <a href="https://leetcode.com/RakshitBenjwal/" target="_blank" className="text-white">Leetcode</a>
            </div> 
            <div className="flex justify-center items-end m-6 box-content h-60 w-60 p-4 border-4 rounded-lg ...">
                
                <a href="https://www.codechef.com/users/rakshitbenjwal" target="_blank" className="text-white">CodeChef</a>
            </div> 
            <div className="flex justify-center items-end m-6 box-content h-60 w-60 p-4 border-4 rounded-lg ...">
                
                <a href="https://auth.geeksforgeeks.org/user/benjwalrnm31/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" className="text-white">GeeksForGeeks</a>
            </div> 
            </div> 
        </div>
    )
}

export default About