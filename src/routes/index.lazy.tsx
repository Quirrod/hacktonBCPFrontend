import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { aboutUsData, benefitsData } from '../data/home'
import TypeIt from 'typeit-react'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <LandingPage />
      <AboutUs />
      <Benefits />
    </div>
  )
}

function LandingPage() {
  return <section className='flex flex-col gap-10 items-center justify-center min-h-[90vh] text-center w-[75%]'>
    <h1 className='text-3xl md:text-6xl font-bold'><TypeIt options={{
      speed: 60,
    }}>Transforma tu Estrategia Financiera con Tecnología Innovadora</TypeIt></h1>
    <h3 className='w-[60%] text-md md:text-2xl'>Transforma tu enfoque financiero, basados en criterios ESG, promueve la sostenibilidad y la ética empresarial.</h3>
    <Link to='/score' className='backdrop-blur-md animated-background bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] relative p-4 rounded-lg hover:scale-[1.05] duration-75'>
      <span className='font-bold drop-shadow-2xl'>Usar Ahora</span>
    </Link>
  </section>
}

function AboutUs() {
  return <section className='flex flex-col p-4 gap-10 items-center justify-center text-center w-[95%]'>
    <section className='flex flex-col gap-4'>
      <h2 className='text-3xl font-bold'>Acerca de Sustain Score</h2>
      <p>Transforma tu enfoque financiero con nuestra herramienta de machine learning líder en el mercado, diseñada para evaluar empresas basadas en criterios ESG y maximizar tu eficiencia financiera mientras promueves la sostenibilidad y la ética empresarial.</p>
    </section>
    <section className='flex justify-self-center'>
      <div className='grid grid-cols-2 grid-rows-4 md:grid-cols-4 w-[100%] md:hidden'>
        {aboutUsData.map(({ title, description }, index) => {
          const boxesClass = `${index === 1 ? 'animated-background bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] rounded-md' : ''} ${index < aboutUsData.length - 2 ? 'border-b-1' : ''} ${index % 2 === 0 ? 'border-r-1' : ''} p-4 border-[#665DCD] flex flex-col justify-center items-center text-center width-[8rem]`
          return <InfoBox key={index} title={title} description={description} infoBoxClass={boxesClass} />
        }
        )}
      </div>
      <div className='hidden grid-cols-4 grid-rows-2 w-[100%] md:grid p-4'>
        {aboutUsData.map(({ title, description }, index) => {
          const boxesClass = `${index === 1 ? 'animated-background bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]' : ''} ${index < aboutUsData.length - 4 ? 'border-b-1' : ''} ${(index + 1) % 4 !== 0 ? 'border-r-1' : ''}  border-[#665DCD] flex flex-col justify-center items-center text-center md:size-[10rem] lg:size-[12rem] p-4`
          return <InfoBox key={index} title={title} description={description} infoBoxClass={boxesClass} />
        }
        )}
      </div>
    </section>
  </section>
}

type InfoBoxProps = {
  title: string
  description: string
  infoBoxClass: string
}

function InfoBox({ title, description, infoBoxClass }: InfoBoxProps) {
  return <div className={infoBoxClass}>
    <h3 className='text-2xl'>{title}</h3>
    <p>{description}</p>
  </div>
}

function Benefits() {
  return <section className='mb-10 flex flex-col gap-8 items-center'>
    <h2 className='text-3xl font-bold'>Beneficios</h2>
    <p>Descubre cómo nuestra innovadora tecnología puede revolucionar tus decisiones de presupuesto:</p>
    <div className='flex flex-col gap-10'>

      {
        benefitsData.map(({ title, description, img }, index) => <BenefitBox key={index} title={title} description={description} img={img} index={index} />)
      }
    </div>
  </section>
}

type BenefitBoxProps = {
  title: string
  description: string
  img: string
  index: number
}

function BenefitBox({ title, description, img, index }: BenefitBoxProps) {
  const boxClass = `${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col gap-4 justify-between p-4 items-center`
  return <div className={boxClass}>
    <span className='flex flex-col gap-4 p-4' >
      <h3 className='font-bold text-xl'>{title}</h3>
      <p>{description}</p>
    </span>
    <img src={img} alt={title} />
  </div>
}
