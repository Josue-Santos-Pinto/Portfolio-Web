import ActionButton from '@/components/action-button'
import { ThemeToggle } from '@/components/theme-toggle'
import { DoubleArrowRightIcon } from "@radix-ui/react-icons"
import React from 'react'

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-row'>
        
        <div className='flex flex-1'>
            <div className='w-1/2 h-screen absolute left-0 bottom-0 bg-yellow-500 [clip-path:polygon(0%_100%,0%_0%,80%_100%)]'></div>
            <div className=' w-2/3 h-3/4 bg-white z-10 mx-10 my-auto rounded-3xl' >
            </div>
        </div>
        <div className='flex flex-1 flex-col justify-center'>
            <div className='w-3/4'>
                <div>
                   <div className='text-yellow-500 text-5xl uppercase font-bold'>- eu sou o Josué Santos</div> 
                    <div className='text-5xl uppercase font-bold'>Desenvolvedor FullStack</div>
                </div>
                <div className='my-6'>
                Olá! Meu nome é Josué, e sou um desenvolvedor fullstack apaixonado por transformar ideias em soluções digitais. Com formação em Sistemas de Informação 
                e experiência em Javascript, ReactJS, React Native e NodeJS estou sempre em busca de novos desafios. <br />
                <div className='my-4'>Vamos construir algo incrível juntos!</div>

                <ActionButton title='Mais Sobre Mim' Icon={DoubleArrowRightIcon} />
                </div>
                </div>
        </div>

        <div className=' fixed right-5 h-screen flex  justify-center items-center bg-black mx-12'>
                <div className='w-8 h-96 bg-white'></div>
        </div>
        
        
    </div>
  )
}
