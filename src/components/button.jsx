// export default function Button({onClick,text}) {
//     // function handleClick() {
//     //     console.log('Click happened');
       
//     return (  
//         <div>
//             <button className='bg-blue-500 hover:bg-blue-700 m-4 text-white font-bold py-2 px-4 rounded' onClick={onClick}>
//                 {text}
//             </button>
//         </div>
//     )
// }

import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button className='bg-blue-500 hover:bg-blue-700 m-4 text-white font-bold py-2 px-4 rounded' onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;