import React from "react";


const Contact = () => {
    //const profileImage = ;
    const myRef = React.createRef();

    return (
        <div id='contact' ref={myRef} className='py-5 px-40 flex flex-col gap-4'>
            <h1 className="text-3xl text-white ms-8">Contact Me</h1>
            <div className='my-name text-4xl'>
              
            </div>
            <div className='flex flex-row justify-between pt-10'>
                <div className='bg-dark-3/30 rounded-lg py-7 px-10 md:basis-2/3 proxima text-lg text-white'>
                  Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget mattis vulputate, nisl nisl aliquam nisl, eget aliquam nisl nisl eget.
                </div>
                <div className='hidden md:block rounded-xl p-4 border border-dark-3/80 opacity-80 hover:scale-110 hover:opacity-100 duration-300 ease-in-out'>
                    <img src='https://www.w3schools.com/images/w3schools_green.jpg' alt='about-me' className='h-80 w-80 object-fill rounded-xl' />
                </div>
            </div> 
        </div>
    )
}

export default Contact