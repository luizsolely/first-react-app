import React from 'react'
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { BiLogoReact } from "react-icons/bi";



const Cards = () => {
  return (

    <section id='technologies' className='w-full py-[6rem] px-4 bg-white'>
        <h1 className='text-4xl text-center font-bold mb-24 '>TECHNOLOGIES</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 group'> 
            <div className='w-full flex flex-col items-center py-16 px-0 bg-gray-50 shadow-2xl rounded-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-300'>
                <BiLogoHtml5 className='size-32 mx-auto mt-4 text-[#e34c26] ' />
                <h2 className='text-2xl font-bold text-center mb-8'>HTML5</h2>
                <p className='text-md max-w-80 md:max-w-48 font-medium text-center'>HTML5 é a mais recente versão da linguagem de marcação padrão para criar páginas da web e aplicativos online. Ele define a estrutura e o conteúdo das páginas da web.</p>     
            </div>
            <div className='w-full flex flex-col items-center py-16 px-0 bg-gray-50 shadow-2xl rounded-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-300'>
                <BiLogoCss3 className='size-32 mx-auto mt-4 text-[#264de4]' />
                <h2 className='text-2xl font-bold text-center mb-8'>CSS3</h2>
                <p className='text-md max-w-80 md:max-w-48 font-medium text-center'>CSS3 é a versão mais recente da linguagem de estilo utilizada para definir a apresentação de documentos HTML e XML, incluindo layout, cores, fontes e outros aspectos visuais.</p>
            </div>
            <div className='w-full flex flex-col items-center py-16 px-0 bg-gray-50 shadow-2xl rounded-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-300'>
                <DiJavascript className='size-32 mx-auto mt-4 text-[#f0db4f]' />
                <h2 className='text-2xl font-bold text-center mb-8'>JavaScript</h2>   
                <p className='text-md max-w-80 md:max-w-48 font-medium text-center'>JavaScript é uma linguagem de programação de alto nível, interpretada pelo navegador, permitindo adicionar comportamento aos elementos HTML, manipular o conteúdo da página, responder a eventos do usuário e interagir com servidores web.</p>   
            </div>
            <div className='w-full flex flex-col items-center py-16 px-0 bg-gray-50 shadow-2xl rounded-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-300'>
                <BiLogoBootstrap className='size-32 mx-auto mt-4 text-[#563d7c]' />
                <h2 className='text-2xl font-bold text-center mb-8'>BootStrap</h2> 
                <p className='text-md max-w-80 md:max-w-48 font-medium text-center'> Bootstrap é uma estrutura de design front-end popular que fornece um conjunto de componentes pré-construídos e estilos CSS para criar rapidamente interfaces de usuário responsivas e visualmente atraentes.</p>     
            </div>
            <div className='w-full flex flex-col items-center py-16 px-0 bg-gray-50 shadow-2xl rounded-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-300'>
                <BiLogoTailwindCss className='size-32 mx-auto mt-4 text-[#3490dc]' />
                <h2 className='text-2xl font-bold text-center mb-8'>TailWindCss</h2> 
                <p className='text-md max-w-80 md:max-w-48 font-medium text-center'>Tailwind CSS é uma estrutura de design de interface de usuário (UI) de baixo nível que fornece classes utilitárias para estilizar elementos HTML.</p>     
            </div>
            <div className='w-full flex flex-col items-center py-16 px-0 bg-gray-50 shadow-2xl rounded-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-300'>
                <BiLogoReact className='size-32 mx-auto mt-4 text-[#88dded]' />
                <h2 className='text-2xl font-bold text-center mb-8'>React</h2> 
                <p className='text-md max-w-80 md:max-w-48 font-medium text-center'>React.js é uma biblioteca JavaScript de código aberto mantida pelo Facebook, que é amplamente utilizada para construir interfaces de usuário (UI) interativas e reativas.</p>     
            </div>
        </div>        
    </section>

  )
}

export default Cards