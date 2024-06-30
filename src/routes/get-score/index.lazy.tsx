import { createLazyFileRoute } from '@tanstack/react-router'
import AutoCompleteInput from '../../components/form/AutoCompleteInput'
import { FormProvider, useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { empresaService, formatData } from '../../services/EmpresaService'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import CustomInput from '../../components/form/CustomInput'

export const Route = createLazyFileRoute('/get-score/')({
  component: () => <Score />
})

type ScoreForm = {
  nombre: string;
  codigo_sector: number;
  co2_revenues: number;
  water_revenues: number;
  energy_revenues: number;
  renewable_energy: number;
  market_gap: number;
  salary_gap: number;
  net_employment_creation: number;
  help_policy: boolean;
  supply_chain_policy: boolean;
  diversity_policy: boolean;
  board_independency_policy: boolean;
  board_diversity_policy: boolean;
  board_experience_policy: boolean;
  green_capex: boolean;
}

function Score() {
  const formMethods = useForm<ScoreForm>()
  const [optionEmpresas, setOptionEmpresas] = useState<{ label: string, value: string }[]>([])
  const { data, isLoading, isError } = useQuery({
    queryKey: ['empresas'],
    queryFn: () => empresaService.getEmpresas(),
    refetchOnWindowFocus: false,
  })

  const onSubmit = (data: ScoreForm) => {
    console.log(data)
  }

  useEffect(() => {
    if (data) {
      setOptionEmpresas(formatData(data))
    }
  }, [data])

  return <div className='flex flex-col gap-4 p-4 items-center text-center'>
    <h1 className='text-3xl font-bold'>Consulta</h1>
    <p>Por favor, completa la información a continuación para acceder a nuestra innovadora aplicación de machine learning. </p>
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className='flex flex-col gap-8 w-full md:w-[70%] items-center'>
        <AutoCompleteInput
          name='nombre'
          label='Nombre de la empresa'
          options={optionEmpresas}
          required
          requiredMessage='El campo es requerido'
        />
        <span className='grid gap-4 w-[80%] grid-cols-2 h-14'>
          <Button className='h-full' color='secondary'>
            Registrar Nuevos Datos
          </Button>
          <Button className='h-full' color='secondary'>
            Ver Dashboard
          </Button>
        </span>
        <div className='bg-white h-[1px] w-full'></div>
        <section className='grid grid-cols-2 gap-6 justify-between w-full'>
          <CustomInput label='Codigo del sector' name='codigo' />
          <CustomInput label='Ingresos por CO2' name='co2_revenues' />
          <CustomInput label='Ingresos por agua' name='water_revenues' />
          <CustomInput label='Ingresos por energía' name='energy_revenues' />
          <CustomInput label='Energía renovable' name='renewable_energy' />
          <CustomInput label='Brecha de mercado' name='market_gap' />
          <CustomInput label='Brecha salarial' name='salary_gap' />
          <CustomInput label='Creación neta de empleo' name='net_employment_creation' />
          <button>Alo</button>
        </section>
        <section className='grid grid-cols-2 gap-2 w-full'>

        </section>
      </form>
    </FormProvider>
  </div>
}