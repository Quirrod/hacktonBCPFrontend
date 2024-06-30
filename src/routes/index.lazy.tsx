import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { gradientUrl } from '../data/home'
import TypeIt from 'typeit-react'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <section className='flex flex-col gap-10 items-center justify-center min-h-[85dvh] text-center w-[75%]'>
        <h1 className='text-3xl md:text-6xl'><TypeIt options={{
          speed: 60,
        }}>Transforma tu Estrategia Financiera con Tecnología Innovadora</TypeIt></h1>
        <h3 className='w-[60%] text-md md:text-2xl'>Transforma tu enfoque financiero, basados en criterios ESG, promueve la sostenibilidad y la ética empresarial.</h3>
        <Link to='/score' className='relative p-4 rounded-lg hover:scale-[1.035] duration-75'>
          <span className='rounded-lg backdrop-blur-md absolute z-10 size-full top-0 left-0'>
          </span>
          <ShaderGradientCanvas
            importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              borderRadius: '0.5rem',
            }}
          >
            <ShaderGradient
              control='query'
              urlString={gradientUrl}
            />
          </ShaderGradientCanvas>
          <span className='z-10 relative font-bold drop-shadow-2xl'>Usar Ahora</span>
        </Link>
      </section>
    </div>
  )
}
