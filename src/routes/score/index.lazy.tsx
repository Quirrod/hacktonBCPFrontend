import { createLazyFileRoute } from '@tanstack/react-router'
import { BarChart, Card, CategoryBar, Flex, Icon, List, ListItem, Metric, Text } from '@tremor/react';
import { Check, CloudDownload, Filter, Flash, Spark, X, Xmark } from 'iconoir-react';

export const Route = createLazyFileRoute('/score/')({
  component: () => Dashboard(),
})


function Dashboard() {
  const cities = [
    {
      policy: 'POLITICA DE SEGURIDAD Y SALUD EN CADENA DE SUMINISTRO',
      check: true,
    },
    {
      policy: 'POLITICA DE SEGURIDAD Y SALUD',
      check: true,
    },
    {
      policy: 'POLITICA DE INDEPENDENCIA DE DIRECTORIO',
      check: false,
    },
    {
      policy: 'POLITICA DE EXPERIENCIA DE DIRECTORIO',
      check: true,
    },
    {
      policy: 'POLITICA DE DIVERSIDAD Y OPORTUNIDAD',
      check: true,
    },
    {
      policy: 'POLITICA DE DIVERSIDAD DE DIRECTORIO',
      check: true,
    },
  ];

  const chartdata = [
    {
      name: 'Uso de Energia',
      'relevancia': 2488,
    },
    {
      name: 'Uso de Agua',
      'relevancia': 1445,
    },
    {
      name: 'Politicas de Diversidad',
      'relevancia': 743,
    },
    {
      name: 'Emicion de CO2',
      'relevancia': 281,
    },
    {
      name: 'Brecha salarial',
      'relevancia': 251,
    },
  ];

  const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();


  return (
    <div className='flex flex-col gap-4 p-4 items-center text-center w-full'>
      <h1 className='text-3xl font-bold'>Reporte ESG - NOMBRE_EMPRESA</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4 w-[80%]">
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Emisiones CO2
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={CloudDownload}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de agua
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={Filter}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de energia
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={Flash}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de energia RVB
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={Spark}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-[80%]">
        <Card

          className="w-full col-span-2 sm:col-span-1 shadow-none sm:my-auto sm:h-full sm:flex sm:flex-col sm:justify-center"

        >
          <Text>
            Score - ESG
          </Text>
          <Metric>
            62 / 100
          </Metric>
          <CategoryBar
            values={[40, 30, 10]}
            colors={['emerald', 'yellow', 'rose']}
            markerValue={62}
          />
        </Card>
        <Card
          className="mx-auto w-full shadow-none"
        >
          <Metric>
            Politicas
          </Metric>
          <List className="mt-2">
            {cities.map((item) => (
              <ListItem key={item.policy}>
                <span>{item.policy}</span>
                <span>
                  <Icon
                    icon={item.check ? Check : Xmark}
                    variant={item.check ? 'light' : 'shadow'}
                    color={item.check ? 'emerald' : 'rose'}
                  />
                </span>
              </ListItem>
            ))}
          </List>
        </Card>
        <Card
          className="mx-auto w-full shadow-none col-span-2"
        >
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            KPI relevancia
          </h3>
          <BarChart
            data={chartdata}
            index="name"
            categories={['relevancia']}
            colors={['blue']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>
      </div>
    </div>
  )
}