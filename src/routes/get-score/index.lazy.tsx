import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import AutoCompleteInput from '../../components/form/AutoCompleteInput'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { empresaService, formatData } from '../../services/EmpresaService'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import CustomInput from '../../components/form/CustomInput'
import SwitchInput from '../../components/form/SwitchInput'
import { AnimatePresence, motion } from 'framer-motion'

export const Route = createLazyFileRoute('/get-score/')({
  component: () => <Score />
})

type ScoreForm = {
  name: string;
  sector_code: number;
  co2_revenues: number;
  water_revenues: number;
  energy_revenues: number;
  renewable_energy: number;
  market_gap: number;
  salary_gap: number;
  net_employment_creation: number;
  health_policy: boolean;
  supply_chain_policy: boolean;
  diversity_policy: boolean;
  board_independency_policy: boolean;
  board_diversity_policy: boolean;
  board_experience_policy: boolean;
  green_capex: boolean;
  date: string;
}

function Score() {
  const formMethods = useForm<ScoreForm>({
    defaultValues: {
      name: '',
      sector_code: 0,
      co2_revenues: 0,
      water_revenues: 0,
      energy_revenues: 0,
      renewable_energy: 0,
      market_gap: 0,
      salary_gap: 0,
      net_employment_creation: 0,
      health_policy: false,
      supply_chain_policy: false,
      diversity_policy: false,
      board_independency_policy: false,
      board_diversity_policy: false,
      board_experience_policy: false,
      green_capex: false,
      date: new Date().toISOString()
    }
  })
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [optionEmpresas, setOptionEmpresas] = useState<{ label: string, value: string }[]>([])
  const { data } = useQuery({
    queryKey: ['empresas'],
    queryFn: () => empresaService.getEmpresas(),
    refetchOnWindowFocus: true,
    refetchInterval: 1000,
  })

  const empresaMutation = useMutation({
    mutationFn: (data: ScoreForm) => {
      return empresaService.postEmpresa(data)
    },
    onSuccess: (data) => {
      formMethods.reset()
      console.log(data)
    }
  })

  const animation = {
    hidden: { x: 0, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 0, opacity: 0 },
  };

  const onSubmit = (data: ScoreForm) => {
    if (data.co2_revenues)
      empresaMutation.mutate({ ...data, co2_revenues: Number(data.co2_revenues), water_revenues: Number(data.water_revenues), energy_revenues: Number(data.energy_revenues), renewable_energy: Number(data.renewable_energy), market_gap: Number(data.market_gap), salary_gap: Number(data.salary_gap), net_employment_creation: Number(data.net_employment_creation), sector_code: Number(data.sector_code), date: "2024-04-28" })
    else
      console.log(data)
  }

  useEffect(() => {
    if (data) {
      setOptionEmpresas(formatData(data))
    }
  }, [data])

  return <div className='flex flex-col gap-4 p-4 items-center text-center min-h-[65dvh]'>
    <h1 className='text-3xl font-bold'>Consulta</h1>
    <p>Por favor, completa la información a continuación para acceder a nuestra innovadora aplicación de machine learning. </p>

    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className='flex flex-col gap-8 w-full md:w-[70%] items-center'>
        <span className='grid gap-4 w-[80%] grid-cols-2 h-14'>
          <Button onPress={() => {
            setShowForm(true)
            setShowDashboard(false)
          }} className='h-full' color='secondary'>
            Registrar Nuevos Datos
          </Button>
          <Button onPress={() => {
            setShowForm(false)
            setShowDashboard(true)
          }} className='h-full grid place-items-center bg-secondary-500 rounded-xl hover:bg-[#9353d3]' color='secondary'>
            Ver Dashboard
          </Button>
        </span>
        <AnimatePresence mode='sync'>
          {showForm &&
            <>
              <motion.div variants={animation}
                initial="hidden"
                animate="visible"
                exit="exit" className='bg-white h-[1px] w-full'></motion.div>
              <motion.section variants={animation}
                initial="hidden"
                animate="visible"
                exit="exit" className='grid grid-cols-2 gap-6 w-full'>
                <CustomInput label='Nombre de la empresa' name='name' type='text' />
                <CustomInput label='Codigo del sector' name='sector_code' type='number' />
                <CustomInput label='Ingresos por CO2' name='co2_revenues' type='number' />
                <CustomInput label='Ingresos por agua' name='water_revenues' type='number' />
                <CustomInput label='Ingresos por energía' name='energy_revenues' type='number' />
                <CustomInput label='Energía renovable' name='renewable_energy' type='number' />
                <CustomInput label='Brecha de mercado' name='market_gap' type='number' />
                <CustomInput label='Brecha salarial' name='salary_gap' type='number' />
                <CustomInput label='Creación neta de empleo' name='net_employment_creation' type='number' />
                <SwitchInput label='Política de salud y seguridad' name='health_policy' />
                <SwitchInput label='Política de cadena de suministro' name='supply_chain_policy' />
                <SwitchInput label='Política de diversidad' name='diversity_policy' />
                <SwitchInput label='Política de independencia de la junta' name='board_independency_policy' />
                <SwitchInput label='Política de diversidad de la junta' name='board_diversity_policy' />
                <SwitchInput label='Política de experiencia de la junta' name='board_experience_policy' />
                <SwitchInput label='Capex verde' name='green_capex' />
              </motion.section>
              <Button type='submit' className='backdrop-blur-md animated-background bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] relative px-8 py-6 rounded-lg hover:scale-[1.05] duration-75 mb-4'>¡Obtener tu Score!</Button>
            </>
          }
          {
            showDashboard &&
            <motion.section variants={animation}
              initial="hidden"
              animate="visible"
              exit="exit" className='w-full flex flex-col gap-4'>
              <label htmlFor='nombre'>Selecciona una empresa para ver el Dashboard</label>
              <AutoCompleteInput name='name' label='Nombre de la empresa' options={optionEmpresas} />
              <Button onPress={() => {
                if (formMethods.getValues('name')) navigate({
                  to: '/score/$scoreId',
                  params: { scoreId: formMethods.getValues('name') }
                })
              }} type='submit' className='backdrop-blur-md animated-background bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] relative px-8 py-6 rounded-lg hover:scale-[1.05] duration-75 mb-4'>Obtener Datos del Dashboard</Button>
            </motion.section>
          }
        </AnimatePresence>

      </form>
    </FormProvider>
  </div>
}