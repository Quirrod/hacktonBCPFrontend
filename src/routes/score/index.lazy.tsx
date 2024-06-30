import { createLazyFileRoute } from '@tanstack/react-router'
import AutoCompleteInput from '../../components/form/AutoCompleteInput'
import { FormProvider, useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { empresaService } from '../../services/EmpresaService'

export const Route = createLazyFileRoute('/score/')({
  component: () => <Score />
})

type ScoreForm = {
  nombre: string;
}

function Score() {
  const formMethods = useForm<ScoreForm>()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['scoreEmpresas', formMethods.getValues('nombre')],
    queryFn: () => empresaService.getEmpresas(),
    refetchOnWindowFocus: false,
  })

  const onSubmit = (data: ScoreForm) => {
    console.log(data)
  }

  return <div className='flex flex-col gap-4 p-4 items-center text-center'>
    <h1 className='text-3xl font-bold'>Consulta</h1>
    <p>Por favor, completa la información a continuación para acceder a nuestra innovadora aplicación de machine learning. </p>
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <AutoCompleteInput
          name='nombre'
          label='Nombre'
          options={[
            { value: '1', label: 'Uno' },
            { value: '2', label: 'Dos' },
            { value: '3', label: 'Tres' },
            { value: '4', label: 'Cuatro' },
            { value: '5', label: 'Cinco' },
          ]}
          required
          requiredMessage='El campo es requerido'
        />
      </form>
    </FormProvider>
  </div>
}