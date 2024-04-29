import React from 'react'
import { FaReact, FaNode, FaGitAlt   } from "react-icons/fa";
import { SiTailwindcss, SiRedux  } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact  className=' text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss  className=' text-7xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNode  className=' text-7xl text-lime-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGitAlt  className=' text-7xl text-red-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMongodb   className=' text-7xl text-green-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRedux  className=' text-7xl text-purple-400'/>
            </div>
        </div>
      
    </div>
  )
}

export default Technologies