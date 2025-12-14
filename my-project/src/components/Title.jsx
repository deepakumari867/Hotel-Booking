import React from 'react'

const h1 = ({title,subTitle,align,font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align=== "left" && "md:itema-start md:text-left"}`}>
    <h1 className={`text-4xl md:text-[40px] ${font|| "font-playflair"}`}>{title}</h1>
    <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-1'>{subTitle}</p>
    </div>
  )
}

export default h1
