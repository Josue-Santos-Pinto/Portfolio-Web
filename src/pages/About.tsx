import SkillCard from '@/components/skill-card'
import React from 'react'

export default function About() {
  return (
    <div >
        <div className='w-screen h-screen flex flex-col'>
            <div className='w-full h-1/4 flex justify-center items-center flex-row'>
                <div className='text-5xl uppercase font-bold'>Sobre</div>
                <div className='text-5xl uppercase font-bold text-yellow-500 ml-3'>mim</div>
            </div>
            <div className='flex flex-1 flex-row'>
                <div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
        <div className='w-screen h-screen flex flex-col'>
            <div className='w-full h-1/4 flex justify-center items-center flex-row'>
                <div className='text-xl uppercase font-semibold'>Tecnologias</div>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <div className='w-48 h-48 flex justify-center items-center bg-white'>
                <SkillCard />

                </div>
            </div>
        </div>
        
    </div>
  )
}
