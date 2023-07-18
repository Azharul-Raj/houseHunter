
import React from 'react';



function Heading({
    title,
    subTitle,
    center
}) {

  return (
    <div
   className={`${center? 'text-center':"text-start"}`} 
    >
        <h2 className={`text-xl font-bold`}>
            {title}
        </h2>
        <h5 className={`font-normal text-gray-800`}>
            {subTitle}
        </h5>
    </div>
  )
}

export default Heading;